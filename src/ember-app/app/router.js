import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-e/new' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-e/new' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-e/new' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-e/new' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-клиент-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-клиент-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-клиент-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-клиент-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-клиент-e/new' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-e/new' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-чек-l');
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-чек-e',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-чек-e/:id' });
  this.route('i-i-s-ku-rs-av-a-a-a-a-a-чек-e.new',
  { path: 'i-i-s-ku-rs-av-a-a-a-a-a-чек-e/new' });
});

export default Router;
