   
   
let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://telegra.ph/file/c264ba134089f0b2ef129.mp4', '', '✨ Hello Honey ✨💞\n📊 Active Since: ${uptime}\nType .menu to get full menu 💞✨🤍', m)
  
}
handler.help = ['alive']
handler.tags = ['tools']
handler.command = /^(alive)$/i

module.exports = handler
