import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';



export default class Stripes extends Component {
    state = {
        stripes: [
            {
                backgroundColor: '#98c5e9',
                left: 120,
                rotate: 25,
                top: -260,
                delay: 0
            },
            {
                backgroundColor: '#ffffff',
                left: 360,
                rotate: 25,
                top: -397,
                delay: 200
            },
            {
                backgroundColor: '#98c5e9',
                left: 600,
                rotate: 25,
                top: -498,
                delay: 400
            },
        ]
    }
    showStripes = () => {
        return (


            this.state.stripes.map((stripe, i) => {
                return (
                    <Animate
                        key={i}
                        show={true}
                        start={{
                            backgroundColor: '#ffffff',
                            opacity: 0,
                            left: 0,
                            rotate: 0,
                            top: 0

                        }}
                        enter={{
                            backgroundColor: [stripe.backgroundColor],
                            opacity: [1],
                            left: [stripe.left],
                            timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
                            rotate: [stripe.rotate],
                            top: [stripe.top],
                            events: {
                                end() {
                                    //  console.log("Animation Finished");
                                    // alert("fwef")
                                }
                            }
                        }}

                    >

                        {({ backgroundColor, top, rotate, opacity, left }) => {
                            return (
                                <div className="stripe"
                                    style={{
                                        opacity,
                                        /* I have no idia why its returning NaN instead of bgc ! */
                                        backgroundColor: backgroundColor || "#98c5e9",
                                        /* So you can Add any code You want 
                                          border: "33px solid red", */
                                        transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`,
                                    }}
                                >

                                </div>)
                        }

                        }
                    </Animate>
                )
            })
        )
    }

    render() {
        return (
            <div className="featured_stripes" >
                {this.showStripes()}
            </div>
        )
    }
}
