import React, { Component } from 'react'
import Glass from './Glass/Glass'
import Header from './Header/Header'
import Info from './Info/Info';
import glasses from '../dataGlasses.json'

// import './Home.css';

export default class Home extends Component {    
    state = {
        glass: glasses[0]
    }

    getGlass = (id) => {
        // let idx = glasses.findIndex((glass) => glass.id === id)
        // if (idx != -1)
        //     this.setState({
        //         glass: glasses[id-1]
        //     })

        let glassFind = glasses.find((glass) => glass.id === id); //Nên find trực tiếp không cần find id trong trường hợp này
        this.setState({
            glass: glassFind
        })
    }

    render() {
        return (
            <div className="Home">
                <Header />
                <div className="model">
                    <div className="leftImg">
                        <img src="./glassesImage/model.jpg"/>
                        <Info glass={this.state.glass}/>
                    </div>
                    <div className="rightImg">
                        <img src="./glassesImage/model.jpg"/>
                    </div>
                </div>
                <div className="glasses">
                    {/* {(() => {
                        let arr = [...glasses]; 
                        return arr.map((glass) => {
                            return <Glass key={glass.id} id={glass.id} getGlass={this.getGlass}/>  
                        })
                    })()}*/} 
                    { //không cần quá phức tạp, khai báo let arr = [...glasses];  là vô nghĩa
                        glasses.map(glass=>(
                            <Glass key={glass.id + "glass"} id={glass.id} getGlass={this.getGlass}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}
