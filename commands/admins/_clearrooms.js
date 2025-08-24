/*CMD
  command: /clearrooms
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

let rooms = Bot.getProperty("rooms", []);   // получаем комнаты
let count = rooms.length;

Bot.setProperty("rooms", [], "json");       // чистим массив

if(count > 0){
  Bot.sendMessage("🧹 Очистка: удалено " + count + " комнат.");
} else {
  Bot.sendMessage("🧹 Очистка: список уже пуст.");
}
