import React, { Component } from 'react';
import { Header, Segment, Divider, Grid } from 'semantic-ui-react';
import '../assets/main.css'

class Home extends Component {

  render() {
    return (
      <div>
        <div className='mainHeader'>
          <div className='headerlayer'>
            <Header as='h1' textAlign='center'>Financial Services</Header>
          </div>
        </div>
        <Divider />
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>1</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>1</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
