import React from "react";
import CityCard from "../components/CityCard";
import getHomeData from "../utils/Api";

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cities: [],
    }
  }

  componentDidMount(){
    getHomeData()  
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          cities: response.cities,
        });
      });;
  } 

  render() {
    if(this.state.cities.length  === 0){
      return <p>Chargement des villes</p>
    }else{
      return (
        <>
          <p className="">Découvrir le monde</p>
            <div className="container-fluid">
              <div className="row ">
                { 
                  this.state.cities.map(function(element){
                    return ( 
                          <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <CityCard cityName={element.name} slug={element.slug} source={` http://localhost:3002${element.source}`}/>
                          </div>   
                    )
                  })
                }
              </div>
            </div>
        </>
      );
    } 
  }
}
export default Home;
