import React, { FC } from "react";
import {
  EdgeProps,
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
} from "reactflow";

// this is a little helper component to render the actual edge label
function EdgeLabel({ transform, label }: { transform: string, label: string }) {
  return (
    <div
      style={{
        position: "absolute",
        background: "transparent",
        padding: 10,
        color: "#ff5050",
        fontSize: 12,
        fontWeight: 700,
        transform,
      }}
      className="nodrag nopan"
    >
      {label}
    </div>
  );
}

const CustomEdge: FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <EdgeLabel
          transform={`translate(-50%, 0%) translate(${sourceX + 30}px,${
            sourceY - 15
          }px)`}
          label={"Input-1"}
        />
        <EdgeLabel
          transform={`translate(-50%, -100%) translate(${
            targetX - 20
          }px,${targetY}px)`}
          label={"Input-2"}
        />
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
