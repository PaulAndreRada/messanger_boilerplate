import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return(
      <div>
        HELLO REACT ES6?7? holy fuck hey you babe
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app') );
// tell hot reload to work (remove for production)
module.hot.accept();
