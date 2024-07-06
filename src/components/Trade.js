import React, { useState } from 'react';
import { Grid, Menu, Button, Icon, Dropdown, Image, Segment, Modal } from 'semantic-ui-react';
import swap_order from '../assets/swap_order.svg';
import limited_order from '../assets/limited_order.svg';
import dca_order from '../assets/dca_order.svg';
import metamask_logo from '../assets/metamask_logo.svg';

import './trade.css';
import Header from './Header';

function Trade() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConnectWallet = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="header-container" style={{ height: '100vh', backgroundColor: 'black', overflow: 'hidden' }}>
      <Header />
      <div className="new-header-container">
        <Grid verticalAlign="middle">
          <Grid.Row columns={3} only='computer'>
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
              <Button className="custom-button" onClick={handleConnectWallet}>
                Connect Wallet
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3} only='tablet mobile'>
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
              <Dropdown item icon='bars' direction='left' simple style={{ paddingRight: '5%', color: 'white' }}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => alert('Priority: Fast clicked')}>
                    <Icon name='fire' />
                    Priority: Fast
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => alert('Settings clicked')}>
                    <Icon name='settings' />
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleConnectWallet}>
                    <Icon name='wallet' />
                    Connect Wallet
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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

      {/* Modal for Connect Wallet */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        size="small"
        style={{ borderRadius: '10px', backgroundColor: '#7d754a', color: 'white' }}
      >
        <Modal.Header style={{ fontSize: '1.5rem', textAlign: 'center', color: 'white', backgroundColor: '#7d754a' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Connect Wallet</span>
            <Icon name='close' style={{ cursor: 'pointer' }} onClick={handleCloseModal} />
          </div>
        </Modal.Header>

        <Modal.Content style={{ backgroundColor: '#7d754a' }}>
          <Modal.Description style={{ color: 'white', textAlign: 'left' }}>
            <p style={{ fontSize: '1rem' }}>Recommended wallets</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem', padding: '10px', border: '1px solid white', borderRadius: '5px' }}>
              <Image src={metamask_logo} size="tiny" style={{ marginRight: '0.5rem', width: '50px' }} />
              <span style={{ color: 'white', marginLeft: '0.5rem' }}>Metamask</span>
            </div>
          </Modal.Description>
        </Modal.Content>

      </Modal>
    </div>
  );
}

export default Trade;
