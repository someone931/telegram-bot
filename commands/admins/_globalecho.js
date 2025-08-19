/*CMD
  command: /globalecho
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admins

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Получаем текст после команды, удаляя саму команду
let text = message.replace(/^\/globalecho\s*/, "");

// Локальный массив чатов
let chatList = [-1733477133, -4828872494, -2726803474]; // замените на свои chatId

// Отправка текста в каждый чат
for (let chatId of chatList) {
  Bot.sendMessage(chatId, "📢 " + text);
}

// Подтверждение отправки
Bot.sendMessage("✅ Сообщение отправлено во все чаты.");
