import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { top: 20 };

function TextUpdaterNode2({ data, isConnectable }) {
  const [publish, setPublish] = useState(false);
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      {/* <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      /> */}
      <div>
        <label>Label</label>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{
          top: 20,
          backgroundColor: publish ? "#1FF4" : "#000000",
          cursor: "pointer",
        }}
        isConnectable={isConnectable}
        onClick={() => setPublish(!publish)}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode2;
