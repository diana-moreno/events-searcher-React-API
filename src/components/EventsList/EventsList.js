import React from 'react';
import Event from '../Event/Event';

const EventsList = ({events}) => {
  return (
    <div className='uk-child-width-1-3@m' uk-grid='true' uk-height-match="target: .uk-card-body">
      {events.map(event => (
        <Event
          key={event.id} // al listar por map, siempre deben tener un key único
          event={event}
        />
      ))}
    </div>
  );
}

export default EventsList;