import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import EventsList from './components/EventsList/EventsList';
import axios from 'axios';
import { API_URLS } from './constants';

class App extends Component {
  state = {
    categories: [],
    events: [],
    loading: false,
    searchIsDone: false,
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
    this.setState({ ...this.state, loading: true })
    let response = await axios(API_URLS.events(search)); //hace la consulta a la API y recoge la respuesta
    console.log(response)
    this.setState({
      ...this.state,
      events: response.data.events, //from the API
      loading: false,
      searchIsDone: true
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
          <Form
            categories={this.state.categories}
            getEvents={this.getEvents}
          />
        <div className='uk-container-fluid uk-margin'>
          {this.state.loading
            ? <div className="uk-flex uk-flex-column center uk-margin-medium-top">
                <div uk-spinner="ratio: 3"></div>
                <p>Loading...</p>
              </div>
            : <EventsList
                events={this.state.events}
              />
          }
          {this.state.searchIsDone && this.state.events.length === 0 && !this.state.loading
            ? <p className="uk-position-center uk-margin-medium-top">There are no events.</p> : null}
        </div>
      </Fragment>
    );
  }
}

export default App;
