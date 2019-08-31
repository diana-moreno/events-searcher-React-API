import React , { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    category: ''
  }

  handleInfoData = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getEvents(this.state);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <fieldset className='uk-fieldset'>
          <legend className='uk-legend uk-text-center'> {/*legend crea un titulo para los campos de fieldset*/}
            Search your event by name or category
          </legend>
          <div className='uk-column-1-3@m uk-margin'> {/*crea 3 columnas*/}

            <div className='uk-margin' uk-margin='true'> {/*columna 1*/}
              <input
                name='name'
                className='uk-input'
                type='text'
                placeholder='Event name or city'
                onChange={this.handleInfoData}
              />
            </div>

            <div className='uk-margin' uk-margin='true'>{/*columna 2*/}
              <select
                name='category'
                className='uk-select'
                type='text'
                onChange={this.handleInfoData}
              >
                <option>-- Select category --</option>
                {this.props.categories.map(category =>
                  <option
                    key={category.id}
                    value={category.id}
                  >{category.name_localized}</option>
                )}
              </select>
            </div>

            <div> {/*columna 3*/}
              <input
                className='uk-button uk-button-danger'
                type='submit'
                value='Search events'
              />
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Form;