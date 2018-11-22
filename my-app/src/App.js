import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getDogs, matchDogs } from './data';
import './App.css';
import Button from './Button';
import Card from './Card';


var items = [];

function cb(ans){
  var ansArr = ans.message; 
  items.push(ansArr.slice(0,5));
  console.log(items);
}

class App extends Component {

  state = { value: '' }; 
 
  constructor(props) {
    super(props);
    this.state = { value: "", arrayOfImgs: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.gallery = items;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    //console.log(this.setState({value: event.target.value}));
  }
  
  handleSubmit(event) {
    let val = this.state.value;
    // let jqxhrDogsApiBreed = $.getJSON("https://dog.ceo/api/breed/" + val + "/images", function() {
    // console.log("success fetching " + val + " img");
    // cb(jqxhrDogsApiBreed.responseJSON.message);
    // })
    // .done(function() {
    //   // dogsApiBreedResponse = jqxhrDogsApiBreed.responseJSON.message;
    //   console.log("done loading api");
    // })
    // .fail(function() {
    //   console.log("error loading dog api");
    // })
    // .always(function() {
    //   console.log("completed dog api request");
    // });
  
    fetch("https://dog.ceo/api/breed/" + val + "/images")
      .then(response => response.json())
      //.then(json => console.log(json))
      // .then(json => alert(json))
      .then(json => cb(json))
      
    event.preventDefault();
  }


  render() {
    console.log("this.gallery", this.gallery);
    console.log("this.gallery.items", this.gallery.items);

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
       
        { this.gallery &&
          this.gallery.map(item => (
            <li key={item.message}>
              { <img className="card-img-top" alt="" src={item.message} /> }
              <Card
                src={item.message ? item.message : null}
                text="Search"
                className="btn btn-lg btn-primary"
              />

              <label>
                <input type="checkbox" disabled readOnly checked={item.done} />
                <span className={item.done ? "done" : ""}>{item.message}</span>
                {console.log("-------------item", item)}
              </label>

              <img className="card-img-top" alt="" src={item.message} />
            </li>
          ))}
             

      </div>
      );
    }
  }



/*
export function dogImgs() {
    return dogImgArr;
}
*/
 
export default App;
