import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getDogs, matchDogs } from './data';
import './App.css';

class App extends Component {

  state = { value: '' };

  render() {
    return (
        <Autocomplete
          value={ this.state.value }
          inputProps={{ 
            id: 'states-autocomplete', 
            type:"text",
            placeholder:"what's your favourite breed?", 
            className:'form-control form-control-lg' 
          }}
          wrapperStyle={{ position: 'relative', display: 'block' }}
          items={ getDogs() }
          getItemValue={ item => item.breed }
          shouldItemRender={ matchDogs }
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.breed } > { item.breed }
            </div>
          )}
        />
      
      );
    }
  }

export default App;
