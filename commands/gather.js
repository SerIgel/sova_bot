module.exports = {
    name: 'gather',
    args: true,
    usage: `<номер группы | all | всех>`,
    alases: ["собрать"],
    description: 'Gather people in current voice channel',
    async execute(message, args) {
        if (!message.member.roles.cache.find(r => r.name === "Преподаватель")) {
            return message.reply(`вы должны быть преподавателем, чтобы собирать людей в канал`)
        }
        if (!message.member.voice.channel.id) {
            return message.reply(`вы должны быть в голосовом канале, чтобы собирать в него людей`)
        }

        message.guild.members.cache.forEach(member => {
            if (member.roles.cache.find(r =>
                r.name = (['all', 'всех'].includes(args[0]) ? "Ученик" : ("Группа " + args[0])))) {
                if (member.voice.channel) {
                    member.voice.setChannel(message.member.voice.channel.id);
                }
            }
        })
    },
};
//message.member.voice.channel.id