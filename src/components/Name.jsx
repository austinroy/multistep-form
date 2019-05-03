import React, { Component } from 'react';
import little from '../assets/svg/chickenLittle.svg';
import { Header, Container, Form, Button } from 'semantic-ui-react';

class Name extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Container textAlign="center">
            <Form color='green' >
            
            <Header textAlign="center">Hi! I'm Little.  I'll be preparing your Risk Assessment today.</Header>
            <img src={little} height="124" width="124" alt="heat-wave"/>
            <Header textAlign="center">What's your name?</Header>

                <Form.Field>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Continue</Button>
            </Form>
            </Container>
        )
    }
}

export default Name;