import React from "react";
import {
  Link
} from "react-router-dom";

export class CityCard extends React.Component {

  render() {
    return (
      <div className="card mt-5" style={{width: "18rem"}}>
        <img src={this.props.source} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.cityName}</h5>
          <Link className="btn btn-primary"  to={`/hotels/${this.props.slug}`}> Voir les hotels </Link>
        </div>
      </div>
      
    );
  }
}
export default CityCard;
