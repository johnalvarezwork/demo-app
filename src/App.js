import './App.css';
import { Provider } from 'react-redux';

import Page1 from './components/pages/PageOne';
import Page2 from './components/pages/PageTwo';
import Header from './components/utils/Header';

import store from './store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route exact path="/page-two" component={Page2} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
