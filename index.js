const {Telegraf} = require('telegraf')

const bot = new Telegraf('1407193838:AAGwhgYGVJOwxn4-H7j2LZFGnsMsnQAH6Zk')

bot.start((ctx)=>{
    ctx.reply('Hello\nworld');
})

bot.help((ctx) =>{
    ctx.reply('COMMANDS:\n/start : Start the BOT\n/help : Show this command\n\n\nMore Commands and functionality coming soon....\nStay Tuned')
})

bot.on('photo',(ctx)=>{
    ctx.reply('NOICE PHOTO')
})


bot.on('sticker',(ctx)=>{
    console.log('a')
    ctx.reply('Wow!! Sticker')
})

bot.launch()