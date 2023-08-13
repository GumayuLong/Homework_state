import React, { Component } from 'react'
import data from "../../data/dataGlasses.json"
import "./ListGlasses.css";


export default class ListGlasses extends Component {
    renderItem = () => {
        return data.map((item, index) =>{
            return(
                <div className='GlassesItem__container'>
                    <div className='GlassesItem__img' key= {index}>
                        <img src = {item.url} alt="#"></img>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <div className='ListGlasses__container'>
                    {this.renderItem()}
                </div>
                
            </>    
        )
    }
}
