module.exports = {
    name: 'me',
    description: '/me from irc',
    args: true,
    execute(message, args) {
        if (message.channel.id === "710444961425915937") {
            if (args.join(" ") === "продолжает идти к успеху!") {
                message.author.send("Следующее кодовое слово: ПОСТУПЛЮ")
            }
        }
        message.channel.send(`${message.author} ${args.join(" ")}`);
        message.delete();
    },
};