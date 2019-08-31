import React from 'react';

const Event = ({event}) => { //event viene de props
  let {text} = event.description;
  if(text) {
    text.length > 250 ? text = text.substring(0, 230).concat('...') : text = null; //limitar a 250 carácteres.
  }

  return (
    <div>
      <div className='uk-card-small uk-card-default'>
        <div className='uk-card-media-top'>
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>

        <div className='uk-card-body uk-flex uk-flex-column uk-flex-middle'>
          <h3 className='uk-card-title'>{event.name.text}</h3>
          <p>{text}</p>
        </div>

        <div className='uk-card-footer'>
          <a target='_blank' rel='noopener noreferrer' href={event.url} className='uk-button uk-button-secondary'>
            More information
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;