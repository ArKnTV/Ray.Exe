const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    console.log("Connected")
});

function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ':x: ' + description
    }});
}

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!hello') {
           // message.reply('world !');
           message.channel.send('world !');
        }
    }
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Biencenue sur mon serveur' + member.displayName);
    }).catch(console.error)
});

bot.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send('Au revoir' + member.displayName);
    }).catch(console.error)
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!markdown') {
           message.channel.send(
`Le **Markdown**, c'est la *vie* ! ***Discord***

~~bonjour~~
__bonjour__
`);
            message.channel.send("``Code``")
        }
        else if(message.content === '!richEmbed1') {
            message.channel.send({embed: {
                color: 3447003,
                description: 'Bonjour le monde !'
            }});
        }
        else if(message.content === '!richEmbed2') {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Titre',
                url: 'http://google.com',
                description: 'Bonjour le monde !',
                fields: [{
                    name: 'Du texte simple',
                    value: 'Votre texte ici'
                },
                {
                    name: 'ajout d\'une URL',
                    value : 'Voilà l\'adresse de [Google](http://google.com)'
                },
                {
                    name: 'Markdown',
                    value: 'Le **Markdown**, c\'est la *vie* ! ***Discord***'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Par Λɾl{η'
                }
            }});
        }
        else if(message.content === '!richEmbed3') {
            const embed = new Discord.RichEmbed();
            embed.setTitle('Mon titre - 256 caractères')
            .setAuthor('Nom','https://i.imgur.com/lm8s41J.png')
            .setColor(3447003)
            .setDescription('Ma Description -2048 caractères')
            .setFooter('Pied de page - 2048', 'https://i.imgur.com/w1vhFSR.png')
            .setImage('https://i.imgur.com/yVpYmuV.png')
            .setThumbnail('https://i.imgur.com/p2qNFag.png')
            .setTimestamp()
            .setURL('http://google.com');

            embed.addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
            .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
            .addBlankField(true)
            .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***');

            message.channel.send({embed: embed});
        }
    }
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        let splitMessage = message.content.split(" ");
        if(splitMessage[0] === '!commande') {
            if(splitMessage.length === 2)
                message.channel.send('Paramètre: ' + splitMessage[1]);
            else
                sendError(message, 'Erreur, problème dans les paramètres.');
        }
    }
});

bot.login(process.env.TOKEN);
