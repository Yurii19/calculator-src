import Display from "./Display";
import Button from "./Button";
import { useState, useCallback } from "react";
import { buttonsHandler } from "../buttonsHandler";
const CalcUI = () => {
  const [value, setValue] = useState("");
  const [mValue, setMvalue] = useState("0");
  const onclickCallback = useCallback(
    (ev) => {
      const expRegex = /^-?\d+\.?\d+?$/;
      const expLastNumber = /-?\d+\.?\d*?$/;

      const node = ev.target;
      switch (node.innerText) {
        case "mr":
          setValue(value + mValue);
          return;
        case "mc":
          setMvalue("0");
          return;
        case "m-":
          let matchedNegativeNumber = value.match(expLastNumber);
          if (matchedNegativeNumber) {
            setMvalue((+mValue - +matchedNegativeNumber[0]).toString());
            return;
          }
          return;
        case "m+":
          let matched = value.match(expLastNumber);
          if (matched) console.log(matched);
          console.log(value);
          if (matched) {
            setMvalue((+mValue + +matched[0]).toString());
            return;
          }
          if (value === "") return;
          setMvalue((+mValue + +value).toString());
          return;
      }
      if (
        node.parentNode.classList.contains("calc-button") ||
        node.classList.contains("calc-button")
      ) {
        setValue(buttonsHandler(node.innerText, value));
      }
    },
    [value, mValue]
  );

  return (
    <div className="calc-body" onClick={onclickCallback}>
      Calculator
      <Display value={value} memory={mValue} />
      <div className="row">
        <Button bg="bgLight" value="AC" />
        <Button bg="bgLight" value="+/-" />
        <Button bg="bgLight" value="%" />
        <Button bg="bgOrange" value="/" />
      </div>
      <div className="row">
        <Button value="mc" />
        <Button value="mr" />
        <Button value="m-" />
        <Button bg="bgOrange" value="m+" />
      </div>
      <div className="row">
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button bg="bgOrange" value="x" />
      </div>
      <div className="row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button bg="bgOrange" value="-" />
      </div>
      <div className="row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button bg="bgOrange" value="+" />
      </div>
      <div className="row">
        <Button value="0" />
        <Button value="." />
        <Button bg="bgOrange" value="=" />
      </div>
    </div>
  );
};

export default CalcUI;
