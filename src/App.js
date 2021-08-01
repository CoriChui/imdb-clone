import './App.scss';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Body from './components/main/Body'
import MovieDetails from './components/details/MovieDetails'
import { createStore } from 'redux'
import reducers from './redux/reducers'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

function App() {
  return (
    <Provider store={store}>

      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Body />
            </Route>
            <Route path="/movie">
              <MovieDetails />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>

    </Provider>
  );
}

export default App;
