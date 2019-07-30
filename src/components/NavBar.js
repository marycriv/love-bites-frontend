import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <button onClick={() => console.log('Login button')}>Login <span role="img" aria-label="bat">🦇</span></button>
      <button onClick={() => console.log('Sign up button')}>Sign up <span role="img" aria-label="coffin">⚰️</span></button>
    </div>)
}

export default NavBar;
