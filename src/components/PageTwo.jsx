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
        const {values: {firstName}} = this.props;
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered"><b>{firstName}</b>, Enter Personal Details</h1>
            <Form.Field>
                <label>Street Address</label>
                <input placeholder='123 Maple Street'
                onChange={this.props.handleChange('streetAddress')}
                defaultValue={values.streetAddress}
                />
            </Form.Field>
            <Form.Field>
                <label>City</label>
                <input placeholder='City'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>State/Us Territory</label>
                <input placeholder='TX'
                onChange={this.props.handleChange('state')}
                defaultValue={values.state}
                />
            </Form.Field>
            <Form.Field>
                <label>Zip Code</label>
                <input placeholder='72753'
                onChange={this.props.handleChange('zip')}
                defaultValue={values.zip}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Continue</Button>
        </Form>
        )
    }
}

export default PersonalDetails;