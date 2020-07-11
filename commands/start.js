const { bot } = require("../config.json")
module.exports = {
    name: 'start',
    guildOnly: true,
    description: 'Start a game',
    args: false,
	execute(message, args) {
        if (!message.member.roles.cache.find(r => ["Преподаватель", "Волонтёр"].includes(r.name))) {
            console.log("somebody tried to hack the system")
            return message.reply(`вы уже должны быть преподавателем или волонтёром, чтобы начинать или завершать игру.`)
        }
        let role = message.guild.roles.cache.find(r => r.name === "game");
        me = message.guild.members.cache.find(u => u.id === bot)
        me.roles.add(role)
    }
}