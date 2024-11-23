import React from "react";

import { Grid } from "semantic-ui-react";

function Perps() {
  return (
    <div style={{ paddingBottom: "2%" }}>
      <Grid centered>
        <Grid.Row only="computer">
          <p
            style={{
              fontSize: "2.5rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Perps
          </p>
        </Grid.Row>
        <Grid.Row only="tablet">
          <p
            style={{
              fontSize: "2rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Perps
          </p>
        </Grid.Row>
        <Grid.Row only="mobile">
          <p
            style={{
              fontSize: "1.5rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Perps
          </p>
        </Grid.Row>

        <Grid.Row only="computer">
          <p
            style={{
              fontSize: "1.5rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Coming Soon
          </p>
        </Grid.Row>
        <Grid.Row only="tablet">
          <p
            style={{
              fontSize: "1.2rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Coming Soon
          </p>
        </Grid.Row>
        <Grid.Row only="mobile">
          <p
            style={{
              fontSize: "1rem",
              color: "#ede7df",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Coming Soon
          </p>
        </Grid.Row>
        {/*
        <Grid.Row centered>
          <Grid.Column only="computer" width={8}>
            {layout}
          </Grid.Column>
          <Grid.Column only="tablet" width={12}>
            {layout}
          </Grid.Column>
          <Grid.Column only="mobile" width={14}>
            {layout}
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </div>
  );
}

export default Perps;
