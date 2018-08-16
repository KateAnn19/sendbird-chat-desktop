import SendBird from 'sendbird';

const sb = new SendBird({
  appId: '0867B9E8-AC7A-4744-A99F-2420FA273CB0',
});

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

export const enterChannel = channelUrl =>
  new Promise((res, rej) => {
    sb.OpenChannel.getChannel(channelUrl, (channel, error) => {
      if (error) {
        rej(error);
      }

      channel.enter((response, err) => {
        if (err) {
          rej(err);
        }

        res(response);
      });
    });
  });
