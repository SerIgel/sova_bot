const { admin } = require("../config.json")
module.exports = {
    name: 'set',
    guildOnly: true,
    description: 'Set something',
    async execute(message, args) {
        message.guild.members.cache.forEach(member => {
            
        })
    },
};