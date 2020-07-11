const {group_channel} = require("../config.json")
module.exports = {
    name: 'rgroup',
    guildOnly: true,
    description: 'Remove a group role',
    args: true,
    usage: '<номер группы>',
	execute(message, args) {
        if (!group_channel.includes(message.channel.id)) {  return message.delete();}
        let role = message.guild.roles.cache.find(r => r.name === args.join(' '));
        if (!role) {
            return message.reply(`группы ${args.join(' ')} не существует`)
        }
		message.member.roles.remove(role)
	},
};