/*CMD
  command: /reverse
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /reverse@ehrrubot
  group: 
CMD*/

let text = "";

// Проверяем что message есть и строка
if (typeof message === "string" && message.length > 0) {
  text = message.replace(/^\/reverse(@\w+)?\s*/, ""); // убираем /reverse или /reverse@ehrrubot
}

// Если текста нет — используем имя/юзернейм
if (!text) {
  if (user && (user.username || user.first_name)) {
    text = user.username || user.first_name;
  } else {
    text = "Аноним";
  }
}

// Реверсим и отправляем
let reversed = text.split("").reverse().join("");
Bot.sendMessage("🔄 " + reversed);
