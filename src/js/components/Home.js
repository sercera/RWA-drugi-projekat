// src/js/components/List.js
import React, { Component }  from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getImages } from '../actions/index';
import {Link} from 'react-router-dom';
//import { Carousel} from 'react-bootstrap'

const style={float:"left"};

class HomeComponent extends Component {
    constructor(props)
    {
        super(props);
        this.props.getImages();
    }
    render() {
        if(this.props.images)
        {
            return (
               <div> 
                {this.props.images.map(x=>{return (<div style={style} key={x.id}><Link to={ { pathname:`/hero/${x.id}`} }> <img  alt="NEMA" src={"https://api.opendota.com" + x.img } /></Link></div>)} )}
                {/* {this.props.images.map(x=>{
                        return(
                <Carousel.Item key={x.id}>
                            <Link to={ { pathname:`/hero/${x.id}`} }>
                                <img width={500} height={250} alt={x.localized_name} src={x.img} />
                            </Link>
                </Carousel.Item>)
                 })} */}
            </div>);
        }
        else {
            return (<div>
                Loading...
            </div>)
        }
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getImages
   }, dispatch)
   };
const mapStateToProps = state => {
    return { 
        images: state.images
    };
  };
const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
export default Home;