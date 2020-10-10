import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css'; 
import Sidebar from './components/Sidebar';
import Create from './pages/create/Index';
import Dashboard from './pages/dashboard/Index';
import Issues from './pages/issues/Index';
import iconsearch from './static/icon_search.svg';
import profile from './static/Sijo (1).svg';

function App() {
  return (
    <>
      <div className='tracker'>

        <div className='tracker-sidebar'>
          <Sidebar/>
        </div>

        <div className='tracker-body'>

          <div className='tracker-body-header'>
            <div className='tracker-body-header-right' style={{display:"flex", justifyContent:"space-between"}}>
              <img src={iconsearch} alt='icon-search' style={{border:'none'}}/>
              <input type="text" placeholder="Search.." style={{border:'none',marginLeft:'5px'}}/>
            </div>  
            <img src={profile} alt="profile" style={{}}/>
          </div>

          <div className='tracker-main-body'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/issues' component={Issues} />
              <Route path='/create' component={Create} />
            </Switch>
          </div>
          
        </div>
      </div>
    </>
  );
}


export default App;
