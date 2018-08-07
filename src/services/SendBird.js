import SendBird from 'sendbird';

const sb = new SendBird({
  appId: 'ed3effd5867104cf65b4d3fb7f35b427850bb232',
});

export const SBconnect = (sbUserId, sbAccessToken) =>
  sb.connect(
    sbUserId,
    sbAccessToken,
    (user, error) =>
      new Promise((res, rej) => {
        if (user) {
          res('ok');
        } else {
          rej(error);
        }
      })
  );

export const getChannelList = () => {
  const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
  channelListQuery.includeEmpty = true;
  channelListQuery.limit = 20;

  if (channelListQuery.hasNext) {
    channelListQuery.next((channelList, error) => {
      if (error) {
        console.error(error);
        return;
      }

      console.log(channelList);
    });
  }
};
