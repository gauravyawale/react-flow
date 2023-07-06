import React, { useEffect, useState } from "react";
import "./LeftSideMenu.css";
import { nanoid } from "nanoid";
import { HANDLE_SPACING } from "./constants";

const LeftSideMenu = ({
  addNode,
  setIsModalOpen,
  isModalOpen,
  handleDeleteNode,
}) => {
  const [inputCount, setInputCount] = useState(2);
  const [outputCount, setOutputCount] = useState(2);
  const [list, setList] = useState([]);

  useEffect(() => {
    // Retrieve functionsList from localStorage when component mounts
    const functionsList = localStorage.getItem("functionsList");
    if (functionsList?.length) setList(JSON.parse(functionsList));

    console.log("here first");
  }, []);

  useEffect(() => {
    // Store nodes and edges data in localStorage when it changes
    if (list.length)
      localStorage.setItem("functionsList", JSON.stringify(list));
  }, [list]);

  const handleListItemDelete = (nodeId) => {
    const filteredListItem = list.filter((node) => node.id !== nodeId);
    setList(filteredListItem);
    handleDeleteNode(nodeId);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveModal = () => {
    const customInputs = [];
    const customOutputs = [];
    for (let i = 0; i < inputCount; i++) {
      customInputs.push({
        id: nanoid(),
        type: "target",
        position: "left",
        style: {
          borderColor: "green",
          backgroundColor: "#fff",
          top: i * HANDLE_SPACING,
        },
      });
    }

    for (let i = 0; i < outputCount; i++) {
      customOutputs.push({
        id: nanoid(),
        type: "source",
        position: "right",
        style: {
          borderColor: "green",
          top: i * HANDLE_SPACING,
        },
      });
    }
    const newNode = {
      id: nanoid(),
      type: "customNode",

      data: {
        input: customInputs,
        output: customOutputs,
        label: "function " + (list.length + 1),
      },
      style: {
        border: "1px solid #000",
        borderRadius: 8,
        padding: 10,
        width: "100px",
        height:
          Math.max(outputCount, inputCount) * HANDLE_SPACING + HANDLE_SPACING,
        backgroundColor: "rgba(255, 255, 255)",
      },
      position: { x: 300, y: 50 },
    };
    setList([...list, newNode]);
    setInputCount(2);
    setOutputCount(2);
    handleCloseModal();
  };

  const handleAddNode = (node) => {
    addNode(node);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Create Function</button>
      <ul>
        {list.map((node, index) => (
          <li key={index}>
            <div>
              <span onClick={() => handleAddNode(node)}>
                Function {index + 1}
              </span>
              <button
                style={{ marginLeft: 8 }}
                onClick={() => handleListItemDelete(node.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Enter number of inputs and outputs</h3>
            <label>
              Inputs:
              <input
                type="number"
                value={inputCount}
                onChange={(e) => setInputCount(parseInt(e.target.value))}
              />
            </label>
            <label>
              Outputs:
              <input
                type="number"
                value={outputCount}
                onChange={(e) => setOutputCount(parseInt(e.target.value))}
              />
            </label>
            <button onClick={handleSaveModal}>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSideMenu;
