import React, { Component } from 'react'

import Model from './Model'
// import ListGlasses from './ListGlasses'

import data from "../../data/dataGlasses.json"
import "./ListGlasses.css";

export default class BaiTapGlasses extends Component {
    state = {
        urlImage: "./glassesImage/v1.png",
    }

    handleOnClick = (imgName)=>{
        this.setState({urlImage: imgName});
    }

    renderItem = () => {
        return data.map((item, index) =>{
            return(
                <div className='GlassesItem__container'>
                    <div className='GlassesItem__img' key= {index} onClick={()=>{this.handleOnClick(item.url)}}>
                        <img src = {item.url} alt="#"></img>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <>
            {console.log(this.state.urlImage)}
                <Model props={this.state.urlImage}/>
                <div className='ListGlasses__container'>
                    {this.renderItem()}
                </div>
            </>
        )
    }
}
