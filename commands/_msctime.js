/*CMD
  command: /msctime
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /msctime@ehrrubot, московское время, время по мск, время мск, мск время
  group: 
CMD*/

let now2 = new Date();

// Время в Москве (UTC+3)
let hour = now2.getUTCHours() + 3;
if (hour >= 24) hour -= 24;

let minute = now2.getUTCMinutes();

function two(n) { return (n < 10 ? "0" : "") + n; }
let timeText = two(hour) + ":" + two(minute);

// Логика диапазонов
let rum15 = (hour === 15);
let rum19 = (hour === 19);
let rum20 = (hour === 20);

Bot.sendMessage("⏳Московское время - " + timeText);
