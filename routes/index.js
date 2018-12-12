var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Персонажи мультсериала Тачки',
                        description: 'На данном сайте вы найдете информацию о персонажах из мультсериала Тачки.',
                        image: "images/tachki.jpg" });
});

/* Kvyn page. */
router.get('/kvyn', function(req, res, next) {
  res.render('hero', { title: 'Молния Мак Куин',
                       description: 'Главный герой мультсериала Тачки.',
                       image: "images/kvyn.jpg" });
});

/* Mak page. */
router.get('/mak', function(req, res, next) {
  res.render('hero', { title: 'Мак',
                      description: 'Трейлер. Друг Мак Куина.',
                      image: "images/mak.jpg" });
});

/* Metr page. */
router.get('/metr', function(req, res, next) {
  res.render('hero', { title: 'Мэтр',
                       description: 'Коренной житель Радиатор-Спрингса и местная знаменитость.',
                       image: "images/metr.jpg" });
});

/* Salli page. */
router.get('/salli', function(req, res, next) {
  res.render('hero', { title: 'Салли',
                        description: 'Обворожительная Порше 911 родом из Лос-Анджелеса.',
                        image: "images/salli.jpg" });
});

/* Serjant page. */
router.get('/serjant', function(req, res, next) {
  res.render('hero', { title: 'Сержант',
                          description: 'Ветеран Второй Мировой, армейский джип 42-го года.',
                          image: "images/serjant.jpg" });
});

module.exports = router;
