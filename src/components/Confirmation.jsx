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

            
        <List divided relaxed>
    <List.Item>
      <List.Icon name='user circle' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{firstName} {lastName}</List.Header>
        <List.Description>Full Name</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='mail' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{email}</List.Header>
        <List.Description>Email</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='home' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>{streetAddress} {city}, {state} {zip} </List.Header>
        <List.Description>Full Physical Address</List.Description>
      </List.Content>
    </List.Item>
  </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Submit</Button>
            
            </Container>
        )
    }
}

export default Confirmation;