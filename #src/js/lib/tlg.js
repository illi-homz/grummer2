grummer.tlg = {
  init()
  {
    this.URL = `https://grummer-sender.herokuapp.com/sendMessage`
    this.URL_IMG = `http://127.0.0.1:5000/sendPhoto`
    this.URL_IMGS = `http://127.0.0.1:5000/sendPhotos`
    // this.URL_IMG = `https://grummer-sender.herokuapp.com/sendPhoto`
    // this.URL_IMG = `https://grummer-sender.herokuapp.com/sendPhotos`
  },
  async sendCallBack(form)
  {
    let msg = '*Заказ звонка*\n\n'
    msg += this.createMsg(form).replace('name', 'Клиент').replace('tel', 'Тел')

    return await this.sendMessage(msg)
  },
  createMsg(form)
  {
    const inputs = $(form).find('input').toArray()
    return inputs.reduce((acc, input) => acc += `#${input.name}: ${input.value}\n`, '')
  },
  async sendMessage(msg)
  {
    return await fetch(this.URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg)
    })
    .then(response => response.status === 200)
  },
  async sendImg(photo) {
    const formData = new FormData()
    formData.append('file', photo)

    return await fetch(this.URL_IMG, {
      method: 'POST',
      body: formData
    })
  },
  async sendImgs(photos) {
    const formData = new FormData()

    photos.forEach(img => {
      formData.append('files', img)
    })

    return await fetch(this.URL_IMGS, {
      method: 'POST',
      body: formData
    })
  }
}
