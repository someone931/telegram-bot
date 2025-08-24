/*CMD
  command: /dice
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

let roll = Math.floor(Math.random() * 6) + 1;
Bot.sendMessage('🎲Вам попалась: ' + roll)
