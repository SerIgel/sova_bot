const {group_channel} = require("../config.json")
module.exports = {
	name: 'group',
    description: 'Get a group role',
    args: true,
    guildOnly: true,
    usage: '<имя группы>',
	execute(message, args) {
        if (!group_channel.includes(message.channel.id)) {return message.delete();}
<<<<<<< HEAD
        
        if (message.member.roles.cache.find(r => r.name.match(/^\d/))) {
            return message.reply("у вас не может быть более одной роли группы")
        }
        if (!args.join(' ').match(/^\d/)) { return message.delete(); }
=======
        if (!args[0].match(/^\d/)) {return message.delete();}
        if (message.member.roles.cache.find(r => r.name.match(/^\d/))) {
            return message.reply("у вас не может быть более одной роли группы")
        }
>>>>>>> 0336dfd50d932c968fad4e7e5a0b5ce288ce5709
        let role = message.guild.roles.cache.find(r => r.name === args.join(' '));
        if (!role) {
            return message.reply(`такой группы не существует`)
        }
        message.member.roles.add(role)
        role = message.guild.roles.cache.find(r => r.name === "Ученик")
		message.member.roles.add(role)
	},
};