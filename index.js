const TelegramBot = require('node-telegram-bot-api')
const token = '6267511241:AAECCtUtxlBbkbXExvREMKUvFXyFp4iNY14';
const bot = new TelegramBot(token, {polling: true});


bot.on ('message',  (msg)  => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId,
    `Привет ${msg.from.first_name} Ты написал: ${msg.text}`);
  bot.sendPhoto(chatId, 'https://cs13.pikabu.ru/avatars/2803/x2803851-1296183554.png')
  bot.sendMessage(chatId,
    `Бугагагага`);
});
