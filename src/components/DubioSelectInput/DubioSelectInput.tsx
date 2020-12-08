import React, { useState, useEffect } from "react";
import Select from "antd/lib/select";
import "./DubioSelectInput.scss";
interface IOption {
  label: string;
  value: string;
}
export default function DubioSelectInput(props: {
  options: IOption[];
  onChange: (value: any) => void;
  defaultValue: string;
  label: string;
  value: string;
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const selectMarkup = (
    <Select
      size="large"
      className="dubio-input"
      bordered={false}
      style={{ width: 120 }}
      {...props}
    ></Select>
  );

  return windowWidth < 900 ? (
    selectMarkup
  ) : (
    <div className="dubio-input-container">
      <label className="dubio-input-label">{props.label}</label>
      {selectMarkup}
    </div>
  );
}
