import React from 'react'
import { Grid, Menu, Button, Icon, Dropdown, Image, Segment } from 'semantic-ui-react';
import swap_order from '../assets/swap_order.svg';
import limited_order from '../assets/limited_order.svg';
import dca_order from '../assets/dca_order.svg';
import './trade.css';
import Header from './Header';

function Trade() {
  return (
    <div className="header-container" style={{height:'100vh', backgroundColor:'black'}}>
      <Header/>
      <div className="new-header-container">
        <Grid verticalAlign="middle">
          <Grid.Row columns={3}>
            {/* Left Column */}
            <Grid.Column></Grid.Column>

            {/* Middle Menu Items */}
            <Grid.Column textAlign="center">
              <Menu secondary className="center-menu">
                <Menu.Item name="trade" className="menu-item">
                  Trade
                </Menu.Item>
                <Dropdown text="Preps" pointing className="link item menu-item">
                  <Dropdown.Menu className="custom-dropdown">
                    <Dropdown.Item text="Coming Soon" className="custom-dropdown-item" />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </Grid.Column>

            {/* Right Side Buttons */}
            <Grid.Column textAlign="right">
              <Button className="custom-button">Priority: Fast</Button>
              <Button className="custom-button">
                <Icon name="settings" />
              </Button>
              <Button className="custom-button">Connect Wallet</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      {/* New Header Section */}
      <div className="new-header-container">
        <Grid verticalAlign="middle" centered>
          <Grid.Row columns={3} centered>
            {/* First Column */}
            <Grid.Column width={3}>
              <Grid verticalAlign="middle">
                <Grid.Row columns={2} className="image-text-row">
                  <Grid.Column width={4}>
                    <Image src={swap_order} size="tiny" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <div className="new-header-text">
                      <div>Swap</div>
                      <div>The best price</div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            {/* Second Column (similar structure) */}
            <Grid.Column width={3}>
              <Grid verticalAlign="middle">
                <Grid.Row columns={2} className="image-text-row">
                  <Grid.Column width={4}>
                    <Image src={limited_order} size="tiny" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <div className="new-header-text">
                      <div>Limit Order</div>
                      <div>Set your price</div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            {/* Third Column (similar structure) */}
            <Grid.Column width={3}>
              <Grid verticalAlign="middle">
                <Grid.Row columns={2} className="image-text-row">
                  <Grid.Column width={4}>
                    <Image src={dca_order} size="tiny" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <div className="new-header-text">
                      <div>DCA</div>
                      <div>Set and forget</div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <div className="coming-soon-container">
        <Segment className="coming-soon-segment">
          Coming Soon!
        </Segment>
      </div>
      </div>
    </div>
  )
}

export default Trade;
