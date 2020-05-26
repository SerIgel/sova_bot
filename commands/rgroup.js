const {group_channel} = require("../config.json")
module.exports = {
    name: 'rgroup',
    guildOnly: true,
    description: 'Remove a group role',
    args: true,
    usage: '<номер группы>',
	execute(message, args) {
        if (message.channel.id != group_channel) {  return message.delete();}
        let role = message.guild.roles.cache.find(r => r.name === "Группа "+args[0]);
        if (!role) {
            return message.reply(`такой группы не существует`)
        }
		message.member.roles.remove(role)
	},
};