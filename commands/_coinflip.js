/*CMD
  command: /coinflip
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

let result = Math.random() < 0.5 ? 'Орёл' : 'Решка';
Bot.sendMessage('Результат: ' + result);
