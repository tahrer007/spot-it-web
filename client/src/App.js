
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';




function App() {

  
  const mapStyles = {
    width: '100%',
    height: '100%',
  };
  return (
    <div className="App">
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    </div>
  );
}

export default App;
