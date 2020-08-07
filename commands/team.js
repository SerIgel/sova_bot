const { group_channel, bot } = require("../config.json")
module.exports = {
    name: 'team',
    description: 'Get a team role',
    args: true,
    guildOnly: true,
    usage: '<номер команды>',
    execute(message, args) {
        me = message.guild.members.cache.find(u => u.id === bot)
        if (me.roles.cache.find(r => r.name.includes("game"))) {
            return message.reply("Игра уже началась! Если вы хотите сменить команду, обратитесь к преподавателю.")
        }
        if (!group_channel.includes(message.channel.id)) { return message.delete(); }
        if (message.member.roles.cache.find(r => r.name.includes("Команда"))) {
            return message.reply("у вас не может быть более одной роли команды")
        }
        let role = message.guild.roles.cache.find(r => r.name === "Команда " + args.join(' '));
        if (!role) {
            return message.reply(`такой команды не существует`)
        }
        if (role.members.size >= 5) { message.reply("в этой команде уже есть пять человек"); return;}
        message.member.roles.add(role)
    },
};
