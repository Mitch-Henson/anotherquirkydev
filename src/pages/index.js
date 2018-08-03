import React from 'react'
import Mitch from '../images/mitch.jpg';

const IndexPage = () => (
  <div style={{textAlign: 'center'}}>
    <span className='avatar'>
      <img src={Mitch} style={{
        maxWidth: '50%',
        border: '3px solid #fff',
        borderRadius: '100%',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)'}}
      />
    </span>
    <h1>Mitchell Henson</h1>
    <p>Developer - Gamer - Aussie</p>
  </div>
);

export default IndexPage
