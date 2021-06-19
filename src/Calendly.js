import React from 'react';
import { InlineWidget } from "react-calendly";
import { openPopupWidget } from "react-calendly";

const calendly = (props) => (
  <div>
    <InlineWidget url="https://calendly.com/kurt-peniket" />
  </div>
);

export default calendly;