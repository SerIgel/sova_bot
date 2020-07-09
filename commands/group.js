const {group_channel} = require("../config.json")
module.exports = {
	name: 'group',
    description: 'Get a group role',
    args: true,
    guildOnly: true,
    usage: '<имя группы>',
	execute(message, args) {
        if (!group_channel.includes(message.channel.id)) {return message.delete();}
        if (!args[0].match(/^\d/)) {return message.delete();}
        if (message.member.roles.cache.find(r => r.name.match(/^\d/))) {
            return message.reply("у вас не может быть более одной роли группы")
        }
        let role = message.guild.roles.cache.find(r => r.name === args.join(' '));
        if (!role) {
            return message.reply(`такой группы не существует`)
        }
        message.member.roles.add(role)
        role = message.guild.roles.cache.find(r => r.name === "Ученик")
		message.member.roles.add(role)
	},
};