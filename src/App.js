import { useCallback, useEffect, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  updateEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import LeftSideMenu from "./components/LeftSideMenu";
import Header from "./components/Header";
import CustomNode from "./components/CustomNode";
import { HANDLE_SPACING } from "./components/constants";

const nodeTypes = { customNode: CustomNode };

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const edgeUpdateSuccessful = useRef(true);

  useEffect(() => {
    // Retrieve nodes and edges data from localStorage when component mounts
    const nodesData = localStorage.getItem("nodesData");
    const edgesData = localStorage.getItem("edgesData");
    if (nodesData?.length) setNodes(JSON.parse(nodesData));
    if (edgesData?.length) setEdges(JSON.parse(edgesData));
  }, []);

  useEffect(() => {
    // Store nodes and edges data in localStorage when it changes
    if (nodes?.length) localStorage.setItem("nodesData", JSON.stringify(nodes));
    if (edges?.length) localStorage.setItem("edgesData", JSON.stringify(edges));
  }, [nodes, edges]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const getAvailablePosition = (x, y) => {
    const nodeSize = 150; // Adjust this value based on your node size
    const padding = 20; // Adjust this value based on desired padding

    let newX = x;
    let newY = y;

    // Check if the new position overlaps with any existing nodes
    let overlap = false;
    nodes.forEach((node) => {
      const nodeX = node.position.x;
      const nodeY = node.position.y;
      const width = nodeSize;
      const height =
        node.data?.output?.length * HANDLE_SPACING + HANDLE_SPACING;

      if (
        newX + nodeSize + padding > nodeX &&
        newX < nodeX + width + padding &&
        newY + height + padding > nodeY &&
        newY < nodeY + height + padding
      ) {
        overlap = true;
      }
    });

    // If overlap, find a new position
    while (overlap) {
      newX += nodeSize + padding;

      overlap = false;
      // eslint-disable-next-line no-loop-func
      nodes.forEach((node) => {
        const nodeX = node.position.x;
        const nodeY = node.position.y;
        const width = nodeSize;
        const height =
          node.data?.output?.length * HANDLE_SPACING + HANDLE_SPACING;

        if (
          newX + nodeSize + padding > nodeX &&
          newX < nodeX + width + padding &&
          newY + height + padding > nodeY &&
          newY < nodeY + height + padding
        ) {
          overlap = true;
        }
      });
    }

    return { x: newX, y: newY };
  };

  const addNode = useCallback(
    (newNode) => {
      const newPosition = getAvailablePosition(
        newNode.position.x,
        newNode.position.y
      );
      newNode.position = newPosition;
      setNodes((prevNodes) => [...prevNodes, newNode]);
    },
    [setNodes, nodes.length]
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  //update the edges
  // gets called after end of edge gets dragged to another source or target
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);
  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  //avoid overlap on node movement
  const onNodeDragStop = (event, node) => {
    const { x, y } = node.position;
    const nodeSize = 150; // Adjust this value based on your node size
    const padding = 20; // Adjust this value based on desired padding

    let newX = x;
    let newY = y;

    // Check if the dragged node overlaps with any other nodes
    let overlap = false;
    nodes.forEach((otherNode) => {
      if (otherNode.id !== node.id) {
        const nodeX = otherNode.position.x;
        const nodeY = otherNode.position.y;
        const width = nodeSize;
        const height =
          otherNode.data?.output?.length * HANDLE_SPACING + HANDLE_SPACING;

        if (
          newX + nodeSize + padding > nodeX &&
          newX < nodeX + width + padding &&
          newY + height + padding > nodeY &&
          newY < nodeY + height + padding
        ) {
          overlap = true;
        }
      }
    });

    // If overlap, find a new position for the node
    if (overlap) {
      const availablePosition = getAvailablePosition(x, y);
      newX = availablePosition.x;
      newY = availablePosition.y;

      // Update the node's position in the state
      setNodes((prevNodes) =>
        prevNodes.map((n) =>
          n.id === node.id ? { ...n, position: { x: newX, y: newY } } : n
        )
      );
    }
  };

  const handleDeleteNode = (nodeId) => {
    const filteredNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(filteredNodes);
  };

  return (
    <div className="main-container">
      <Header />
      <div className="sub-container">
        <div className="left-side-menu-container">
          <LeftSideMenu
            addNode={addNode}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            handleDeleteNode={handleDeleteNode}
          />
        </div>
        <div className="flow-container">
          {!isModalOpen && (
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              // onConnect={onConnect}
              nodeTypes={nodeTypes}
              // edgeTypes={edgeTypes}
              onEdgeUpdateEnd={onEdgeUpdateEnd}
              onEdgeUpdate={onEdgeUpdate}
              fitView
              attributionPosition="bottom-left"
              onConnect={onConnect}
              onNodeDragStop={onNodeDragStop}
              onEdgeUpdateStart={onEdgeUpdateStart}
            >
              <Controls />
              <MiniMap />
              <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
          )}
          {/* <button onClick={addNode}>Add Node</button> */}
        </div>
      </div>
    </div>
  );
};

export default App;
