const { admin } = require("../config.json")
module.exports = {
    name: 'reset',
    guildOnly: true,
    description: 'Reset teams',
    async execute(message, args) {
        message.guild.members.cache.forEach(async member => {
            let role = member.roles.cache.find(r => r.name.includes("Команда"))
            if (!role) { return; }
            await member.roles.remove(role)
        })
    },
};