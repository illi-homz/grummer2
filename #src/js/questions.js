grummer.questions = {
  init()
  {
    this.initItems()

    this.$spoiler = $('.questions__spoiler')
    this.items = this.$spoiler.find('.questions__item')
    this.items.first()
      .addClass('active')
      .find('.questions__item-text')
      .slideDown(300)
  },
  initItems()
  {
    const template = $.trim( $('#questions__spoiler-temp').html() )
    const list = $('.questions__spoiler ul')

    const html = grummer.questionsList.reduce((acc, q) => {
      const answer = q.answers.reduce((acc, a) => {
        return acc += `<p>${a}</p>`
      }, '')

      return acc += template
        .replace(/{{question}}/ig, q.question)
        .replace(/{{answer}}/ig, answer)
    }, '')

    list.html(html)
  },
  toggleText(el)
  {
    const $el = $(el)

    this.$spoiler.find('.questions__item-text').slideUp(300)
    this.items.removeClass('active')

    $el.siblings('.questions__item-text').slideToggle(300)
    $el.parent('.questions__item').addClass('active')
  }
}
