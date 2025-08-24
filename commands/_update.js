/*CMD
  command: /update
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Что-то легче использовать Bot.sendMessage и также удобнее чем ответ в настройках

Bot.sendMessage("Бот обновлён. Что добавлено: /openroom - Даёт открыть комнату (есть проверка на шестизначный код) и имеется аргумент сервера. Второе по дефолту Европа. /closeroom - Закрыть руму. Аргументы: 1. Код (также проверка на шестизначноать) 2. Причина (может быть чем угодно)")
