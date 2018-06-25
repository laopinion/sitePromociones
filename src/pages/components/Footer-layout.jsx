import React from 'react'

const FooterLayout = (props) => {
  return (
    <footer id='Footer' className='container'>
      <div className='header'>
        <h2 className='title'>Contácto</h2>
        <hr />
      </div>
      <div className='contactenos'>
        {props.children}
        <div className='logos'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, enim aliquam! Doloremque corporis aspernatur adipisci, dolore sequi laudantium vero magnam iste omnis quibusdam odio et velit minus provident nemo iure?</p>
        </div>
      </div>
      <div className='footer'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde quas nisi qui, consequuntur officiis soluta! Provident nostrum illum odit aliquam deserunt veritatis repellendus id quas, aspernatur amet ullam ut.</p>
      </div>
    </footer>
  )
}
export default FooterLayout
