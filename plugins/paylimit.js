let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let fail = `This command is to give limits to other users\n\nExample:\n${usedPrefix + command} @9725135960 10\or reply to your message with the command: ${usedPrefix + command} 10`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['9725135960@s.whatsapp.net'] } })
        throw false
    }
    if (typeof global.db.data.users[who] == "undefined") {
        global.db.data.users[who] = {
            exp: 0,
            limit: 10,
            lastclaim: 0,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            Afk: -1,
            AfkReason: '',
            banned: false,
            level: 0,
            call: 0,
            role: 'Warrior V',
            autolevelup: false,
            pc: 0,
        }
    }
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['9725135960@s.whatsapp.net'] } })
        throw false
    }
    if (isNaN(txt)) throw 'only numbers'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'minimum 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'The limit is not enough to transfer, there is a tax as well'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} Limit) + (${-pjk} Limit (Pajak 2%)) = ( ${-limit} Limit)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paylimit @user <amount>']
handler.tags = ['xp']
handler.command = /^payl(imit)?$/

module.exports = handler
