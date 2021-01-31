const Discord = require("discord.js");
const client = new Discord.Client();

const moment = require("moment");
const fs = require("fs");
const db = "még nincs"

const config = require("./config.json");


client.log = message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
client.commands = new Discord.Collection();


fs.readdir('./commands/', (err, files) => {
    client.log(`Összesen ${files.length} parancs betöltése!`);
    files.forEach(file => {
        client.log(`Parancs betöltve! ${file}`)
        const command = require(`./commands/${file}`);
        const cName = file.split('.')[0];

        client.commands.set(cName, command);
    });
});

fs.readdir('./events/', (err, files) => {
    client.log(`Összesen ${files.length} esemény betöltése.`);
  
    files.forEach(file => {
      client.log(`Esemény betöltve! ${file}`);
      const event = require(`./events/${file}`);
      const eName = file.split('.')[0];
      client.on(eName, (...arg) => event.run(client, db, ...arg));
    });
});
client.login(config.token);