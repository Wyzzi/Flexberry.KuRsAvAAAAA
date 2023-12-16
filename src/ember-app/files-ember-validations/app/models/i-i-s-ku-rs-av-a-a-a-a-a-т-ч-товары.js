import {
  defineNamespace,
  defineProjections,
  Model as ТЧТоварыMixin
} from '../mixins/regenerated/models/i-i-s-ku-rs-av-a-a-a-a-a-т-ч-товары';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧТоварыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
