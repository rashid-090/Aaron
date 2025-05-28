import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ParallaxProvider>


      <App />
    </ParallaxProvider>
  </Provider>
)
