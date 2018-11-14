import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainApp from './MainApp'
import Gallerys from './Gallery'
import Connect from './Connect'
import { Link } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <div className='AppRouter-body'>
    <div className="Navber">
          <Link to='home'>
            <div className="NavberItems">Know Me</div>
          </Link>
          <Link to='Gallerys'>

            <div className="NavberItems">Gallery</div>
          </Link>
          <Link to='Connect'>
            <div className="NavberItems">Connect</div>
          </Link>
        </div>
      <Switch>
        <Route path='/' component={MainApp} exact />
        <Route path='/home' component={MainApp} exact />
        <Route path='/Gallerys' component={Gallerys}  />
        <Route path='/Connect' component={Connect}  />
        

      </Switch>
    </div>
  </BrowserRouter>
)

export default App
