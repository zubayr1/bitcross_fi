import React from "react";
import { Grid, Segment } from "semantic-ui-react";

function LimitOrder() {
  return (
    <div>
      <Grid centered>
        <Grid.Row only="computer">
          <p style={{ fontSize: "2.5rem", color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>Limit Order</p>
        </Grid.Row>
        <Grid.Row only="tablet">
          <p style={{ fontSize: "2rem", color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>Limit Order</p>
        </Grid.Row>
        <Grid.Row only="mobile">
          <p style={{ fontSize: "1.5rem", color: "#ede7df", fontFamily: "'Raleway', sans-serif" }}>Limit Order</p>
        </Grid.Row>

        <Grid.Row centered>
            <Segment size="large">Coming Soon</Segment>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default LimitOrder;
