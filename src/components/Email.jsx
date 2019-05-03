import React, { Component } from 'react';
import little from '../assets/svg/chickenLittle.svg';
import { Container, Header, Form, Icon, Button } from 'semantic-ui-react';

class PageTwo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: {firstName, lastName}} = this.props;
        const { values } = this.props
        return(
        <Container textAlign="center">
        
            <Header textAlign="center">Nice to meet your {firstName} {lastName}! </Header>
            <img src={little} height="124" width="124" alt="heat-wave"/>
            <Header textAlign="center">What is your email?</Header>

        <Form color='blue' >
            <Form.Field>
                    <input
                    type='email'
                    placeholder='Email'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Button animated onClick={this.back}>
      <Button.Content visible>Back</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow left' />
      </Button.Content>
    </Button>
            <Button animated onClick={this.saveAndContinue}>
      <Button.Content visible>Continue</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
        </Form>
        </Container>
        )
    }
}

export default PageTwo;