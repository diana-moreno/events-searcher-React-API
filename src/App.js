import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import EventsList from './components/EventsList/EventsList';
import axios from 'axios';
import { API_URLS } from './constants';

class App extends Component {
  state = {
    categories: [],
    events: []
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let response = await axios.get(API_URLS.categories); // hace la consulta, el método get viene por defecto, se puede poner o no.
    this.setState({
      ...this.state,
      categories: response.data.categories, //from the API
    })
  }

  getEvents = async (search) => {
    let response = await axios(API_URLS.events(search)); //hace la consulta a la API y recoge la respuesta
    console.log(response)
    this.setState({
      ...this.state,
      events: response.data.events, //from the API
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className='uk-container'>
          <Form
            categories={this.state.categories}
            getEvents={this.getEvents}
          />
          <EventsList
            events={this.state.events}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
