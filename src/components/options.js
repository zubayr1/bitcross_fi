import bitcoin_logo from "../assets/bitcoin.svg";
import solana_logo from "../assets/solana.svg";

export const tokenOptions = [
  {
    key: "btc",
    text: "btc",
    value: "btc",
    image: { avatar: true, src: bitcoin_logo },
  },
  {
    key: "sol",
    text: "sol",
    value: "sol",
    image: { avatar: true, src: solana_logo },
  },
];

export const expiryOptions = [
  {
    key: "never",
    text: "never",
    value: "never",
  },
  {
    key: "1 hour",
    text: "1 hour",
    value: "1 hour",
  },
];

export const graphTimelineOptions = [
  { key: "7 days", text: "7 days", value: "7 days" },
  { key: "1 day", text: "1 day", value: "1 day" },
  { key: "6 hours", text: "6 hours", value: "6 hours" },
  { key: "1 hour", text: "1 hour", value: "1 hour" },
];

export const dcaOptions = [
  { key: "minute", text: "minute", value: "minute" },
  { key: "hour", text: "hour", value: "hour" },
  { key: "day", text: "day", value: "day" },
];
