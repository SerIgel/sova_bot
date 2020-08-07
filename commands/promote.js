module.exports = {
    name: 'promote',
    guildOnly: true,
    description: 'Promote member',
    args: true,
    usage: `<user>`,
	execute(message, args) {
        if (!message.member.roles.cache.find(r => ["Преподаватель", "Волонтёр"].includes(r.name))) {
            console.log("somebody tried to hack the system")
            message.reply(`вы уже должны быть преподавателем или волонтёром, чтобы давать роль преподавателя или волонтёра другим.`)
        } else {
	    if (!message.mentions.users.first()) {return message.reply("you need to specify a person to promote")}
            const taggedUser = message.guild.members.cache.get(message.mentions.users.first().id)
            taggedUser.roles.add(message.member.roles.highest)
        }
	},
};

