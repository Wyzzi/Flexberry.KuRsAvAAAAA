import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ku-rs-av-a-a-a-a-a-клиент', 'Unit | Serializer | i-i-s-ku-rs-av-a-a-a-a-a-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ku-rs-av-a-a-a-a-a-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
