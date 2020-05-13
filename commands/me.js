module.exports = {
    name: 'me',
    description: '/me from irc',
    args: true,
    execute(message, args) {
        message.channel.send(`${message.author} ${args.join(" ")}`);
        message.delete();
    },
};