import React, { Component } from 'react'

export default class Glass extends Component {
    render() {
        let { id, getGlass } = this.props;
        return (
            <div className="glass" onClick={() => getGlass(id)}>
                <img src={`./glassesImage/g${id}.jpg`} alt="" />    
            </div>
        )
    }
}
