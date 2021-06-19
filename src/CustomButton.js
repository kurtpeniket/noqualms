import React from 'react'
import { openPopupWidget } from "react-calendly";
const url = "https://calendly.com/kurt-peniket"
const CustomButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return <button onClick={onClick}>Custom Button</button>;
};

export default CustomButton;