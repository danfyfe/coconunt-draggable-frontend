import React from 'react';
import './App.css';

function App() {
  return (<>
    <div className='main-wrapper d-flex flex-column'>
      <div className='sky'>

        <div className='sun'/>

      </div>

      <div className='water'>

      <div className='d-flex flex-column'>

        <div>
          <div className='wave'>
            ~~~~~~
          </div>
        </div>

        <div id="fish-div">

        </div>

        <div className='d-flex justify-content-center'>
          <div className='wave'>
            ~~~~~~~~~~
          </div>
        </div>

        <div className='d-flex justify-content-end'>
          <div className='wave'>
            ~~~~~~
          </div>
        </div>

      </div>

      </div>

      <div className='sand'>

        <div className='tide'/>


        <div className='tree-container'>
          <img id='coconut-tree' src='https://i.imgur.com/LQlH63o.png' alt='cartoon coconut tree'/>
          <img id='full-coconut' className='full-coconut' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut'/>
        </div>

      </div>
      <div className='more-sand'/>

    </div>

  </>);
}

export default App;
