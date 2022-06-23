let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Dana:* 081321776496
• *Axis:* 6283134915183
• *Telkomsel:* 6281321776496

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://www.instagram.com/invites/contact/?i=9xe70ak174ak&utm_content=kjc21le

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6282135905896', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler
