import React, { useState } from "react";
import { Handle } from "reactflow";
import "./CustomHandle.css";

const LeftCustomHandle = ({ handle, topPos }) => {
  const { name, value, dataType, style, id } = handle;
  const [isPublished, setIsPublished] = useState(false);
  //handle the publish event on click
  const handlePublishLeftClick = () => {
    setIsPublished(!isPublished);
  };

  return (
    <div className="left-custom-handle" style={{ top: topPos }}>
      <div className="handle-name-left">In</div>
      <div className="left-handle-container">
        <div
          className="handle-publish-left"
          onClick={handlePublishLeftClick}
          style={{
            backgroundColor: isPublished ? "blue" : "whitesmoke",
            border: `1px solid ${isPublished ? "blue" : "black"}`,
          }}
        ></div>
        <div className="left-handle-info">
          <span className="handle-data-type">Int</span>
          <span className="handle-value-left">2</span>
        </div>
        <Handle
          type="target"
          position="left"
          style={{ backgroundColor: "#fff" }}
          id={id}
        />
      </div>
    </div>
  );
};

const RightCustomHandle = ({ handle, topPos }) => {
  const { name, value, dataType, style, id } = handle;
  const [isPublished, setIsPublished] = useState(false);

  //handle the publish event on click
  const handlePublishRightClick = () => {
    setIsPublished(!isPublished);
  };

  return (
    <div className="right-custom-handle" style={{ top: topPos }}>
      <div className="handle-name-right">Out</div>
      <div className="right-handle-container">
        <div
          className="handle-publish-right"
          onClick={handlePublishRightClick}
          style={{
            backgroundColor: isPublished ? "blue" : "whitesmoke",
            border: `1px solid ${isPublished ? "blue" : "black"}`,
          }}
        ></div>
        <Handle
          type="source"
          position="right"
          style={{ backgroundColor: "#fff" }}
          id={id}
        />
        <div className="right-handle-info">
          <span className="right-handle-data-type">Int</span>
          <span className="handle-value-right">10</span>
        </div>
      </div>
    </div>
  );
};

export { LeftCustomHandle, RightCustomHandle };
