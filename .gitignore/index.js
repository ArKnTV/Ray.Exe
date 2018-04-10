const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    bot.user.setActivity("Fortnite");
    console.log("Connected");
    //console.log(bot.channels.get('432588414261657620'))

bot.channels.get('432588414261657620').fetchMessage('432866515751141376') // fetch -> id du msg homme ou femme
      .then(fetch => {
          const collector = fetch.createReactionCollector((reaction, user) => ['🚺', '🚹' ].includes(reaction.emoji.name))
          collector.on('collect', reaction => {
            var client = bot.guilds.get('430008711889682432').members.get(reaction.users.first().id) //id du server
              if(reaction.emoji.name==='🚺'){
                if(client.roles.has('432596458198401048')){ // id du Role Homme
                	client.addRole('432596414837555211') //On ajoute le rôle femme
                  client.removeRole('432596458198401048') //On retire le rôle homme
                  return;
                }
                client.addRole('432596414837555211')
              }
              if(reaction.emoji.name==='🚹'){
                if(client.roles.has('432596414837555211')){ //id du Role Femme
                	client.addRole('432596458198401048') //ajout rôle Homme //id du Role Homme
                	client.removeRole('432596414837555211') //retire Rôle Femme 
                	return;
                }
                client.addRole('432596458198401048')
              }
          })
});

bot.channels.get('432588414261657620').fetchMessage('432868610390753282') // fetch -> id du msg +18 ou -18
      .then(fetch => {
          const collector = fetch.createReactionCollector((reaction, user) => ['✅', '🔞' ].includes(reaction.emoji.name))
          collector.on('collect', reaction => {
            var client = bot.guilds.get('430008711889682432').members.get(reaction.users.first().id) //id du server
              if(reaction.emoji.name==='✅'){
                if(client.roles.has('432594130502156308')){ // id du Rôle -18
                	client.addRole('432594093881688078') //On ajoute le rôle +18
                  client.removeRole('432594130502156308') //On retire le rôle -18
                  return;
                }
                client.addRole('432594093881688078') // attribue +18
              }
              if(reaction.emoji.name==='🔞'){
                if(client.roles.has('432594093881688078')){ //id du Role +18
                	client.addRole('432594130502156308') //ajout rôle -18 
                	client.removeRole('432594093881688078') //retire Rôle +18
                	return;
                }
                client.addRole('432594130502156308') // attribue -18
              }
          })
});

bot.channels.get('432588414261657620').fetchMessage('432886837426782218')
      .then(fetch => {
          const collector = fetch.createReactionCollector((reaction, user) => ['🚀', '⛏' ].includes(reaction.emoji.name))
          collector.on('collect', reaction => {
          var client = bot.guilds.get('430008711889682432').members.get(reaction.users.first().id)

              if(reaction.emoji.name==='🚀'){
                client.addRole('432594158629421066')
              }

              if(reaction.emoji.name==='⛏'){
              
                client.addRole('432594312186822679')
              }
          })
});

});

bot.on('guildMemberAdd', member => {
    try{
    var embed = new Discord.RichEmbed()
    .setTitle('**Bienvenue !**')
    .setColor(0x4cf6ff)
    .setDescription(
      `Bienvenue au refuge d'[ArKn](https://discord.gg/4XdNkGW), Survivant ${member.user.username}.
      Je suis Ray ! Moi et le Commandant,
      sommes là pour aider tous les survivants du refuge,
      à se battre contre cette horrible tempête.

Mais avant celà nous aurrions besoin que chacun remplisse la fiche de renseignement, grâce à laquelle on s'aurait quelle rôle vous allez jouer dans cette bataille.`
    )
    .setFooter('Pied de page - 2048', 'https://vignette.wikia.nocookie.net/fortnite/images/7/79/Fortnite_rey.png/revision/latest?cb=20170731214331')//'https://i.imgur.com/w1vhFSR.png')
    .setImage('https://i.imgur.com/yVpYmuV.png')
    .setThumbnail('https://i.imgur.com/p2qNFag.png')
    .setTimestamp()
    .setURL('http://google.com')

    .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
    .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
    .addBlankField(true)
    .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***');         
    
    var embed2 = new Discord.RichEmbed()
    .setTitle('**Lien Utiles !**')
    .setColor(0xc76fe8)
    .setDescription('Ma Description -2048 caractères')
    .setFooter('Pied de page - 2048', 'https://i.imgur.com/w1vhFSR.png')
    .setImage('https://i.imgur.com/yVpYmuV.png')
    .setThumbnail('https://i.imgur.com/p2qNFag.png')
    .setTimestamp()
    .setURL('http://google.com')

    .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
    .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***')
    .addBlankField(true)
    .addField('Markdown', 'Le **Markdown**, c\'est la *vie* ! ***Discord***');         
    
    	
member.user.send(embed)
member.user.send(embed2)
    
  } catch (err) {
    console.log(err)
  }
});

bot.on('message', msg => {
    if(msg.content.startsWith('!say')){
        msg.delete()
        msg.channel.send(msg.content.substr(4))
    }

    if(msg.author.id!=='289133829229117444')return;
});

bot.login(process.env.TOKEN);
