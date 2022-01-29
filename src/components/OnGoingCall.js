import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function OnGoingCall() {
  return (
    <div>
      <ProgressBar animated now={45} label={"call on going"} />
    </div>
  );
}
