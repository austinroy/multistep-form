import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Address from './Address';
import Confirmation from './Confirmation';
import Results from './Results';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        id: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    
    render(){
        const {step} = this.state;
        const { firstName, lastName, email, streetAddress, city, state, zip} = this.state;
        const values = { firstName, lastName, email, streetAddress, city, state, zip};
        switch (step) {
          case 1:
            return (
              <Name
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 2:
            return (
              <Email
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
            case 3:
            return (
              <Address
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
          case 4:
            return (
              <Confirmation
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              />
            );
          default:
            return <Results values={values} />;
        }   
    }
}

export default MainForm;