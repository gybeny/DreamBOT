
const Discord = require('discord.js');

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("xd")
  .setFooter("test");
  message.channel.send({embed});
    
};
