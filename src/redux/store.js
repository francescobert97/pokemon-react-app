import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/reducers';



const persistConfig = {
    key: 'root',
    storage    // Il tipo di storage (localStorage o sessionStorage)
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(persistedReducer,  applyMiddleware(thunk));

const persistor = persistStore(store);

console.log('Persistor:', persistor);
console.log('Store:', store);
export {store, persistor};