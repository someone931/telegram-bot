/*CMD
  command: /close
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

let rooms = Bot.getProperty("rooms", []);

let parts = message.split(" ");
if (parts.length < 2) {
  Bot.sendMessage("❌ Укажите код комнаты. Пример: /closegame ABCDEF host_leave");
} else {
  let code = parts[1].toUpperCase();
  let reason = (parts.length >= 3) ? parts.slice(2).join(" ") : "Хост стартовал игру";

  let found = false;

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].code === code) {
      rooms.splice(i, 1);
      found = true;
      break;
    }
  }

  if (found) {
    Bot.setProperty("rooms", rooms, "json");
    Bot.sendMessage("❌ Рума " + code + " закрыта.\nПричина: " + reason);
  } else {
    Bot.sendMessage("❌ Рума с кодом " + code + " не найдена.");
  }
}
