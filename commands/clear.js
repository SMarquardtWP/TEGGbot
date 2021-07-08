module.exports = (client, channel, user, streamer) => {
    if (user.mod || user.username.toLowerCase() === streamer) {
      client.clear(channel);
  
      return client.say(
        channel,
        `@${user.username} The chat has been cleared!
      `);
    }
  
    return client.say(
      channel,
      `@${user.username} you don't have permission to do that...`
    );
  };