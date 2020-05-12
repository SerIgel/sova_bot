module.exports = {
	name: 'set',
	description: 'Set an "Ученик" role to all the users without "Преподаватель" role',
	execute(message, args) {
        message.guild.members.cache.forEach(member => {
            if (!member.roles.cache.find(r => r.name === "Преподаватель")) {
                let role = message.guild.roles.cache.find(r => r.name === "Ученик")
                member.roles.add(role)
            }
        })
	},
};