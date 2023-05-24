const TelegramBot = require('node-telegram-bot-api')
const token = '6267511241:AAECCtUtxlBbkbXExvREMKUvFXyFp4iNY14';
const bot = new TelegramBot(token, { polling: true });

const commands = [
  {
    command: '/say',
    description: 'Скажи'
  }
];
bot.setMyCommands(commands);

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId,
    `Привет ${msg.from.first_name} Ты написал: ${msg.text}`);

});
