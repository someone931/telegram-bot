/*CMD
  command: /listrooms
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

if (rooms.length === 0) {
  Bot.sendMessage("📭 Список комнат пуст.");
} else {
  let text = "📋 Список открытых комнат:\n\n";
  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    text += "▫️ Код: " + room.code + 
            " | Сервер: " + room.server + 
            " | Статус: " + (room.status || "Лобби") + "\n";
  }
  Bot.sendMessage(text);
}
