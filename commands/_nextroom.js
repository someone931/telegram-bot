/*CMD
  command: /nextroom
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

let UTC = new Date();
let mskHour = (UTC.getUTCHours() + 3) % 24;
let message;

if (mskHour < 15) {
  message = "Следующая комната в 15:00 МСК";
} else if (mskHour < 19) {
  message = "Следующая комната в 19:00/20:00 МСК";
} else if (mskHour < 20) {
  message = "Следующая комната в 20:00 МСК";
} else {
  message = "Сегодня, скорее всего, комнаты уже закончились, жди завтра 15:00 МСК";
}

Bot.sendMessage("📅 " + message);
