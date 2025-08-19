/*CMD
  command: /chance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: шанс, /chance@ehrrubot
  group: 
CMD*/

const numb = Math.floor(Math.random() * 100); // от 0 до 99999

Bot.sendMessage("🤔Думаю шанс " + numb + "%");
