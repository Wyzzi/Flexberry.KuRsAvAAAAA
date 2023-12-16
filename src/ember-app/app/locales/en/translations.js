import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKuRsAvAAAAAБанкДанLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l';
import IISKuRsAvAAAAAЗаправБакLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l';
import IISKuRsAvAAAAAЗаправкаАвтоLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l';
import IISKuRsAvAAAAAКартаЛояльLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l';
import IISKuRsAvAAAAAКлиентLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-клиент-l';
import IISKuRsAvAAAAAТоварыСпрLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l';
import IISKuRsAvAAAAAЧекLForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-чек-l';
import IISKuRsAvAAAAAБанкДанEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-e';
import IISKuRsAvAAAAAЗаправБакEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-e';
import IISKuRsAvAAAAAЗаправкаАвтоEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-e';
import IISKuRsAvAAAAAКартаЛояльEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-e';
import IISKuRsAvAAAAAКлиентEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-клиент-e';
import IISKuRsAvAAAAAТоварыСпрEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-e';
import IISKuRsAvAAAAAЧекEForm from './forms/i-i-s-ku-rs-av-a-a-a-a-a-чек-e';
import IISKuRsAvAAAAAБанкДанModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-банк-дан';
import IISKuRsAvAAAAAЗаправБакModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак';
import IISKuRsAvAAAAAЗаправкаАвтоModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто';
import IISKuRsAvAAAAAКартаЛояльModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль';
import IISKuRsAvAAAAAКлиентModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-клиент';
import IISKuRsAvAAAAAТЧТоварыModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-т-ч-товары';
import IISKuRsAvAAAAAТоварыСпрModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-товары-спр';
import IISKuRsAvAAAAAЧекModel from './models/i-i-s-ku-rs-av-a-a-a-a-a-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан': IISKuRsAvAAAAAБанкДанModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак': IISKuRsAvAAAAAЗаправБакModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто': IISKuRsAvAAAAAЗаправкаАвтоModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль': IISKuRsAvAAAAAКартаЛояльModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-клиент': IISKuRsAvAAAAAКлиентModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-т-ч-товары': IISKuRsAvAAAAAТЧТоварыModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр': IISKuRsAvAAAAAТоварыСпрModel,
    'i-i-s-ku-rs-av-a-a-a-a-a-чек': IISKuRsAvAAAAAЧекModel
  },

  'application-name': 'Ku rs av AAAAA',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Ku rs av AAAAA',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ku rs av AAAAA',
          title: 'Ku rs av AAAAA'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'ku-rs-av-a-a-a-a-a': {
          caption: 'KuRsAvAAAAA',
          title: 'KuRsAvAAAAA',
          'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l': {
            caption: 'Заправка авто',
            title: ''
          },
          'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l': {
            caption: 'Карта лояльности',
            title: ''
          },
          'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l': {
            caption: 'Товарный справочник',
            title: ''
          },
          'i-i-s-ku-rs-av-a-a-a-a-a-чек-l': {
            caption: 'Чек',
            title: ''
          },
          'i-i-s-ku-rs-av-a-a-a-a-a-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l': {
            caption: 'Цистерна топлива',
            title: ''
          },
          'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l': {
            caption: 'Банковские данные',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l': IISKuRsAvAAAAAБанкДанLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l': IISKuRsAvAAAAAЗаправБакLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l': IISKuRsAvAAAAAЗаправкаАвтоLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l': IISKuRsAvAAAAAКартаЛояльLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-клиент-l': IISKuRsAvAAAAAКлиентLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l': IISKuRsAvAAAAAТоварыСпрLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-чек-l': IISKuRsAvAAAAAЧекLForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-e': IISKuRsAvAAAAAБанкДанEForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-e': IISKuRsAvAAAAAЗаправБакEForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-e': IISKuRsAvAAAAAЗаправкаАвтоEForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-e': IISKuRsAvAAAAAКартаЛояльEForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-клиент-e': IISKuRsAvAAAAAКлиентEForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-e': IISKuRsAvAAAAAТоварыСпрEForm,
    'i-i-s-ku-rs-av-a-a-a-a-a-чек-e': IISKuRsAvAAAAAЧекEForm
  },

});

export default translations;
