/*CMD
  command: /echo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /echo@ehrrubot
  group: 
CMD*/

let text = "";

if (typeof message === "string" && message.length > 0) {
  text = message.replace(/^\/echo(@\w+)?\s*/, "");
}

if (!text) {
  Bot.sendMessage("❗ Нечего повторять!");
} else {
  Bot.sendMessage(text);
}
