import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createHashHistory({
    basename: '/dashboard',
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

export default function configureStore(preloadedState) {
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      compose(
        applyMiddleware(
          routerMiddleware(history)
          ),
    ),
  )

  return store
}