/*CMD
  command: /status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /status@ehrrubot, status, статус
  group: 
CMD*/

// /status
let now = new Date();

// Время в Москве (UTC+3)
let hour = now.getUTCHours() + 3;
if (hour >= 24) hour -= 24;

let minute = now.getUTCMinutes();

// Формат времени с ведущим нулём
function two(n) { return (n < 10 ? "0" : "") + n; }
let timeText = two(hour) + ":" + two(minute);

// Логика диапазонов
let rum15 = (hour === 15); // 15:00–15:59
let rum19 = (hour === 19);
let rum20 = (hour === 20);

if (rum15) {
  Bot.sendMessage("🕒 Сейчас " + timeText + " по МСК -  идёт рума (скорее всего), началась где-то в 15:00!");
} else if (rum19) {
  Bot.sendMessage("🕖 Сейчас " + timeText + " по МСК - идёт рума (скорее всего), началась где-то в 19:00!");
} else if (rum20) {
  Bot.sendMessage("🕗 Сейчас " + timeText + " по МСК - идёт рума (скорее всего), началась где-то в 20:00!");
} else {
  Bot.sendMessage("⏳ Сейчас " + timeText + " по МСК - рум сейчас скорее всего нет.");
}
