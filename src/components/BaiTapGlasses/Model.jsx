import React, { Component } from 'react'
import "./Model.css";
export default class Model extends Component {
    render() {
        return (
            <>
            <div className='Model__container'>
                <div className='Model__wrapper'>
                    <div className='Model__human'>
                        <img src = "./glassesImage/model.jpg" alt = "#"></img>
                    </div>
                    <div className='Model__glass'>
                        <img src = {this.props.props} alt = "#"></img>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
