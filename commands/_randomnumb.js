/*CMD
  command: /randomnumb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ранд число, рандом число, рч, рандомное число, рандом цифра, рц, рандомная цифра, рандомная цифра, рц, /randomnumb@ehrrubot
  group: 
CMD*/

const numb = Math.floor(Math.random() * 9999); // от 0 до 99999

Bot.sendMessage("🎲 Твоя случайная цифра: " + numb);
