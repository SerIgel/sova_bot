const { admin } = require('../config.json');
module.exports = {
	name: 'clear',
	aliases: ["remove"],
	async execute(message, args) {
        let amount = (args[0])?args[0]:100
        
        if (!["Волонтёр", "Преподаватель", "техсаппорт"].includes(message.member.roles.highest.name) && (message.member.id !== admin)) {
            return message.reply(`вы должны быть преподавателем, волонтёром или мной, чтобы чистить канал`)
        }
        await message.delete()
        const clear = (async () => {
            await message.channel.messages.fetch({ limit: amount })
            .then(messages => { 
                message.channel.bulkDelete(messages)})
            ;
        })()
	},
};