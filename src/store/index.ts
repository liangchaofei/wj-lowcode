import { UserStore, UserStateType } from './UserStore'
import { CompoentStore, ComponentsStateType } from './CompoentStore'


export type StateType = {
  user: UserStateType
  components: ComponentsStateType
}

export class Store {
    userStore: UserStore;
    compoentStore: CompoentStore;
    constructor() {
      // Store
      this.userStore = new UserStore(this);
      this.compoentStore = new CompoentStore(this)
    }
}

export const store =  new Store();