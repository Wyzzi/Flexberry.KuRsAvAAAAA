import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', 'Unit | Model | i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-ku-rs-av-a-a-a-a-a-банк-дан',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-заправ-бак',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-заправка-авто',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-клиент',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-т-ч-товары',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-товары-спр',
    'model:i-i-s-ku-rs-av-a-a-a-a-a-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
