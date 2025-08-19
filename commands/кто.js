/*CMD
  command: кто
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: кто
  group: 
CMD*/

let members = ["@iris_dp_bot", "@ehrrubot", "@CindySilver", "@chelovek_01218", "@KripaKeller", "@justjustjustjustjustjustjustjus1", "@sSmEDlJidc", ".", "@MOILZER", "@dKwGqox", "@Arbuzikamog", "@Ivan114472", "@heisennburgerr", "@Flerepx", "@axolotl122_55", "@xtocbqq", "@Xlebobublik1", "@MirkVrt", "@Sultygov97", "@iceshowyy", "@Hsasdias", "@Cheddar_Official"];

let member = members[Math.floor(Math.random() * members.length)];

Bot.sendMessage("🤔Думаю ты говоришь о " + member);
