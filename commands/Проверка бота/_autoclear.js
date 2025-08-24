/*CMD
  command: *autoclear
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Проверка бота

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let lastClear = Bot.getProperty("lastClearTime");

if (!lastClear) {
  // если ещё не было даты — установим сейчас
  Bot.setProperty("lastClearTime", Date.now(), "integer");
} else {
  let now = Date.now();

  // 2 часа = 7200000 мс
  if (now - lastClear >= 7200000) {
    let rooms = Bot.getProperty("rooms", []);
    let count = rooms.length;

    Bot.setProperty("rooms", [], "json");
    Bot.setProperty("lastClearTime", now, "integer");

    if (count > 0) {
      Bot.sendMessage("🧹 Авто-очистка: удалено " + count + " комнат.");
    }
  }
}
