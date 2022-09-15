import React, { Component } from 'react'
import axios from 'axios';
import AppUrl from'../api/AppUrl'
export class Slider extends Component {
    constructor(){
        super();
        this.state={
            sliders:[]
        }
    }
    componentDidMount() {
        axios.get(`http://ecomlaravel.test/api/allSliders`)
            .then((response) => {
                const sliders = response.data
                this.setState({sliders})
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          console.log('Something changed, send a network call to update state')
        } else {
          console.log("Props didn't change, no need to update state.")
        }
      }

    render() {
       
        let sliders = this.state.sliders;
        console.log(sliders)
        let myview = sliders.map((slider, j) => {
            return (
                <div className={(j === 0) ? "active item" : "item"}>
                    <img src={slider.slider_img} className="girl img-responsive" alt="" /></div>
            )

        })
        
        console.log(AppUrl.AllSliders);
        return (
            <div>
                <section id="slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#slider-carousel" data-slide-to="0" className=""></li>
                                        <li data-target="#slider-carousel" data-slide-to="1" className=""></li>
                                        <li data-target="#slider-carousel" data-slide-to="2" className=""></li>
                                    </ol>
                                    <div className="carousel-inner">
                                       {myview}
                                    </div>
                                    <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev"><i
                                        className="fa fa-angle-left"></i></a><a href="#slider-carousel"
                                            className="right control-carousel hidden-xs" data-slide="next"><i
                                                className="fa fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Slider