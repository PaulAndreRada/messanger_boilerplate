import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main'

class App extends Component {
  render(){
    return(
      <div>
        YOLA! clean the setup code and add scss
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app') );

// tell hot reload to work (remove for production)
module.hot.accept();
