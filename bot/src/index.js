const TelegramBot = require('node-telegram-bot-api')

const token = '7391357454:AAH7Dc0uhTeptvpfL0Uz3TqjUy7lu8bcHBA'
const webAppUrl = 'https://18a8-95-46-69-236.ngrok-free.app'

const bot = new TelegramBot(token, {polling: true})

bot.on('message', async(msg) => {
    const chatId = msg.chat.id
    const text = msg.text
    
    if(text === '/start') {
        bot.sendMessage(chatId, "Hello", {reply_markup: {
            inline_keyboard: [
                [{text: "Web app", web_app: {url: webAppUrl}}]
            ],
            resize_keyboard: true
        }})
    }
})