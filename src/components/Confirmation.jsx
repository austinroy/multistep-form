import React, { Component } from 'react';
import little from '../assets/svg/chickenLittle.svg';
import {Container, Header, Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
       const {values: { firstName, lastName, email, streetAddress, city, state, zip }} = this.props;

        return(
            <Container textAlign="center">
        <Header textAlign="center">
          Thanks for your patience!
        </Header>
        <img src={little} height="124" width="124" alt="heat-wave" />
        <Header textAlign="center">Please validate your info:</Header>

            <div>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>{firstName} {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:matthewmcguff85@gmail.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{streetAddress} {city}, {state} {zip}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Submit</Button>
            </div>
            </Container>
        )
    }
}

export default Confirmation;