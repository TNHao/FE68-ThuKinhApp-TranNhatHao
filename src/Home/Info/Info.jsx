import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        const {glass} = this.props;
        return (
            <div className="info">
                <img src={glass.url} alt="" />
                <div className="text">
                    <h3>{glass.name}</h3>
                    <p>{glass.desc}</p>
                </div>
            </div>
        )
    }
}
