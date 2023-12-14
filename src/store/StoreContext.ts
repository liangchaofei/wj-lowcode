import { createContext } from 'react';
import { Store } from '.';

const StoreContext = createContext<Store>(new Store());

export default StoreContext;
