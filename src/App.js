import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Pedagogy from './pages/Pedagogy/Pedagogy';
import Schools from './pages/Schools/Schools';
import Franchise from './pages/Franchise/Franchise';
import Contact from './pages/Contact/Contact';
import KidoVillage from './pages/KidoVillage/kidoVillage';
import Blog from './pages/Blog/Blog';
import BlogInfo from "./pages/Blog/BlogInfo";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"
import './App.css';


function App() {
  
  return (
  <>
       <Router>
       <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/pedagogy" component={Pedagogy} />
          <Route path="/schools" component={Schools} />
          <Route path="/franchise" component={Franchise} />
          <Route path="/kido-village" component={KidoVillage} />
          <Route path="/blog" component={Blog} />
          <Route path='/post/:title' component={BlogInfo} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
</>
  );
}

export default App;
