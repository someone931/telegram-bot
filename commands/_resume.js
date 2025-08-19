/*CMD
  command: /resume
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
  Bot.sendMessage("❌ Укажите код комнаты. Пример: /resume ABCDEF");
} else {
  let code = parts[1].toUpperCase();
  let found = false;

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].code === code) {
      rooms[i].status = "Лобби";
      found = true;
      break;
    }
  }

  if (found) {
    Bot.setProperty("rooms", rooms, "json");
    Bot.sendMessage("▶️ Рума " + code + " снова активна (Лобби).");
  } else {
    Bot.sendMessage("❌ Рума с кодом " + code + " не найдена.");
  }
}
