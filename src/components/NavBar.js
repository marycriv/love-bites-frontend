import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <button onClick={() => console.log('Login button')}>Login 🦇</button>
      <button onClick={() => console.log('Sign up button')}>Sign up ⚰️</button>
    </div>)
}

export default NavBar;
