import React from 'react';

const Event = ({event}) => { //event viene de props
  let {text} = event.description;
  if(text) {
    text.length > 250 ? text = text.substring(0, 230).concat('...') : text = null; //limitar a 250 carácteres.
  }
  function convertDateFormat(stringStart, stringEnd) {
    const dateStart = stringStart.slice(0, 10).split('-').reverse().join('-');
    const dateEnd = stringEnd.slice(0, 10).split('-').reverse().join('-');
    return dateStart === dateEnd ? <span>Date: {dateStart}</span> : <span>Date: from {dateStart} to {dateEnd}</span>
   }

  return (
    <div className='center'>
      <div className='uk-card-small uk-card-default'>
        <div className='uk-card-media-top uk-flex uk-flex-center'>
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>

        <div className='uk-card-body uk-flex uk-flex-column uk-flex-middle uk-flex-between'>
          <h3 className='uk-card-title'>{event.name.text}</h3>
          <p>{text}</p>
          <div>
            <p className='uk-text-bold'>{convertDateFormat(event.start.local, event.end.local)}</p>
            <p className='uk-text-bold'>Location: {event.venue.address.city}, {event.venue.address.country}</p>
          </div>
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