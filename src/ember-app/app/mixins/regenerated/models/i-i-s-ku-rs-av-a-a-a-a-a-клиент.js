import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  eMail: DS.attr('string'),
  датаРожд: DS.attr('date'),
  наимен: DS.attr('string'),
  номТел: DS.attr('string'),
  банкДан: DS.belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-банк-дан', { inverse: null, async: false }),
  картаЛояль: DS.belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', { inverse: null, async: false })
});

export let ValidationRules = {
  eMail: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-клиент.validations.eMail.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРожд: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-клиент.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наимен: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-клиент.validations.наимен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номТел: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-клиент.validations.номТел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  банкДан: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-клиент.validations.банкДан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картаЛояль: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-клиент.validations.картаЛояль.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-ku-rs-av-a-a-a-a-a-клиент', {
    наимен: attr('ФИО', { index: 0 }),
    номТел: attr('Номер телефона', { index: 1 }),
    eMail: attr('EMail', { index: 2 }),
    датаРожд: attr('Дата рождения', { index: 3 }),
    банкДан: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-банк-дан', 'Банковские данные', {
      номКарт: attr('Банковская карта', { index: 5 })
    }, { index: 4 }),
    картаЛояль: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', 'Карта лояльности', {
      ном: attr('Карта лояльности', { index: 7 })
    }, { index: 6 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-ku-rs-av-a-a-a-a-a-клиент', {
    наимен: attr('ФИО', { index: 0 }),
    номТел: attr('Номер телефона', { index: 1 }),
    eMail: attr('EMail', { index: 2 }),
    датаРожд: attr('Дата рождения', { index: 3 }),
    банкДан: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-банк-дан', 'Банковская карта', {
      номКарт: attr('Банковская карта', { index: 4 })
    }, { index: -1, hidden: true }),
    картаЛояль: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', 'Карта лояльности', {
      ном: attr('Карта лояльности', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
