grummer.tlg = {
  init()
  {
    // this.botToken = '1099602765:AAHqQuSvZMqFzjWQLhwHIYV977STJZLRG60'
    // this.chat_id = "256263953"
    // this.URL = `https://api.telegram.org/bot${this.botToken}/sendMessage`
    this.URL = `https://grummer-sender.herokuapp.com/sendMessage`
  },
  async sendCallBack(form)
  {
    const msg = '*Заказ звонка*\n\n' + this.createMsg(form)

    return await this.sendMessage(msg)
  },
  createMsg(form)
  {
    const inputs = $(form).find('input').toArray()
    return inputs.reduce((acc, input) => acc += `#${input.name}: ${input.value}\n`, '')
  },
  async sendMessage(msg)
  {
    // const data = {
		// 	'chat_id': this.chat_id,
		// 	'text': msg,
		// 	'parse_mode': 'markdown'
		// };

    return await fetch(this.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg)
    })
    .then(response => response.status === 200)
  }
}
