import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom'
import './components/firebase'; 

//COMPONENTS
import HomeBookList from './components/pages/homeBookList'
import AuthorBookList from './components/pages/authorBookList';

import '../src/css/app.css'



const App = () => {

   return (
   <BrowserRouter>
      <div>
         {/* Can add navbar, or header for every page 
         Exact important to render only authorbooklist without homeBookList */}
         <Route path="/" exact component={HomeBookList}/>
         <Route path="/author" component={AuthorBookList}/>
      </div>
      

   </BrowserRouter>
        
            
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));