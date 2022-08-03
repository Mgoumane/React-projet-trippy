import React from "react";
import HotelCard from "../components/HotelCard";
import { withRouter } from 'react-router-dom';

export class Hotel extends React.Component {
constructor(props){
  super(props);
  this.state = {
    city : this.props.match.params.city,
    hotels : [],

  }
}

componentDidMount(){
  fetch(`http://localhost:3002/api/hotels/city/${this.state.city}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      this.setState({
        hotels: response.results,
      });
    });;
} 
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
          {this.state.hotels
              .map((hotel) => {
                return (
                  
                    <HotelCard hotel={hotel} ></HotelCard>
                  )
              })}
            </div>
          </div>
          <div className="col-md-6">Carte de la ville</div>
        </div>
      </>
    );
  }
}
export default Hotel;
