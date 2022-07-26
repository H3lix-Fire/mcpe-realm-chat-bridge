const WebSocket = require('ws');
const uuid = require('uuid');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require("./config.json");

const prefix = config.prefix;

const wss = new WebSocket.Server({
  host: config.socket_ip,
  port: 3000
})

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

wss.on('connection', socket => {
  console.log('Connected.');

  socket.send(JSON.stringify({
    'header': {
      'version': 1,
      'requestId': uuid.v4(),
      'messageType': 'commandRequest',
      'messagePurpose': 'subscribe'
    },
    'body': {
      'eventName': 'PlayerMessage'
    }
  }))

  socket.on('message', packet => {
    const msg = JSON.parse(packet);
    if (msg.body.receiver === '') {
      var embed = {
        color: 0x0099ff,
        title: msg.body.sender + ' said',
        description: msg.body.message
      }
    }
    else {
      var embed = {
        color: 0x0099ff,
        title: msg.body.sender + ' whispers to ' + msg.body.receiver,
        description: msg.body.message
      }
    }
    client.channels.cache.get(config.link_channel).send({ embeds: [embed] })
    console.log(msg);
  })
})

client.on('ready', () => {
  console.log('Bot ready.');
})

client.login(config.token)
