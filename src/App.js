import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
/*import EventsList from './components/EventsList/EventsList';*/

class App extends Component {
  state = {

  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className='uk-container'>
{/*          <Form />*/}
{/*          <EventsList />*/}
        </div>
      </Fragment>
    );
  }
}

export default App;
