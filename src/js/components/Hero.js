import React, { Component }  from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getHero } from '../actions/index';


class HeroComponent extends Component {
    constructor(props)
    {
        super(props)
        this.props.getHero(this.props.match.params.id);
        console.log(this.props.match.params.id);
    }
    render(){
        if(this.props.hero)
        {
            return(
                <div>
                           <div stlye="float:left;"><img className="media-object" src={"https://api.opendota.com" + this.props.hero.img} alt={this.props.hero.localized_name}/></div>
                            <p>Primary attribute: {this.props.hero.primary_attr}</p>
                            <p>Attacking type: {this.props.hero.attack_type}</p> 
                            <p>Base health: {this.props.hero.base_health}</p>
                            <p>Base mana: {this.props.hero.base_mana}</p>
                            <p>Legs: {this.props.hero.legs}</p>
                </div>
            );
        }
        else
        {
            return(<div> 
                Loading hero...
            </div>)
        }
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getHero
   }, dispatch)
   };
const mapStateToProps = state => {
    return { 
        hero: state.hero
    };
  };
const Hero = connect(mapStateToProps,mapDispatchToProps)(HeroComponent);

export default Hero;