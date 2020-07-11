const { group_channel, bot } = require("../config.json")
module.exports = {
    name: 'rteam',
    description: 'remove a team role',
    args: true,
    guildOnly: true,
    usage: '<номер команды>',
    execute(message, args) {
        me = message.guild.members.cache.find(u => u.id === bot)
        if (me.roles.cache.find(r => r.name.includes("game"))) {
            return message.reply("Игра уже началась! Если вы хотите сменить команду, обратитесь к преподавателю.")
        }
        if (!group_channel.includes(message.channel.id)) { return message.delete(); }
        let role = message.guild.roles.cache.find(r => r.name === "Команда " + args.join(' '));
        if (!role) {
            return message.reply(`такой команды не существует`)
        }
        message.member.roles.remove(role)
    },
};