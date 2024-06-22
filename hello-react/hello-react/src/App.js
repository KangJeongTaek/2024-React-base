import ScrollBox from './scrollbox/ScrollBox';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>        
          <button onClick={(() => this.scrollBox.scrollToBottom())}>내리기</button>
      </div>
    );
  }
}

export default App;