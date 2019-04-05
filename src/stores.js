//  If you want to use only one root store, add other models in this store
import { types } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst';

const RootStore = types
  .model('RootStore', {
      test: types.string
  })
  .actions(self => ({
    foo() {
      self.test = 'foo'
    }
  }));

const rootStore = RootStore.create({
  test: "bar"
});

makeInspectable(rootStore);

export default rootStore;