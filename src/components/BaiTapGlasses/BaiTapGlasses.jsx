import React, { Component } from 'react'
import data from "../../data/dataGlasses.json"
import Glasses from "./Glasses"
import Model from './Model'


export default class BaiTapGlasses extends Component {

    render() {
        return (
            <>
                <Model />
                <Glasses />
            </>
        )
    }
}
