import React, { useState } from "react";
import { Handle, NodeResizer, useNodes } from "reactflow";
import "./CustomNode.css";
import { HANDLE_SPACING } from "./constants";
import { LeftCustomHandle, RightCustomHandle } from "./CustomHandle";

const controlStyle = {
  border: "6px solid blue",
  borderRadius: "50px",
};

const CustomNode = (props) => {
  const { selected, data } = props;
  return (
    <>
      <NodeResizer
        style={controlStyle}
        color="#000"
        isVisible={selected}
        minWidth={100}
        minHeight={
          Math.max(data?.input?.length, data?.output?.length) * HANDLE_SPACING +
          HANDLE_SPACING
        }
      />
      {/* Input handles */}
      {data?.input.map((input, idx) => {
        return (
          <LeftCustomHandle
            handle={input}
            key={input.id}
            topPos={calculateHandlePosition(idx, data?.input?.length)}
          />
        );
      })}
      <div style={{ fontSize: "8px", textAlign: "center" }}>{data?.label}</div>
      {/* Output handle */}
      {data?.output.map((output, idx) => {
        return (
          <RightCustomHandle
            handle={output}
            key={output.id}
            topPos={calculateHandlePosition(idx, data?.output?.length)}
          />
        );
      })}
    </>
  );
};

export default CustomNode;

function calculateHandlePosition(handleIndex, totalHandles) {
  const handleGapPercentage = 100 / (totalHandles + 1);
  const handlePositionPercentage = handleGapPercentage * (handleIndex + 1);
  return `${handlePositionPercentage}%`;
}
