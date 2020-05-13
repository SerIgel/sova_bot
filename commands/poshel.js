module.exports = {
    name: 'poshel',
    aliases: ["пошёл","иди"],
    description: 'Посылает юзера в ответ',
    args: true,
    execute(message, args) {
        message.reply(`сам иди ${args.join(' ')}!`);
    },
};