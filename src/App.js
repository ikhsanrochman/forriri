import React, { useState } from "react";
import PasscodeScreen from "./PasscodeScreen";
import SunflowerCongrats from "./SunflowerCongrats";
import "./SunflowerCongrats.css";
import "./PasscodeScreen.css";

function App() {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return <PasscodeScreen onSuccess={() => setStep(1)} />;
  }
  return <SunflowerCongrats />;
}

export default App;
