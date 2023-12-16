import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  заправкаАвто: DS.belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-клиент', { inverse: null, async: false }),
  тЧТовары: DS.hasMany('i-i-s-ku-rs-av-a-a-a-a-a-т-ч-товары', { inverse: 'чек', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-чек.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-чек.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
  заправкаАвто: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-чек.validations.заправкаАвто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-чек.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТовары: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-чек.validations.тЧТовары.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧекE', 'i-i-s-ku-rs-av-a-a-a-a-a-чек', {
    номер: attr('Номер чека', { index: 0 }),
    заправкаАвто: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто', 'Количество топлива', {
      колТоп: attr('Количество топлива', { index: 1 }),
      заправБак: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак', '', {
        типТопл: attr('Тип топлива', { index: 2 }),
        цена: attr('Цена', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-клиент', 'Карта лояльности', {
      картаЛояль: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', '', {
        ном: attr('Карта лояльности', { index: 4 }),
        процСкид: attr('Процент скидки', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма чека', { index: 6 }),
    тЧТовары: hasMany('i-i-s-ku-rs-av-a-a-a-a-a-т-ч-товары', 'Товары', {
      товарыСпр: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-товары-спр', 'Товар', {
        наим: attr('Товар', { index: 0 }),
        цена: attr('Цена', { index: 1 })
      }, { index: -1, hidden: true }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ЧекL', 'i-i-s-ku-rs-av-a-a-a-a-a-чек', {
    номер: attr('Номер чека', { index: 0 }),
    заправкаАвто: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто', 'Количество топлива', {
      колТоп: attr('Количество топлива', { index: 1 }),
      заправБак: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак', '', {
        типТопл: attr('Тип топлива', { index: 2 }),
        цена: attr('Цена', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-клиент', 'Карта лояльности', {
      картаЛояль: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', '', {
        ном: attr('Карта лояльности', { index: 4 }),
        процСкид: attr('Процент скидки', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма чека', { index: 6 })
  });
};
