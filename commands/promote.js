module.exports = {
	name: 'promote',
    description: 'Promote member',
    args: true,
    usage: `<user>`,
	execute(m, args) {
        if (!m.member.roles.cache.find(r => r.name === "Преподаватель")) {
            console.log("somebody tried to hack the system")
            m.reply(`вы уже должны быть преподавателем, чтобы давать роль преподавателя другим.`)
        } else {
            const taggedUser = m.guild.members.cache.get(m.mentions.users.first().id)
            taggedUser.roles.add("708311867629764639")
        }
	},
};