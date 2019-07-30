import React from 'react';

const BepisMode = () => {
  const url = 'https://pbs.twimg.com/media/D1VrpGHX4AEQQz4.png'
  const cursor = 'https://i1.wp.com/glambergirlblog.com/wp-content/uploads/2013/11/Chuckesmee-Summit-Entertainment.jpg?fit=1089%2C1024&ssl=1&resize=40%2C40'

  const imgStyle = {
    width: '100vw',
    cursor: 'url('+cursor+'), auto'
  }

return <img alt="bepis-mode" src={url} style={imgStyle} />


}

export default BepisMode;
