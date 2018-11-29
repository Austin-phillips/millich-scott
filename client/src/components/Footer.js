import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Icon, Button } from 'semantic-ui-react';
import '../assets/main.css'

class Footer extends Component {

  render() {
    return (
      <Segment basic textAlign='center' className='footer'>
        <div className='socialbuttons'>
          <a href="https://www.facebook.com/sjmhomeloans/">
            <Button color='facebook'>
              <Icon name='facebook' /> Facebook
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/scott-millich-312a6019/">
            <Button color='linkedin'>
              <Icon name='linkedin' /> LinkedIn
            </Button>
          </a>
        </div>
        <p><Icon name='building outline' color='green' />11639 South 700 East #200 Draper, UT 84020</p>
        <p><Icon name='phone' color='blue' />801-995-9047</p>
        <p>Diversified Financial Services, Inc. © 2018 All Rights Reserved</p>
      </Segment>
    );
  }
}

export default Footer;
