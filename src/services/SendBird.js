import SendBird from 'sendbird';
import { store } from '../redux/store';
import { setMessage } from '../redux/chat/actions';

const sb = new SendBird({
  appId: '0867B9E8-AC7A-4744-A99F-2420FA273CB0',
});

const ChannelHandler = new sb.ChannelHandler();

ChannelHandler.onMessageReceived = (channel, message) => {
  store.dispatch(setMessage(message));
};

sb.addChannelHandler('234', ChannelHandler);

export const SBconnect = (sbUserId, sbAccessToken) =>
  new Promise((res, rej) =>
    sb.connect(
      sbUserId,
      sbAccessToken,
      (user, error) => {
        if (user) {
          res(user);
        } else {
          rej(error);
        }
      }
    )
  );

export const SBdisconnect = () =>
  new Promise(res =>
    sb.disconnect(() => {
      console.log('disconnected');
      res();
    })
  );

const getOpenChannels = () =>
  new Promise((res, rej) => {
    const openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
    openChannelListQuery.next((channels, error) => {
      if (error) {
        rej(error);
      }
      res(channels);
    });
  });

const getGroupChannels = () =>
  new Promise((res, rej) => {
    const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = true;
    channelListQuery.limit = 50; // pagination limit could be set up to 100

    if (channelListQuery.hasNext) {
      channelListQuery.next((channelList, error) => {
        if (error) {
          rej(error);
        }
        res(channelList);
      });
    }
  });

export async function getChannelsList() {
  const openChannels = await getOpenChannels();
  const groupChannels = await getGroupChannels();
  return [...openChannels, ...groupChannels];
}

export const createOpenChannel = (name, coverUrl, data = null) =>
  new Promise((res, rej) => {
    sb.OpenChannel.createChannel(
      name,
      coverUrl,
      data,
      (createdChannel, error) => {
        if (error) {
          console.error(error);
          rej();
        }

        // onCreated
        res(createdChannel);
      }
    );
  });

export const createGroupChannel = (userIds, name, coverUrl, data = null) =>
  new Promise((res, rej) => {
    sb.GroupChannel.createChannelWithUserIds(
      userIds,
      false,
      name,
      coverUrl,
      data,
      (createdChannel, error) => {
        if (error) {
          console.error(error);
          rej();
        }

        res(createdChannel);
      }
    );
  });

export const enterOpenChannel = channelUrl =>
  new Promise((res, rej) => {
    sb.OpenChannel.getChannel(channelUrl, (channel, error) => {
      if (error) {
        rej(error);
      }

      channel.enter((response, err) => {
        if (err) {
          rej(err);
        }

        res(channel);
      });
    });
  });

export const getGroupChannel = channelUrl =>
  new Promise((res, rej) => {
    sb.GroupChannel.getChannel(channelUrl, (channel, error) => {
      if (error) {
        rej(error);
      }

      res(channel);
    });
  });

export const sendUserMessage = (
  channel,
  message,
  data = null,
  customType = null
) =>
  new Promise((res, rej) => {
    channel.sendUserMessage(message, data, customType, (msg, error) => {
      if (error) {
        rej(error);
      }

      res(msg);
    });
  });

export const loadMessages = channel =>
  new Promise((res, rej) => {
    const messageListQuery = channel.createPreviousMessageListQuery();
    messageListQuery.load(30, true, (messageList, error) => {
      if (error) {
        rej(error);
      }

      res(messageList);
    });
  });
