module.exports = {
    name: 'rgroup',
    guildOnly: true,
    description: 'Remove a group role',
    args: true,
    usage: '<номер группы>',
	execute(message, args) {
        if (message.channel.id != "708339410370035743") {return message.delete();}
        let role = message.guild.roles.cache.find(r => r.name === "Группа "+args[0]);
        if (!role) {
            return message.reply(`такой группы не существует`)
        }
		message.member.roles.remove(role)
	},
};