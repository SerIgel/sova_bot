const { admin } = require("../config.json")
module.exports = {
    name: 'set',
    guildOnly: true,
    description: 'Set something',
    async execute(message, args) {
        message.guild.members.cache.forEach(member => {
            if (message.member.id !== admin) { return message.reply("не для вас эта команда росла") }
            let re = /Группа (.*)/g;
            message.guild.channels.cache.forEach(async ch => {
                if (ch.type != "voice" || ch.parent.name.toLowerCase() === "дорешка" || !ch.name.match(re)) { return; }
                await ch.setName(ch.name.replace(`Группа `, ``))
            })

        })
    },
};