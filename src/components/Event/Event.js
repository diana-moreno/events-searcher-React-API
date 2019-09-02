import React, { Component } from 'react';

class Event extends Component { //event viene de props
  state = {
    iconFavorite: false,
  }

  validateTextDescription() {
    let {text} = this.props.event.description;
    if(text) {
      text.length > 250 ? text = text.substring(0, 230).concat('...') : text = null; //limitar a 250 carácteres.
    }
    if(!text || text.length === 0) {
      text = 'No description information.'
    }
    return text
  }

  convertDateFormat(stringStart, stringEnd) {
    const dateStart = stringStart.slice(0, 10).split('-').reverse().join('-');
    const dateEnd = stringEnd.slice(0, 10).split('-').reverse().join('-');
    return dateStart === dateEnd ? <span>Date: {dateStart}</span> : <span>Date: from {dateStart} to {dateEnd}</span>
   }

  toogleToFavorites = () => {
    this.setState({
      iconFavorite: !this.state.iconFavorite ? true : false
    })
   /* [this.props.event.icon] = this.state.iconFavorite*/
    this.addOrDeleteFavorites()
  }

  addOrDeleteFavorites = () => {
    if(!this.state.iconFavorite) {
      console.log('añade a favoritos')
      this.props.addFavorites(this.props.event)
    } else if(this.state.iconFavorite) {
      console.log('elimina de favoritos')
      this.props.deleteFavorites(this.props.event.id)
    }
  }

  render() {
    return (
      <div className='center'>
        <div className='uk-card-small uk-card-default uk-position-relative'>
          <i className={this.state.iconFavorite
                          ? 'fas fa-heart uk-position-absolute'
                          : "fas fa-plus uk-position-absolute"}
             title='Add to favorites'
             onClick={this.toogleToFavorites}></i>
          <div className='uk-card-media-top uk-flex uk-flex-center'>
            {this.props.event.logo ? <img src={this.props.event.logo.url} alt={this.props.event.name} /> : null}
          </div>

          <div className='uk-card-body uk-flex uk-flex-column uk-flex-middle uk-flex-between'>
            <h3 className='uk-card-title'>{this.props.event.name.text}</h3>
            <p>{this.validateTextDescription()}</p>
            <div>
              <p className='uk-text-bold'>{this.convertDateFormat(this.props.event.start.local, this.props.event.end.local)}</p>
              <p className='uk-text-bold'>Location: {this.props.event.venue.address.city}, {this.props.event.venue.address.country}</p>
            </div>
          </div>

          <div className='uk-card-footer'>
            <a target='_blank' rel='noopener noreferrer' href={this.props.event.url} className='uk-button uk-button-secondary'>
              More information
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;