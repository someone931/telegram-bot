/*CMD
  command: /openroom
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

let args = message.replace("/openroom", "").trim().split(" ");
let code = args[0];
let server = args[1] || "Не указан";
let date = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

// проверка кода
if (!code || code.length !== 6) {
  Bot.sendMessage("❌ Ошибка: код должен быть 6 символов\nПример: /openroom ABCDEF Европа");
  return;
}

// получаем текущий список рум
let rooms = Bot.getProperty("rooms", []);

// добавляем новую
rooms.push({ code: code.toUpperCase(), server: server, date: date });
Bot.setProperty("rooms", rooms, "json");

Bot.sendMessage(
  "✅ Рума открыта!\n" +
  "Код: `" + code.toUpperCase() + "`\n" +
  "Сервер: " + server + "\n" +
  "Время: " + date
);
