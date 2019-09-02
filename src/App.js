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
    favorites: [],
    showFavorites: false
  }

  componentDidMount() {
    this.getCategories();

    const favorites = localStorage.getItem('favorites')
    this.setState({
      favorites: favorites ? JSON.parse(favorites) : [], // lo convierte en un array de objetos
    })
  }

  // almacenar los datos cuando se añaden o eliminan eventos a favoritos
  componentDidUpdate() {
    localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
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
    response.data.events.forEach(elem => {
      [elem.icon]= 'a'
    })

    // si hay favoritos, cambia el icono para señalar que ya estaban en favoritos y no se puedan volver a marcar
    if(this.state.favorites) {
      this.state.favorites.forEach(favorite => {
        response.data.events.forEach(event => {
          if(favorite.id === event.id) {
            event.icon = 'f'
          }
        })
      })
    }

    this.setState({
      ...this.state,
      events: response.data.events, //from the API
      loading: false,
      searchIsDone: true,
      showFavorites: false
    })
  }

  addFavorites = (event) => {
    event.icon = 'f'; //cambiar a f de favorito
    this.setState({
      ...this.state,
      favorites: [...this.state.favorites, event],
    })
  }

  deleteFavorites = (event) => {
    event.icon = 'a';
    let favorites = this.state.favorites.filter(favorite => favorite.id !== event.id)
    this.setState({
      ...this.state,
      favorites: favorites
    })
  }

  showFavorites = () => {
    this.setState({
      ...this.state,
      showFavorites: true
    })
  }


  render() {
    return (
      <Fragment>
        <Header />
          <Form
            categories={this.state.categories}
            getEvents={this.getEvents}
            showFavorites={this.showFavorites}
          />
        <div className='uk-container-fluid uk-margin'>
          {this.state.loading
            ? <div className="uk-flex uk-flex-column center uk-margin-medium-top">
                <div uk-spinner="ratio: 3"></div>
                <p>Loading...</p>
              </div>
            : <EventsList
                events={this.state.showFavorites
                          ? this.state.favorites
                          : this.state.events}
                addFavorites={this.addFavorites}
                deleteFavorites={this.deleteFavorites}
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
