import React , { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    category: '',
    location: ''
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

          <div className='uk-column-1-4@m uk-margin-small-top' uk-margin='true'> {/*crea 3 columnas*/}

            <div className='uk-margin-small' uk-margin='true'> {/*columna 1*/}
              <input
                name='name'
                className='uk-input'
                type='text'
                placeholder='Search by name'
                onChange={this.handleInfoData}
              />
            </div>

            <div className='uk-margin-small' uk-margin='true'> {/*columna 2*/}
              <input
                name='location'
                className='uk-input'
                type='text'
                placeholder='Search by city or address'
                onChange={this.handleInfoData}
              />
            </div>

            <div className='uk-margin-small' uk-margin='true'>{/*columna 3*/}
              <select
                name='category'
                className='uk-select'
                type='text'
                onChange={this.handleInfoData}
              >
                <option value=''>-- Select category --</option>
                {this.props.categories.map(category =>
                  <option
                    key={category.id}
                    value={category.id}
                  >{category.name_localized}</option>
                )}
              </select>
            </div>

            <div className='uk-margin-small' uk-margin='true'> {/*columna 4*/}
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