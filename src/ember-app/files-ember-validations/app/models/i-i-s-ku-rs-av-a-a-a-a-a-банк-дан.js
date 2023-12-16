import {
  defineNamespace,
  defineProjections,
  Model as БанкДанMixin
} from '../mixins/regenerated/models/i-i-s-ku-rs-av-a-a-a-a-a-банк-дан';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БанкДанMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
