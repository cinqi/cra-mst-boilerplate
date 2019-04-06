import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const GlobalViewStore = types
  .model('GlobalViewStore', {
    sample: types.string,
  })
  .actions(self => ({
    action() {
      self.sample = 'foo';
    },
  }));

const globalViewStore = GlobalViewStore.create({
  sample: 'bar',
});

makeInspectable(globalViewStore);

export default globalViewStore;
