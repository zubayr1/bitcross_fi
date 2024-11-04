import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import {
  Grid,
  Dropdown,
  Icon,
  Modal,
  Button,
  Message,
} from "semantic-ui-react";

Chart.register(...registerables);

function TradingView({
  inputToken,
  outputToken,
  inputTokenHistory,
  outputTokenHistory,
  dates,
  onTimelineChange,
  graphProcessingResult,
}) {
  const options = [
    { key: "7 days", text: "7 days", value: "7 days" },
    { key: "1 day", text: "1 day", value: "1 day" },
    { key: "6 hours", text: "6 hours", value: "6 hours" },
    { key: "1 hour", text: "1 hour", value: "1 hour" },
  ];

  const [outputhighestValue, setOutputHighestValue] = useState(null);
  const [outputlowestValue, setOutputLowestValue] = useState(null);
  const [inputhighestValue, setInputHighestValue] = useState(null);
  const [inputlowestValue, setInputLowestValue] = useState(null);
  const [selectedValueTimeline, setSelectedValueTimeline] = useState(
    options[0].value
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [graphChart, setGraphChart] = useState(null);

  const canvasRef = useRef(null);
  const modalCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ratioDataset = outputTokenHistory.map(
      (value, index) => value / inputTokenHistory[index]
    );

    const outputmax = parseFloat(Math.max(...outputTokenHistory).toFixed(3));
    const outputmin = parseFloat(Math.min(...outputTokenHistory).toFixed(3));
    setOutputHighestValue(outputmax);
    setOutputLowestValue(outputmin);

    const inputmax = parseFloat(Math.max(...inputTokenHistory).toFixed(3));
    const inputmin = parseFloat(Math.min(...inputTokenHistory).toFixed(3));
    setInputHighestValue(inputmax);
    setInputLowestValue(inputmin);

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: `${outputToken} / ${inputToken}`,
            data: ratioDataset,
            segment: {
              borderColor: (ctx) => {
                const prev = ctx.p0.parsed.y;
                const next = ctx.p1.parsed.y;
                return next > prev ? "teal" : "red";
              },
            },
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: false,
            tension: 0.4,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: { display: false },
          y: { display: true },
        },
        plugins: {
          legend: { display: true, position: "top" },
          tooltip: { mode: "index", intersect: false },
        },
      },
    });

    setGraphChart(chartInstance);

    return () => {
      chartInstance.destroy();
    };
  }, [inputTokenHistory, outputTokenHistory, dates, inputToken, outputToken]);

  useEffect(() => {
    if (modalOpen && modalCanvasRef.current) {
      const modalCanvas = modalCanvasRef.current;
      const ctx = modalCanvas.getContext("2d");
      if (!ctx) return;

      const ratioDataset = outputTokenHistory.map(
        (value, index) => value / inputTokenHistory[index]
      );

      const chartInstance = new Chart(ctx, {
        type: "line",
        responsive: true,
        data: {
          labels: dates,
          datasets: [
            {
              label: `${outputToken} / ${inputToken}`,
              data: ratioDataset,
              segment: {
                borderColor: (ctx) => {
                  const prev = ctx.p0.parsed.y;
                  const next = ctx.p1.parsed.y;
                  return next > prev ? "teal" : "red";
                },
              },
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: false,
              tension: 0.4,
              pointRadius: 3,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: { display: true },
            y: { display: true },
          },
          plugins: {
            legend: { display: true, position: "top" },
            tooltip: { mode: "index", intersect: false },
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [
    modalOpen,
    graphChart,
    inputTokenHistory,
    outputTokenHistory,
    dates,
    inputToken,
    outputToken,
  ]);

  const handleChangeTimeline = (e, { value }) => {
    setSelectedValueTimeline(value);
    onTimelineChange(value);
  };

  let graphLayout = (
    <div
      style={{
        width: "100%",
        height: "400px",
        minHeight: "400px",
        background: "linear-gradient(to bottom, black, darkblue)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {graphProcessingResult === 1 && (
        <div style={{ color: "white" }}>Loading...</div>
      )}
      {graphProcessingResult === 0 && <canvas ref={canvasRef} />}
    </div>
  );

  if (graphProcessingResult !== 0 && graphProcessingResult !== 1) {
    graphLayout = (
      <div
        style={{
          width: "100%",
          height: "400px",
          minHeight: "400px",
          background: "linear-gradient(to bottom, black, darkblue)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Message negative>
          <Message.Header>Something is wrong</Message.Header>
          <p>Could not generate graph</p>
        </Message>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "15px",
        marginBottom: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Icon
          size="large"
          inverted
          name="zoom-in"
          style={{ marginTop: "1%", marginLeft: "2%", cursor: "pointer" }}
          onClick={() => setModalOpen(true)}
        />
        <Dropdown
          fluid
          selection
          options={options}
          value={selectedValueTimeline}
          onChange={handleChangeTimeline}
          style={{
            backgroundColor: "#000",
            color: "#ede7df",
            fontFamily: "'Raleway', sans-serif",
            width: "140px",
            marginRight: "2%",
            marginTop: "1%",
          }}
        />
      </div>

      {graphLayout}

      <Grid centered style={{ marginTop: "1%" }}>
        <Grid.Column width={3}>
          <Grid centered>
            <Grid.Row>
              <p style={{ color: "white" }}>{outputToken} max</p>
            </Grid.Row>
            <Grid.Row style={{ marginTop: "-15%" }}>
              <span style={{ color: "green" }}>${outputhighestValue}</span>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column width={3}>
          <Grid centered>
            <Grid.Row>
              <p style={{ color: "white" }}>{outputToken} min</p>
            </Grid.Row>
            <Grid.Row style={{ marginTop: "-15%" }}>
              <span style={{ color: "red" }}>${outputlowestValue}</span>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column width={3}>
          <Grid centered>
            <Grid.Row>
              <p style={{ color: "white" }}>{inputToken} max</p>
            </Grid.Row>
            <Grid.Row style={{ marginTop: "-15%" }}>
              <span style={{ color: "green" }}>${inputhighestValue}</span>
            </Grid.Row>
          </Grid>
        </Grid.Column>

        <Grid.Column width={3}>
          <Grid centered>
            <Grid.Row>
              <p style={{ color: "white" }}>{inputToken} min</p>
            </Grid.Row>
            <Grid.Row style={{ marginTop: "-15%" }}>
              <span style={{ color: "red" }}>${inputlowestValue}</span>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        style={{
          width: "90%",
          height: "90%",
          background: "black",
        }}
      >
        <Modal.Content
          style={{
            background: "linear-gradient(to bottom, black, darkblue)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <canvas ref={modalCanvasRef} />
        </Modal.Content>
        <Modal.Actions>
          <Button inverted color="red" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default TradingView;
