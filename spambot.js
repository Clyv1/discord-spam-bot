const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'bottokengoeshere';
const CHANNEL_ID = 'channelid';

client.once('ready', () => {
    console.log('success, the bot is online');
    const channel = client.channels.cache.get(CHANNEL_ID);

    // Check if the bot found the channel
    if (!channel) {
        console.error('Channel not found!');
        return;
    }

    // Start spamming messages
    const messageToSend = 'replace message you want to spam, if you want to spam ping copy the user id and do like <@1127678753343029268>';

    setInterval(() => {
        channel.send(messageToSend);
    }, 5000); // currently every 5 seconds, change it to fit ur need
});

client.login(TOKEN);
