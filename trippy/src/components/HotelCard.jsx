import React from "react";

export class HotelCard extends React.Component {

  render() {
    return (
      
      <div class="card mt-5 mx-5" style={{width: "18rem"}}>
        <img src={ "http://via.placeholder.com/300x200"} class="card-img-top" alt={this.props.hotel.pictures[0] }/>
        <div class="card-body">
          <h5 class="card-title">{this.props.hotel.name}</h5>
          <p class="card-text">{this.props.hotel.address}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}
export default HotelCard;
