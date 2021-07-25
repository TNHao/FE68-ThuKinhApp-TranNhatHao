import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div className="info">
                <img src={this.props.glass.url} alt="" />
                <div className="text">
                    <h3>{this.props.glass.name}</h3>
                    <p>{this.props.glass.desc}</p>
                </div>
            </div>
        )
    }
}
