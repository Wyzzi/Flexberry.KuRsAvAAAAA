import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колТоп: DS.attr('number'),
  номКол: DS.attr('number'),
  номШл: DS.attr('number'),
  заправБак: DS.belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак', { inverse: null, async: false })
});

export let ValidationRules = {
  колТоп: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто.validations.колТоп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номКол: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто.validations.номКол.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номШл: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто.validations.номШл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заправБак: {
    descriptionKey: 'models.i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто.validations.заправБак.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаправкаАвтоE', 'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто', {
    номКол: attr('Номер колонки', { index: 0 }),
    номШл: attr('Номер шланга', { index: 1 }),
    заправБак: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак', 'Бак заправочный', {
      типТопл: attr('Тип топлива', { index: 3 }),
      цена: attr('Цена', { index: 4 })
    }, { index: 2 }),
    колТоп: attr('Количество топлива', { index: 5 })
  });

  modelClass.defineProjection('ЗаправкаАвтоL', 'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто', {
    номКол: attr('Номер колонки', { index: 0 }),
    номШл: attr('Номер шланга', { index: 1 }),
    заправБак: belongsTo('i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак', 'Тип топлива', {
      типТопл: attr('Тип топлива', { index: 2 }),
      цена: attr('Цена', { index: 3 })
    }, { index: -1, hidden: true }),
    колТоп: attr('Количество топлива', { index: 4 })
  });
};
