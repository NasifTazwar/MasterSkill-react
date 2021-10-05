import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Home from './component/Home/Home';
import AllServicesPage from './component/AllServicesPage/AllServicesPage';
import AboutUs from './component/AboutUs/AboutUs';
import ContactUs from './component/ContactUs/ContactUs';
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
                <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/services">
              <AllServicesPage></AllServicesPage>
          </Route>
          <Route exact path="/about">
              <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
              <ContactUs></ContactUs>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
