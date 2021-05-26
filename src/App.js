// import First from "./Components/01-Intro/First";
// import Second from "./Components/01-Intro/Second";

import Second from "./Components/01-Intro/Second"
import Container from "./Components/02-Parent-Child/Container"
import Parent from "./Components/03-Props/01-Simple/Parent"
import PropsWithDifferentTypes from "./Components/03-Props/02-Intermediate/PropsWithDifferentTypes"
import Start from "./Components/03-Props/ContactCard/Start"
import WIPContact from "./Components/03-Props/ContactCard/WIPContact"
import Blog from "./Components/03-Props/staticDataTask/Blog"
import Comments from "./Components/03-Props/staticDataTask/Comments"
import ClassClock from "./Components/04-LifeCycle/ClassClock"
import Counter from "./Components/05-States/Counter"
import Different from "./Components/05-States/Different"
import ControlledInput from "./Components/06-Forms/ControlledInput"
import SearchableList from "./Components/07-LifitingStates/SearchableList"
import Clock from "./Components/08-Hooks/Clock"

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Components/09-Routing/Home"
import About from "./Components/09-Routing/About"
import User from "./Components/09-Routing/User"
import Nav from "./Components/09-Routing/Nav"
import Shop from "./Components/09-Routing/Shop"
import NotFound from "./Components/09-Routing/NotFound"
import Tesco from "./Components/10-DataRequests/Tesco"

const App=()=> {


  const date=  new Date();
  return (
    <div>
      {/* <p>{date.toLocaleTimeString()}</p> */}
      {/* <Second/> */}
      {/* <Container/> */}
      {/* <Parent/> */}
      {/* <PropsWithDifferentTypes/> */}
      {/* <Start/> */}
      {/* <WIPContact/> */}
      {/* <Blog/> */}
      {/* <Comments/> */}
      {/* <ClassClock/> */}
      {/* <Counter/> */}
      {/* <Different/> */}
      {/* <ControlledInput/> */}
      {/* <SearchableList/> */}
      {/* <Clock/> */}

      {/* <About/> */}
      <a href="/">home</a>
      <a href="/about">About</a>

      {/* <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/nav">
            <Nav/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/user/:apples/:pears">
            <User/>
          </Route>
          <Route path="/tesco">
            <Tesco/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch> 
       </Router> */}
        <Tesco/>


      
    </div>
  );
}

export default App;
