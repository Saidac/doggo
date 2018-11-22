import axios from 'axios';
import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getDogs, matchDogs } from './data';
import './App.css';
import Button from './Button';
import Card from './Card';

class App extends Component {

  state = { value: '', gallery: [] }; 
 
  constructor(props) {
    super(props);
    this.state = { value: "", gallery: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState(Object.assign(this.state, { value: value }));
    this.handleSubmit();
    // console.log(this.setState({value: event.target.value}));
  }
  
  handleSubmit(event) {
    if (this.state.value) {
      axios.get(`https://dog.ceo/api/breed/${this.state.value}/images`)
        .then(json => {
          this.setState(Object.assign(this.state, { gallery: json.data.message.slice(0, 5) }));
        })
        .catch((error) => console.log(error));
    }
    
    if (event) {
      event.preventDefault(); 
    }
  }


  render() {
    return (
      <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 jumbotron">
            <h1 className="display-4 text-right text-white">Stain your carpet</h1>
            <p className="lead text-right">Adopt a pup who's out of luck.</p>
            <hr></hr>
            <p className="mb-4">Use our reactive filter sort to find the dog you want to bring home today. Dog-Shelter-As-a-Service, soon as ICO.</p>
            
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                
                <div>

                  <Autocomplete
                    value={this.state.value}
                    inputProps={{
                      id: 'states-autocomplete',
                      type: "text",
                      placeholder: "what's your favourite breed?",
                      className: 'form-control form-control-lg'
                    }}
                    wrapperStyle={{ position: 'relative', display: 'block' }}
                    items={getDogs()}
                    getItemValue={item => item.breed}
                    shouldItemRender={matchDogs}
                    onChange={(event, value) => this.handleChange(value)}
                    onSelect={value => this.handleChange(value)}
                    renderMenu={children => (
                      <div className="menu">
                        {children}
                      </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                      <div
                        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                        key={item.breed} > {item.breed}
                      </div>
                    )}
                  />
                </div>
              
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="card-columns">
            {this.state.gallery.map(href => (
                <div key={href}>
                  <Card
                    src={href}
                  />
                </div>
              ))}
          </div>
        </div>
        </div>
      </div>
      </div>
      );
    }
  }




 
export default App;
