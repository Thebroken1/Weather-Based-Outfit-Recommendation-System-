const { Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const token = process.env.DISCORD_TOKEN || 'MTI5ODM0OTQ2NTYyMjU0NDQyNA.GiZMjR.ExuLVEbeWXz-0EQlIVd44ycJZjUYLgXXi1NUdo'; // Replace with your token if not using an env variable.

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Log in to Discord
client.login(token);

// Ready event
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Message create event
client.on('messageCreate', async message => {
    // Check if the message is from a bot
    if (message.author.bot) return;

    // Log received message content for debugging
    console.log(`Received message from ${message.author.username}: ${message.content}`);

// Check if the message starts with 'L.kiss'
const command = message.content.split(' ')[0].toLowerCase();

    // Check for the specific message "what"
    if (message.content.toLowerCase() === 'what') {
        // URL of the GIF (Make sure it's a direct link to a GIF file)
        const gifUrl = 'https://tenor.com/view/chicken-meme-seasoning-men-gif-26785455.gif'; // Sample direct GIF link

        // Create an attachment from the GIF URL
        const attachment = new AttachmentBuilder(gifUrl);

        // Send the attachment in the channel
        await message.reply({ files: [attachment] })
            .then(() => console.log('GIF sent successfully'))
            .catch(error => console.error('Error sending GIF:', error));
    }
    if (message.content.toLowerCase() === 'wat') {
        // URL of the GIF (Make sure it's a direct link to a GIF file)
        const gifUrl = 'https://tenor.com/view/chicken-meme-seasoning-men-gif-26785455.gif'; // Sample direct GIF link

        // Create an attachment from the GIF URL
        const attachment = new AttachmentBuilder(gifUrl);

        // Send the attachment in the channel
        await message.reply({ files: [attachment] })
            .then(() => console.log('GIF sent successfully'))
            .catch(error => console.error('Error sending GIF:', error));
    }
    if (message.content.toLowerCase() === 'wah') {
        // URL of the GIF (Make sure it's a direct link to a GIF file)
        const gifUrl = 'https://tenor.com/view/chicken-meme-seasoning-men-gif-26785455.gif'; // Sample direct GIF link

        // Create an attachment from the GIF URL
        const attachment = new AttachmentBuilder(gifUrl);

        // Send the attachment in the channel
        await message.reply({ files: [attachment] })
            .then(() => console.log('GIF sent successfully'))
            .catch(error => console.error('Error sending GIF:', error));
    }
    if (message.content.toLowerCase() === 'wht') {
        // URL of the GIF (Make sure it's a direct link to a GIF file)
        const gifUrl = 'https://tenor.com/view/chicken-meme-seasoning-men-gif-26785455.gif'; // Sample direct GIF link

        // Create an attachment from the GIF URL
        const attachment = new AttachmentBuilder(gifUrl);

        // Send the attachment in the channel
        await message.reply({ files: [attachment] })
            .then(() => console.log('GIF sent successfully'))
            .catch(error => console.error('Error sending GIF:', error));
    }
    if (message.content.toLowerCase() === 'wa') {
        // URL of the GIF (Make sure it's a direct link to a GIF file)
        const gifUrl = 'https://tenor.com/view/chicken-meme-seasoning-men-gif-26785455.gif'; // Sample direct GIF link

        // Create an attachment from the GIF URL
        const attachment = new AttachmentBuilder(gifUrl);

        // Send the attachment in the channel
        await message.reply({ files: [attachment] })
            .then(() => console.log('GIF sent successfully'))
            .catch(error => console.error('Error sending GIF:', error));
    }
    if (message.content.toLowerCase() === 'wha') {
        // URL of the GIF (Make sure it's a direct link to a GIF file)
        const gifUrl = 'https://tenor.com/view/chicken-meme-seasoning-men-gif-26785455.gif'; // Sample direct GIF link

        // Create an attachment from the GIF URL
        const attachment = new AttachmentBuilder(gifUrl);

        // Send the attachment in the channel
        await message.reply({ files: [attachment] })
            .then(() => console.log('GIF sent successfully'))
            .catch(error => console.error('Error sending GIF:', error));
    }
});


