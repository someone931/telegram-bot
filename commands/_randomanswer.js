/*CMD
  command: /randomanswer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 8ball, /8ball, random, рандом, /8балл, инфа, /инфа, /randomanswer@ehrrubot
  group: 
CMD*/

let answers = ["Перспективы нехорошы.", "Скорее нет.", "Ответ верен.", "Думаю да.", "Думаю нет.", "Ответ неверен", "Перспективы хорошы.", "Скорее да"];
let answer = answers[Math.floor(Math.random() * answers.length)];

Bot.sendMessage(answer);



