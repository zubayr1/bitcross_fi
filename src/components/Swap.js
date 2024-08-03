import React from 'react'
import { Grid, Segment } from "semantic-ui-react";

function Swap({isConnected}) {

    let layout = <div></div>

    if(isConnected===false)
    {
        layout = <Segment>Connect Wallet First</Segment>
    }
  return (
    <div>
        <Grid centered>
        <Grid.Row only="computer">
          <p style={{ fontSize: "2.5rem", color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>Swap</p>
        </Grid.Row>
        <Grid.Row only="tablet">
          <p style={{ fontSize: "2rem", color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>Swap</p>
        </Grid.Row>
        <Grid.Row only="mobile">
          <p style={{ fontSize: "1.5rem", color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>Swap</p>
        </Grid.Row>

        <Grid.Row>
            {layout}
        </Grid.Row>
      </Grid>

    </div>
  )
}

export default Swap
