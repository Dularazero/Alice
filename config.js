let fs = require('fs')
let chalk = require('chalk')

global.owner = ['94711392491', '94711392491'] // Letakan nomor kamu disini

global.APIs = { // API Prefix
  // nama: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://api.reysekha.my.id',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  waifupics: 'https://api.waifu.pics',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://melcanz.com': 'trial',
  'https://api.reysekha.my.id': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto.xyz': 'hardianto',
  'https://api.neoxr.eu.org': 'UYFhJwJ9du',
  'https://api.chipa.xyz': 'pais',
  'https://api.xteam.xyz': 'ea25ce2bb9efb7c5',
  'https://api.zeks.me': 'rNOP3N9WFFY7tqbMeNp1lmWkdwLqqqq',
}

// Sticker WM
global.packname = 'Rias 🎋'
global.author = 'Gremory'

global.wm = '© Rias Gremory'
global.wait = 'Please wait'
global.eror = 'Server Error'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'dikit lagi'
global.fla = 'https://telegra.ph/file/badb18b76cbe1987ba881.jpg'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
