import {
  defineNamespace,
  defineProjections,
  Model as КартаЛояльMixin
} from '../mixins/regenerated/models/i-i-s-ku-rs-av-a-a-a-a-a-карта-лояль';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КартаЛояльMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
