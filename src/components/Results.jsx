import React, { Component } from 'react';
import sun from '../assets/svg/024-sun.svg';
import houseFire from '../assets/svg/005-fire.svg';
import wildFire from '../assets/svg/004-forest-fire.svg';
import drought from '../assets/svg/010-drought.svg';
import flood from '../assets/svg/007-flood.svg';
import hurricane from '../assets/svg/011-wind.svg';
import tornado from '../assets/svg/003-tornado.svg';
import winterStorm from '../assets/svg/020-snow.svg';
import earthquake from '../assets/svg/001-earthquake.svg';

class Success extends Component{
    render(){
        const {values: { firstName, lastName }} = this.props;

        return(
           
                <body>
                <section class="hero is-primary is-medium">
                <h1 className="ui centered"><b>{firstName} {lastName}</b>, your Risk Assessment indicates that you are most likely at risk of: </h1>
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

<img src={houseFire} height="65" width="68" alt="house-fire"/>
<img src={wildFire} height="65" width="68" alt="wild-fire"/>
<img src={drought} height="65" width="68" alt="drought"/>
<img src={flood} height="65" width="68" alt="flood"/>
<img src={hurricane} height="65" width="68" alt="hurricane"/>
<img src={tornado} height="65" width="68" alt="tornado"/>
<img src={winterStorm} height="65" width="68" alt="winter-storm"/>
<img src={earthquake} height="65" width="68" alt="earthquake"/>


<footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Icons</strong> made by <a href="https://www.flaticon.com/authors/smashicons">Smashicons</a> from 
            <a title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    
            title="Creative Commons BY 3.0" target="">CC 3.0 BY</a>
          </p>
        </div>
      </footer>
      </body>
        )
    }
}

export default Success;