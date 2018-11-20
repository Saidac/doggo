import $ from 'jquery';
import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getDogs, matchDogs } from './data';
import './App.css';
import Button from './Button';
import Gallery from './Gallery';

var breedImgSrcArr = [];
function getImg() {
  return breedImgSrcArr.join();
}

class App extends Component {

  state = { value: '' };
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
      let jqxhrDogsApiBreed = $.getJSON("https://dog.ceo/api/breed/" + this.state.value + "/images", function() {
        console.log("success fetching breed img");
      })
      .done(function() {
        var dogsApiBreedResponse = jqxhrDogsApiBreed.responseJSON.message;
        console.log(dogsApiBreedResponse.length);
        dogsApiBreedResponse.forEach(function(cv){
          breedImgSrcArr.push({
            breedImgSrc: cv
          });
        })
        console.log(breedImgSrcArr);
      })
      .fail(function() {
        console.log("error loading dog api");
      })
      .always(function() {
        console.log("completed dog api request");
      });
    event.preventDefault();
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row"> 
            <div className="col-sm-6"> 
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
            </div>
            <div className="col-sm-2">
              <Button type="submit" text="Search" className="btn btn-lg btn-primary"/>
            </div>
          </div>
        </form>
        <Gallery text={getImg()}/>
      </div>
      );
    }
  }


  
export default App;
