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
            const taggedUser = m.guild.members.cache.get(m.mentions.users.first().id)
            taggedUser.roles.add(m.member.roles.highest)
        }
	},
};