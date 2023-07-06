import React, { useState } from "react";

const PublishHandle = ({ output }) => {
  const [published, setPublished] = useState(false);

  return (
    <div
      class="handle-square"
      onclick="handleSquareClick()"
      style={{ backgroundColor: "whitesmoke", border: "1px solid black" }}
    ></div>
  );
};

export default PublishHandle;
