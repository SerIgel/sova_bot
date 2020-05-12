module.exports = {
	name: 'group',
    description: 'Get a group role',
    args: true,
    usage: '<номер группы>',
	execute(message, args) {
        if (message.channel.id != "708339410370035743") {return message.delete();}
        let role = message.guild.roles.cache.find(r => r.name === "Группа "+args[0]);
        if (!role) {
            return message.reply(`такой группы не существует`)
        }
        role = message.guild.roles.cache.find(r => r.name === "Ученик")
            member.roles.add(role)
		message.member.roles.add(role)
	},
};
        