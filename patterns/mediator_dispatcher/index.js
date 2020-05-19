/**  https://makushev.com/2015/08/04/mediator-dispatcher-oop-pattern/
 Реализация
 Снова я оговорюсь, что представленный ниже код - иллюстрация подхода. Потому я нарочно не захламляю его лишними методами, проверками и
 прочей логикой. Наша цель - понять суть.

 Саша, Маша и новости
 Если вы читали статью про паттерн Observer, то вы уже знаете наших героев. Предлагаю реализовать следующий пример.

 Существует некий новостной журнал. Его задача генерировать новости и зарабатывать на этом деньги. Для этого у журнала есть инструменты для
 добавления новостей. Они даже наняли редактора новостей, который умеет эти новости генерировать, но он фрилансер и вообще живет в другом
 часовом поясе. Как быстро распространять новости, журнал пока еще не представляет. Но им повезло, есть агентство, которое умеет набирать
 базу подписчиков и отправлять им то, что подписчикам интересно. Ну вот юзкейс для реализации и готов. Давайте разберем кто у нас есть:

 Саша и Маша - подписчики
 Новостной журнал - хранилище новостей с инструментом для добавления новости
 Редактор новостей - сторонний компонент, который добавляет новости
 Агентство - диспетчер/медиатор

 Вначале мы просим редактора заполнить базу журнала какими-нибудь шокирующими новостями. Затем запустим режим “лайв”, в котором каждые
 3 секунды журнал будет публиковать по новости. Если новости закончатся - мы попросим диспетчера сообщить об этом редактору, который
 быстренько подсуетится и придумает новость.

 Для Саши и Маши это все будет происходит “за кулисами”. Они не хотят вникать в суть всего механизма, а просто хотят читать новости.
 Маша про моду, Саша все остальное. Как мы видим диспетчер обо всем позаботится, и свяжет несколько компонентов в единый работающий механизм.
 */

//Опишем наш медиатор. Он будет диспетчером рассылки новостей.
class Dispatcher {
  //хранилище всех подписчиков
  constructor () {
    this.subscribers = {};
  }

  //метод для подписки на какое-либо событие
  on = (event, handler) => {
    // eslint-disable-next-line no-prototype-builtins
    if (this.subscribers.hasOwnProperty(event)) {
      this.subscribers.push(handler);
    } else {
      this.subscribers[event] = [handler];
    }
  }

  //метод для вызова обработчиков на некое событие
  trigger = (event, data) => {
    // console.log(this.subscribers);
    for (const ev in this.subscribers) {
      if (ev !== event) {
        continue;
      }
      // eslint-disable-next-line no-prototype-builtins
      if (this.subscribers.hasOwnProperty(ev)) {
        this.subscribers[ev].forEach(function (handler) {
          handler(data);
        });
      }
    }
  }
}

//Наш журнал, с некоторыми новостями
class Magazine {
  constructor (dispatcher) {
    this.news = [];
    this.dispatcher = dispatcher;
  }

  //Метод в журнале, который просто добавляет новую новость
  addNews = (category, title) => {
    this.news.push({
      category: category,
      title: title,
    });
  };

  //Режим "лайв". Каждые 3 секунды выпускаем новость в свет
  live = () => {
    let newsItem;

    setInterval(() => {
      if (this.news.length === 0) {
        //если новости закончились - кричим об этом
        this.dispatcher.trigger('No news');
        return;
      }
      newsItem = this.news.splice(0, 1)[0];
      //отдаем диспетчеру очередную новость
      this.dispatcher.trigger(newsItem.category, newsItem.title);
    }, 1000);
  };
}

//Пользователь, который может всем всё рассказывать, либо писать от этом в блог
class User {
  constructor (name) {
    this.name = name;
  }

  tellToEveryone = (anything) => {
    console.log(`I am ${this.name}. Did you heard that ${anything}  ?`);
  };

  writeToBlog = (anything) => {
    console.log(`Hi, it's ${this.name}. Just known that ${anything}!!! OMG!`);
  };

}

//Редактор новостей, ответственный за генерирование новостей
class NewsMaker {
  constructor (magazine) {
    this.magazine = magazine;
  }

  generateNews = () => {
    this.magazine.addNews('Sport', 'Auto news was generated #' + (Math.random() * 100).toFixed(0));
  };

  addNews = (category, title) => {
    this.magazine.addNews(category, title);
  };
}

const dispatcher = new Dispatcher();
const magazine = new Magazine(dispatcher);
const newsMaker = new NewsMaker(magazine);

const sasha = new User('Sasha');
const masha = new User('Masha');

//Сообщаем диспетчеру о том, на что подписан каждый из наших участников
dispatcher.on('Sport', sasha.tellToEveryone);
dispatcher.on('News', sasha.tellToEveryone);
dispatcher.on('Fashion', masha.writeToBlog);
dispatcher.on('No news', newsMaker.generateNews);

//пусть редактор добавит несколько новостей сразу
newsMaker.addNews('Sport', 'Alenichev\'s Spartak won his first home match against Rubin Kazan');
newsMaker.addNews('Fashion', 'The best shop ever opened in Moscow');
newsMaker.addNews('Sport', 'Messi signed new Barcelona contract');
newsMaker.addNews('News', 'Martians have landed on Earth');
newsMaker.addNews('Fashion', 'Do your selfie right!');
newsMaker.addNews('Sport', 'Christiano Ronaldo moved to Anzhi');
newsMaker.addNews('News', 'Crimea is ours!');

//Запускаем режим "лайв"
magazine.live();
