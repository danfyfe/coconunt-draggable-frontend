import React from 'react';
import './App.css';

function App() {


  const dragCoconut = e => {

    // const coconut = document.querySelector('#full-coconut')
    e.dataTransfer.setData('text/plain', e.target.id)
    // coconut.remove()
  }

  const dragOver = e => {
    // console.log('hi')
    e.preventDefault()
  }

  const dropCoconut = e => {
    e.preventDefault()
    let data = e.dataTransfer.getData('text')

    if (data === 'full-coconut') {
      let coconut = document.getElementById(data)
      let newCoconut = document.createElement('img')
      newCoconut.className = 'coconut'
      newCoconut.src ='https://i.imgur.com/Xv80fwu.png'

      const sand = document.querySelector('#sand')
      sand.appendChild(newCoconut)
    }

  }


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

      <div id='sand' className='sand' onDragOver={dragOver} onDrop={dropCoconut}>

        <div className='tide'/>


        <div className='tree-container'>
          <img id='coconut-tree' src='https://i.imgur.com/LQlH63o.png' alt='cartoon coconut tree'/>
          <img id='full-coconut' className='full-coconut' src='https://i.imgur.com/Xv80fwu.png' alt='full coconut' draggable onDragStart={dragCoconut}/>
        </div>

        <div>

        </div>

      </div>

    </div>

  </>);
}

export default App;
