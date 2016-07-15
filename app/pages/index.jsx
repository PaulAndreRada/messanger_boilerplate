import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import DefaultLayout from './layouts/default-layout'

class App extends Component {
  render(){
    return(
        <DefaultLayout>
          I'm inside you...layout
        </DefaultLayout>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app') );

// tell hot reload to work (remove for production)
module.hot.accept();
