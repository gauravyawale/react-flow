import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { top: 20 };

function TextUpdaterNode({ data, isConnectable }) {
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
        type="source"
        position={Position.Right}
        id="a"
        style={{
          top: 20,
          backgroundColor: publish ? "#1FF411" : "#000000",
          cursor: "pointer",
        }}
        isConnectable={isConnectable}
        onClick={() => setPublish(!publish)}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default TextUpdaterNode;
