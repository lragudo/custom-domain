// Import React and ReactDom
import React, { Component } from 'https://cdn.skypack.dev/react@^16.13.1';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@^16.13.1';

// Parent 
class App extends Component {
  
  //make a place for the data
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  
  //get the data
  componentDidMount() {
    fetch('https://api.airtable.com/v0/appTZETNW3p73M2ec/current?api_key=keyQlNhSlrCCE6RXw')
    .then((resp) => resp.json())
    .then(data => {
      console.log(data);
      this.setState({ items: data.records });
    }).catch(err => {
      // Error
    });
  }
  
  //display the data
   render() {
    //compare function to sort by title
    function compare(a, b) {
      const itemA = a.fields.Title;
      const itemB = b.fields.Title;

      let comparison = 0;
      if (itemA > itemB) {
        comparison = 1;
      } else if (itemA < itemB) {
        comparison = -1;
      }
      return comparison;
    }
    //sorting the array
    this.state.items.sort(compare);

    //declare arays
    let webList = []
    let printList = []
    let illusList = []
    let photoList = []

    //sort each portfolio items by design type into their corresponding array
    for (let x = 0; x < this.state.items.length; x++) {
      if (this.state.items[x].fields.DesignType === "ux"){
          webList.push(this.state.items[x]);
       } else if (this.state.items[x].fields.DesignType === "print"){
          printList.push(this.state.items[x]); 
       } else if (this.state.items[x].fields.DesignType === "photography"){
          photoList.push(this.state.items[x]); 
       } else if (this.state.items[x].fields.DesignType === "illustration"){
          illusList.push(this.state.items[x]); 
       } 
    } 

     
    return (
      <>
        <h1>Web & UX</h1>
        <section>
          {webList.map(item =>
              <PortList {...item.fields} />
              )}
        </section>
        <h1>Graphic Design</h1>
        <section>
          {printList.map(item =>
              <PortList {...item.fields} />
              )}
        </section>
        <h1>Photography</h1>
        <section>
          {photoList.map(item =>
              <PortList {...item.fields} />
              )}
        </section>
        <h1>Illustration</h1>
        <section>
          {illusList.map(item =>
              <PortList {...item.fields} />
              )}
        </section>
      </>
    );
  }
}

// Child
const PortList = ( {Title, Tagline, Thumbnail, DesignType, siteLink} ) => (
  <a href={siteLink} class={DesignType}>
    <img src={Thumbnail[0].thumbnails.large.url} />
    <h3>{Title}</h3>
  </a>
);

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
