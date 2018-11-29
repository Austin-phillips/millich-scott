import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import BrowserNav from './BrowserNav';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import '../assets/main.css'


class NavBar extends Component {
  state = { visible: false }

  handleMenu = () => this.setState({ visible: !this.state.visible })

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
      );
    }
    return (
      <div>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </div>
    );
  }

  render() {
    const { visible } = this.state
    if(isMobile){
      return (
        <div>
          <Button onClick={this.handleMenu}>
            <Icon name='bars'/> Menu
          </Button>

          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'
            >
              <Link to='/'>
                <Menu.Item name='home' />
              </Link>
              <Link to='/'>
                <Menu.Item name='Get Started' />
              </Link>
              <Link to='/'>
                <Menu.Item name='About' />
              </Link>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
              {this.props.children}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )
    } else {
      return (<BrowserNav children={this.props.children} />)
    }
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
