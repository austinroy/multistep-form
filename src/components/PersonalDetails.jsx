import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Field>
                <label>Age</label>
                <input placeholder='Age' onChange={this.props.handleChange('age')}/>
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input placeholder='City' onChange={this.props.handleChange('city')}/>
            </Form.Field>
            <Form.Field>
                <label>Country</label>
                <input placeholder='Country' onChange={this.props.handleChange('country')}/>
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
        </Form>
        )
    }
}

export default PersonalDetails;