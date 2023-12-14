import { UserStore } from './UserStore'

export class Store {
    userStore: UserStore;
    constructor() {
      // Store
      this.userStore = new UserStore(this);
    }
}

export const store =  new Store();