import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image, Button, Card } from 'semantic-ui-react';
import '../assets/main.css'
import DiversifiedLogo from '../images/DiversifiedLogo.png'
import Millich from '../images/Millich.jpg'

class Home extends Component {

  render() {
    return (
      <div>
        <div className='mainHeader'>
          <Image src={DiversifiedLogo} fluid />
        </div>
        <Segment basic textAlign='center'>
          <Button color='green' size='large'>Get Started</Button>
        </Segment>
        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={Millich} />
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment basic textAlign='center'>About Scott millich</Segment>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src='/images/wireframe/image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
