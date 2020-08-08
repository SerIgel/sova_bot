const { admin } = require('../config.json');
module.exports = {
    name: 'message',
    aliases: ["send"],
    args: true,
    usage: `<роль группы/вообще любая роль> <сообщение>`,
    guildOnly: true,
    description: 'Разослать сообщение',
    execute(message, args) {
        if (!["Волонтёр", "Преподаватель"].includes(message.member.roles.highest.name) && (message.member.id !== admin)) {
            return message.reply(`вы должны быть преподавателем, волонтёром или мной, чтобы делать рассылку`)
        }
        args.shift()
        message.guild.members.cache.forEach(member => {
            if (member.roles.cache.find(r =>
                r === message.mentions.roles.first())) {
                member.send(args.join(" "))
                message.reply(member.user.tag)
            }

        })
    },
};