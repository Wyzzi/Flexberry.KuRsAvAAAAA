import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.caption'),
          title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.title'),
          children: [{
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-товары-спр-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-чек-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-чек-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-клиент-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-клиент-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l',
            caption: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l.caption'),
            title: i18n.t('forms.application.sitemap.ku-rs-av-a-a-a-a-a.i-i-s-ku-rs-av-a-a-a-a-a-банк-дан-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})