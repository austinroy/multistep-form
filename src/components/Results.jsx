import React, { Component } from 'react';
import sun from '../assets/svg/024-sun.svg';

class Success extends Component{
    render(){
        const {values: { firstName, lastName }} = this.props;

        return(
           <div class="container">
                <h1 className="ui centered"><b>{firstName} {lastName}</b>, your Risk Assessment indicates that you are most likely at risk of: </h1>
                <section class="hero is-primary is-medium">
                <div class="hero-body">
                <div class="container">
                        <img src={sun} height="124" width="124" alt="heat-wave"/>
                    <h1 class="title">Heat Wave</h1>
                    <h2 class="subtitle">
                        <i>A heat wave is a period of excessively hot weather, which may be accompanied by high humidity, especially in oceanic climate countries.</i>
                    </h2>
                    <div class="container has-text-centered">
                            <a class="button is-danger is-large" href="#contact">Continue</a>
                    </div>
                </div>
                </div>
            </section>
           </div>

        )
    }
}

export default Success;