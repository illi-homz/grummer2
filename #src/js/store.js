'use strict';

grummer.store = {
  init()
  {
    grummer.breeds = this.breeds;
    grummer.categories = this.categories;
    grummer.servicesList = this.servicesList;
    grummer.ourWorks = this.ourWorks;
    grummer.questionsList = this.questions;
    grummer.feedbacksList = this.feedbacks;
  },
  breeds: [
    {title: 'Йоркширский терьер', value: 'york', type: 'dog'},
    {title: 'Шпиц', value: 'shpits', type: 'dog'},
    {title: 'Ши-Тцу', value: 'shi-tsy', type: 'dog'},
    {title: 'Мальтийская балонка/Мальтезе', value: 'malt-bolonka', type: 'dog'},
    {title: 'Бишон Фризе', value: 'bishon-frieze', type: 'dog'},
    {title: 'Афганская борзая /АФГАН', value: 'afgan-borzaya', type: 'dog'},
    {title: 'Пекинес', value: 'pekinez', type: 'dog'},
    {title: 'Американский Кокер-спаниель', value: 'american-koker-spaniel', type: 'dog'},
    {title: 'Аффенпинчер', value: 'affenpitcher', type: 'dog'},
    {title: 'Бассет-Хаунд', value: 'basset-haund', type: 'dog'},
    {title: 'Английский Кокер-спаниель', value: 'england-koker-spaniel', type: 'dog'},
    {title: 'Бобтейл', value: 'bobtail', type: 'dog'},
    {title: 'Акита-Ину', value: 'akita-inu', type: 'dog'},
    {title: 'Бульдог Английский', value: 'buldog-england', type: 'dog'},
    {title: 'Бедлингтон-терьер', value: 'bedlington-terier', type: 'dog'},
    {title: 'Вельш-Корги Пемброк', value: 'velsh-korgi', type: 'dog'},
    {title: 'Китайская хохлатая', value: 'сhinese-hohlataya', type: 'dog'},
    {title: 'Вельштерьер', value: 'velshterier', type: 'dog'},
    {title: 'Бультерьер', value: 'bulterier', type: 'dog'},
    {title: 'Пудель (той и карликовый)', value: 'pudel-toy-and-karlick', type: 'dog'},
    {title: 'Метис/Дворняга', value: 'metis-dvor', type: 'dog'},
    {title: 'Бриар', value: 'briar', type: 'dog'},
    {title: 'Папильон', value: 'papilion', type: 'dog'},
    {title: 'Золотистый ретривер/ голден', value: 'gold-retriver', type: 'dog'},
    {title: 'Алабай', value: 'alabai', type: 'dog'},
    {title: 'Колли', value: 'killi', type: 'dog'},
    {title: 'Вест-Хайленд', value: 'vest-hilend', type: 'dog'},
    {title: 'Чау-Чау', value: 'chau-chau', type: 'dog'},
    {title: 'Ньюфаундленд', value: 'newfaunlend', type: 'dog'},
    {title: 'Пудель (Малый. До 55см в холке)', value: 'litle-pudel', type: 'dog'},
    {title: 'Сеттер', value: 'setter', type: 'dog'},
    {title: 'Мопс', value: 'mops', type: 'dog'},
    {title: 'Грифон', value: 'grifon', type: 'dog'},
    {title: 'Цвергшнауцер', value: 'shwergshnautser', type: 'dog'},
    {title: 'Самоед', value: 'samoed', type: 'dog'},
    {title: 'Ротвейлер', value: 'rotveiler', type: 'dog'},
    {title: 'Мягкошерстный пшеничный терьер', value: 'soft-pshenich-terier', type: 'dog'},
    {title: 'Бигль', value: 'bigle', type: 'dog'},
    {title: 'Московская сторожевая', value: 'moskow-storogevaya', type: 'dog'},
    {title: 'Пудель КОРОЛЕВСКИЙ', value: 'pudel-king', type: 'dog'},
    {title: 'Спрингер-спаниель', value: 'springer-spaniel', type: 'dog'},
    {title: 'Джек-рассел-терьер', value: 'jack-rassel', type: 'dog'},
    {title: 'Лабрадор', value: 'labrador', type: 'dog'},
    {title: 'Маламут', value: 'malamut', type: 'dog'},
    {title: 'Черный русский терьер', value: 'black-rus-terier', type: 'dog'},
    {title: 'Ирландский терьер', value: 'ireland-terier', type: 'dog'},
    {title: 'Немецкая овчарка', value: 'deutsch-ovcharka', type: 'dog'},
    {title: 'Сенбернар', value: 'senbernar', type: 'dog'},
    {title: 'Кавалер Кинг Чарльз спаниель', value: 'kavaler-king-spaniel', type: 'dog'},
    {title: 'Бернский Зенненхунд', value: 'bern-zennenhund', type: 'dog'},
    {title: 'Боксер', value: 'boxer', type: 'dog'}
  ],
  categories: [
    {title: 'Гигиена', value: 'hygiene', icon: 'wash'},
    {title: 'Шерсть', value: 'wool', icon: 'barbershop'},
    {title: 'Когти', value: 'claw', icon: 'foot'},
    {title: 'Зубы', value: 'tooth', icon: 'tooth'},
    {title: 'Доп. услуги', value: 'add-services', icon: 'plus-box'},
  ],
  servicesList: [
    {title: 'SPA-комплекс', animal: 'dog', price: '1350 - 2400', time: '1.5 часа',
      category: 'hygiene',
      text: 'по восстановлению шерсти с маслом арганы',
      img: 'spa.svg'},
    {title: 'Озонотерапия', animal: 'dog', price: '1700 - 2100', time: '2.5 часа',
      category: 'hygiene',
      text: 'с маской',
      img: 'ozon-mask.svg'},
    {title: 'Озонотерапия', animal: 'dog', price: '1000', time: '1 час',
      category: 'hygiene',
      text: 'без маски',
      img: 'ozon-nomask.svg'},

    {title: 'Вычесывание', animal: 'dog', price: '1000', time: '1 час',
      category: 'wool',
      text: '',
      img: 'comb-out.svg'},
    {title: 'Расчёсывание колтунов', animal: 'dog', price: '1000', time: '1 час',
      category: 'hygwooliene',
      text: 'Дополнительная услуга без релаксанта (2мм) (в присутствии хозяина)',
      img: 'comb-kolts.svg'},
    {title: 'Полный тримминг', animal: 'dog', price: '2000', time: '1 час',
      category: 'wool',
      text: 'ручная щипка',
      img: 'trim.svg'},
    {title: 'Сбривание колтунов', animal: 'dog', price: '500', time: '30 мин',
      category: 'wool',
      text: 'без релаксанта (2мм) (в присутствии хозяина)',
      img: 'trim-kolt.svg'},

    {title: 'Подпил ногтей', animal: 'dog', price: '400 - 600', time: '1 час',
      category: 'claw',
      text: '',
      img: 'foot.svg'},

    {title: 'Ультразвуковая чистка зубов', animal: 'dog', price: '2500 - 4500', time: '1.5 часа',
      category: 'tooth',
      text: '',
      img: 'tooth.svg'},
    {title: 'Снятие зубного камня и налета', animal: 'dog', price: '1000 - 1500', time: '30 мин',
      category: 'tooth',
      text: 'механически',
      img: 'tooth.svg'},
    {title: 'Чистка зубов пастой', animal: 'dog', price: '350 - 550', time: '30 мин',
      category: 'tooth',
      text: '',
      img: 'toothpaste.svg'},
    {title: 'Полировка зубов пастой', animal: 'dog', price: '1000', time: '1 час',
      category: 'tooth',
      text: '',
      img: 'toothpaste.svg'},

    {title: 'Антипаразитальный комплекс', animal: 'dog', price: '400', time: '30 мин',
      category: 'add-services',
      text: '',
      img: 'antiparasite.svg'},
    {title: 'Обработка РЕК', animal: 'dog', price: '200', time: '30 мин',
      category: 'add-services',
      text: '',
      img: 'rek.svg'},
    {title: 'Снятий клеща + обработка раны', animal: 'dog', price: '100', time: '15 мин',
      category: 'add-services',
      text: '',
      img: 'tick.svg'},
    {title: 'Агрессивность животного', animal: 'dog', price: '500 - 1000', time: '',
      category: 'add-services',
      text: 'на усмотрение мастера',
      img: 'bad-animal.svg'},

    // cats
    {title: 'Стрижка', animal: 'cat', price: 'от 850', time: '1 час',
      category: 'wool',
      text: '',
      img: 'barbershop.svg'},
    {title: 'Мытьё', animal: 'cat', price: '250', time: '30 мин',
      category: 'wool',
      text: '',
      img: 'wash.svg'},
    {title: 'Экспресс линька', animal: 'cat', price: '1300', time: '1 час',
      category: 'wool',
      text: '',
      img: 'express-linka.svg'},
    {title: 'Окрашивание шерсти', animal: 'cat', price: 'от 1500', time: '',
      category: 'wool',
      text: 'Дополнительная услуга',
      img: 'color-wool.svg'},
    {title: 'Расчёсывание колтунов', animal: 'cat', price: '600', time: '',
      category: 'wool',
      text: 'В присутствии хозяина',
      img: 'comb-kolts.svg'},
    {title: 'Сбривание колтунов', animal: 'cat', price: '200 - 500', time: '',
      category: 'wool',
      text: 'В присутствии хозяина',
      img: 'trim-kolt.svg'},
    {title: 'Гигиена-комплекс', animal: 'cat', price: '1500', time: '',
      category: 'hygiene',
      text: 'Стрижка когтей,чистка ушей,ультразвуковая чистка зубов,чистка анальных желёз',
      img: 'wash-plus.svg'},

    {title: 'Выведение блох и удаление клещей', animal: '', price: '300', time: '',
      category: 'add-services',
      text: 'Дополнительная услуга',
      img: 'tick.svg'},
    {title: 'Помощь второго грумера', animal: '', price: '600', time: '',
      category: 'add-services',
      text: 'Дополнительная услуга',
      img: 'help-grummer.svg'},
    {title: 'Зоотакси', animal: '', price: 'от 300', time: '',
      category: 'add-services',
      text: 'заберем и привезем обратно после процедуры',
      img: 'zootaxi.svg'},
  ],
  ourWorks: [
    {
      img: 'slide-1.jpg',
      title: 'Подготовка к выставке1',
      text: 'До 30 см в холке1'
    },
    {
      img: 'slide-2.jpg',
      title: 'Подготовка к выставке2',
      text: 'До 30 см в холке2'
    },
    {
      img: 'slide-3.jpg',
      title: 'Подготовка к выставке3',
      text: 'До 30 см в холке3'
    },
    {
      img: 'slide-4.jpg',
      title: 'Подготовка к выставке4',
      text: 'До 30 см в холке4'
    },
    {
      img: 'slide-5.jpg',
      title: 'Подготовка к выставке5',
      text: 'До 30 см в холке5'
    },
    {
      img: 'slide-6.jpg',
      title: 'Подготовка к выставке6',
      text: 'До 30 см в холке6'
    },
    {
      img: 'slide-7.jpg',
      title: 'Подготовка к выставке7',
      text: 'До 30 см в холке7'
    },
  ],
  feedbacks: [
    {
      img: 'ava-1.jpg',
      text: 'Большое спасибо мастеру Марии. Бережно и профессионально выполнила свою работу. Быстро нашла подход к моей собаке со сложным характером :)'
    },
    {
      img: 'ava-1.jpg',
      text: 'Раньше ходила в другие салоны, но только в этом салоне девочки поняли, что я хочу. Вожу 2х собак и кота, все довольны! Всегда качественная работа'
    },
    {
      img: 'ava-1.jpg',
      text: 'Наконец мы нашли то что искали ! И в общении и в отношении и в сервисе и в качестве работы ! Во всем! Наша крошечная йорочка приведена в порядок специалистами салона безупречно!!! Это ювелирная работа!наша Симка весом 1,5 кг, то есть очень хрупкая, но подвижная девица теперь выглядит аккуратно и вот прям как нужно было !!!! Только в этот салон ! Всегда! Всем будем советовать только к ним! Девочкам терпения в работе и больше клиентов !'
    },
    {
      img: 'ava-1.jpg',
      text: 'Хожу в этот салон с самого открытия, привожу сразу трёх собак. Очень профессиональные Мастера, удобное расположение салона. Девочки спасибо вам огромное за красоту!!!'
    },
    {
      img: 'ava-1.jpg',
      text: 'Приходили на вычесывание. Мастер Елена смогла привести в порядок огромную дворнягу, которая сначала боялась всего, помыть и вычесать шерсть. Собака первый раз в салоне. Благодаря Елене собака к концу процедуры была спокойна, чистая, вычесанная и красивая. Ушла довольная!'
    },
    {
      img: 'ava-1.jpg',
      text: 'Моего старичка привели в порядок и сделали настоящее собачье счастье - он начал чувствовать прикосновения и ласку хозяйских рук. И вся эта красота благодаря моей волшебнице Елене и ее салону. Несколько часов высококвалифицированные грумеры трудились не покладая ножниц✂️ над сбитой до валенка шерстью. Чем только его не пытались стричь🤪🙈 Честно скажу, огромные ножницы для плотной ткани, не брали его шерсть, когда я пыталась обкрамсать Лучика дома. Мозоли...нервы...куча времени, а собака так и ходила с колтунами.... Шерсть настолько сложная, забитая, что полностью закрыла слуховой канал и спровоцировала боль ушек😭 Он не давался не мне, не ветеринару....я понятия не имею, как девочки выстрегли шерсть в ушках..... В общем огромное человеческое и сабачье спасибо♥️'
    },
    {
      img: 'ava-1.jpg',
      text: 'Хочу выразить благодарность грумерам салона ГрумЛета 🤗 сегодня мы почистили зубы нашей долматинке. Результат превосходный. Без наркоза, без боли моя собака доверилась мастерам. Так же нас намыли и подстригла ноготки. Ещё раз огромное спасибо. Вся работа выполнена профессионально и оперативно. 👍'
    },
    {
      img: 'ava-1.jpg',
      text: 'Не в первый раз посещаем данный салон. Сотрудники всегда вежливые. Приходила когда у лайки начиналась сезонная линька. У тех кто лайки или хаски, маламуты, самоеды и т.д. поймут что шерсть в такие дни просто везде. Его в салоне вымывают, вычесывают и выдувают, он по объему сразу становить легче, лишней шерсти нет, да и машина с квартирой сразу становиться чище. Так что во время линек мы там) Недавно возила щенка малинуа на помывку. Мылась она в салоне и выдувалась в первый раз. Работники салона конечно намучились с ней, щенок вел себя не очень хорошо, но они справились и закончили всю процедуру) Вышли оба чистенькие, вкусно пахнущие и с блестящей шерсткой) Приходить сюда будем еще однозначно.'
    },
  ]
}
