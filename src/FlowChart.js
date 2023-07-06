// import React, { useCallback } from "react";
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   addNode,
//   Handle,
//   Position,
// } from "reactflow";

// import "reactflow/dist/style.css";

// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
//   { id: "3", position: { x: 0, y: 200 }, data: { label: "3" } },
// ];
// // const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

// //initialNodes creation from json data
// const jsonData = {
//   model: "abb.ia.sce.engineering",
//   type: "abb.ia.sce.engineering@1",
//   properties: {
//     associatedObjectType: {
//       model: {
//         value: "abb.controlSystem.800xA.aspectObject",
//       },
//       typeId: {
//         value:
//           "abb.controlSystem.800xA.aspectObject.68363f7a_b706_465f_99c9_6870550c80b6.Absolute_Calculation1",
//       },
//       version: {
//         value: "2.0.0",
//       },
//       name: {
//         value: "Absolute Calculation1",
//       },
//       isGlobal: {
//         value: false,
//       },
//     },
//     category: {
//       value: "Type",
//     },
//     saveOption: {
//       value: "Published",
//     },
//     model: {
//       description: {
//         value: "",
//       },
//       model: {
//         value: "abb.ability.conditionMonitor",
//       },
//       name: {
//         value: "GeneralTestModel",
//       },
//       tags: {
//         value: [
//           "Source=2891fe10-3b6e-413a-b442-facc546ad89c",
//           "TenantId=2891fe10-3b6e-413a-b442-facc546ad89c",
//         ],
//       },
//       typeId: {
//         value:
//           "abb.local.GeneralTestModel.TenantId.2891fe10-3b6e-413a-b442-facc546ad89c",
//       },
//       version: {
//         value: "6.0.0",
//       },
//     },
//     objectTypes: {
//       "1d98f393-bdef-45ef-8c25-9bddc6c66e0d": {
//         objectTypeModel: {
//           value: "abb.controlSystem.800xA.aspectObject",
//           dataType: "string",
//           isMandatory: false,
//         },
//         objectType: {
//           value:
//             "abb.controlSystem.800xA.aspectObject.68363f7a_b706_465f_99c9_6870550c80b6.Absolute_Calculation1@2",
//           dataType: "string",
//           isMandatory: false,
//         },
//         variables: {
//           aspects: {
//             Name: {
//               Description: {
//                 dataType: "string",
//                 path: "1d98f393-bdef-45ef-8c25-9bddc6c66e0d#abb.controlSystem.800xA.aspectObject/variables/aspects/Name/Description",
//               },
//               Name: {
//                 dataType: "string",
//                 path: "1d98f393-bdef-45ef-8c25-9bddc6c66e0d#abb.controlSystem.800xA.aspectObject/variables/aspects/Name/Name",
//               },
//             },
//             GeneralProperties: {
//               Input1: {
//                 dataType: "number",
//                 path: "1d98f393-bdef-45ef-8c25-9bddc6c66e0d#abb.controlSystem.800xA.aspectObject/variables/aspects/GeneralProperties/Input1",
//               },
//               Input2: {
//                 dataType: "number",
//                 path: "1d98f393-bdef-45ef-8c25-9bddc6c66e0d#abb.controlSystem.800xA.aspectObject/variables/aspects/GeneralProperties/Input2",
//               },
//             },
//           },
//         },
//         xcoordinate: {
//           value: 204,
//           dataType: "number",
//         },
//         ycoordinate: {
//           value: 117.19999694824219,
//           dataType: "number",
//         },
//         scale: {
//           value: 1,
//           dataType: "number",
//         },
//         name: {
//           value: "Absolute Calculation1",
//           dataType: "string",
//         },
//         version: {
//           value: "2.0.0",
//           dataType: "string",
//         },
//       },
//     },
//     functions: {
//       ExpFn_0: {
//         xcoordinate: {
//           value: 669.4699821322216,
//           dataType: "number",
//         },
//         ycoordinate: {
//           value: 105.19999694824219,
//           dataType: "number",
//         },
//         scale: {
//           value: 1,
//           dataType: "number",
//         },
//         name: {
//           value: "ExpFn",
//           dataType: "string",
//         },
//         version: {
//           value: "3.1.0",
//           dataType: "string",
//         },
//         functionType: {
//           dataType: "string",
//           value:
//             "abb.local.ExpFn.TenantId.2891fe10-3b6e-413a-b442-facc546ad89c@3",
//         },
//         inputs: {
//           Input0: {
//             dataType: "number",
//             description: "",
//             value: 0,
//             link: "1d98f393-bdef-45ef-8c25-9bddc6c66e0d#abb.controlSystem.800xA.aspectObject/variables/aspects/GeneralProperties/Input1",
//           },
//           Input1: {
//             dataType: "number",
//             description: "",
//             value: 0,
//             link: "1d98f393-bdef-45ef-8c25-9bddc6c66e0d#abb.controlSystem.800xA.aspectObject/variables/aspects/GeneralProperties/Input2",
//           },
//           Input2: {
//             dataType: "number",
//             description: "",
//             link: "",
//           },
//           Input3: {
//             dataType: "boolean",
//             description: "",
//             link: "",
//           },
//         },
//         outputs: {
//           IntCalc: {
//             dataType: "integer",
//             description: "",
//             link: "#/variables/ExpFn_0/outputs/IntCalc",
//           },
//           IntArrCalc: {
//             dataType: "array",
//             items: "integer",
//             description: "",
//             link: "#/variables/ExpFn_0/outputs/IntArrCalc",
//           },
//           StringCalc: {
//             dataType: "string",
//             description: "",
//             link: "#/variables/ExpFn_0/outputs/StringCalc",
//           },
//           NumberCalc: {
//             dataType: "number",
//             description: "",
//             link: "#/variables/ExpFn_0/outputs/NumberCalc",
//           },
//           BooleanCalc: {
//             dataType: "boolean",
//             description: "",
//             link: "",
//           },
//         },
//         alias: {
//           Input0: {
//             dataType: "string",
//             value: "Input0",
//             isDirty: false,
//           },
//           Input1: {
//             dataType: "string",
//             value: "Input1",
//             isDirty: false,
//           },
//           Input2: {
//             dataType: "string",
//             value: "Input2",
//             isDirty: false,
//           },
//           Input3: {
//             dataType: "string",
//             value: "Input3fnalias",
//             isDirty: false,
//           },
//           IntCalc: {
//             dataType: "string",
//             value: "IntCalc",
//             isDirty: false,
//           },
//           IntArrCalc: {
//             dataType: "string",
//             value: "IntArrCalc",
//             isDirty: false,
//           },
//           StringCalc: {
//             dataType: "string",
//             value: "StringCalc",
//             isDirty: false,
//           },
//           NumberCalc: {
//             dataType: "string",
//             value: "NumberCalc",
//             isDirty: false,
//           },
//           BooleanCalc: {
//             dataType: "string",
//             value: "BooleanCalc",
//             isDirty: false,
//           },
//         },
//         alarmInputs: {},
//         eventInputs: {},
//         triggers: {
//           time: {
//             dataType: "string",
//             value: "",
//           },
//           variableChange: {
//             Input0: {
//               dataType: "number",
//               link: "#/properties/functions/ExpFn_0/inputs/Input0",
//             },
//             Input1: {
//               dataType: "number",
//               link: "#/properties/functions/ExpFn_0/inputs/Input1",
//             },
//             Input2: {
//               dataType: "number",
//               link: "",
//             },
//             Input3: {
//               dataType: "boolean",
//               link: "",
//             },
//             referenceValue: {
//               dataType: "boolean",
//               link: "",
//             },
//             actualValue: {
//               dataType: "boolean",
//               link: "",
//             },
//           },
//         },
//       },
//     },
//     softVariableTypes: {},
//     alarmTypes: {},
//     eventTypes: {},
//   },
//   variables: {
//     ExpFn_0: {
//       outputs: {
//         IntCalc: {
//           description: "",
//           dataType: "integer",
//         },
//         IntArrCalc: {
//           description: "",
//           dataType: "array",
//           items: "integer",
//         },
//         StringCalc: {
//           description: "",
//           dataType: "string",
//         },
//         NumberCalc: {
//           description: "",
//           dataType: "number",
//         },
//       },
//     },
//   },
// };

// function mapObjectTypesToNodes() {
//   const nodes = [];

//   for (const key in jsonData?.properties?.objectTypes) {
//     const objectType = jsonData?.properties?.objectTypes[key];
//     const nodeId = key;
//     const nodeName = objectType.variables.aspects.GeneralProperties;
//     const x = objectType.xcoordinate.value;
//     const y = objectType.ycoordinate.value;

//     // Create a node object
//     const node = {
//       id: nodeId,
//       position: { x, y },
//       data: { label: nodeName },
//       type: "textUpdater",
//     };

//     nodes.push(node);
//   }

//   return nodes;
// }

// const nodeTypes = { textUpdater: TextUpdaterNode };
// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(
//     mapObjectTypesToNodes()
//   );
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   const onConnect = useCallback(
//     (params) => {
//       setEdges((eds) => addEdge(params, eds));
//     },
//     [setEdges]
//   );

//   const addNode = useCallback(() => {
//     const newNode = {
//       id: `${nodes.length + 1}`,
//       position: { x: 0, y: 0 },
//       data: { label: `${nodes.length + 1}` },
//     };

//     setNodes((prevNodes) => [...prevNodes, newNode]);
//   }, [setNodes, nodes.length]);

//   return (
//     <div style={{ width: "100vw", height: "70vh" }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//       >
//         <Controls />
//         <MiniMap />
//         <Background variant="dots" gap={12} size={1} />
//       </ReactFlow>
//       <button onClick={addNode}>Add Node</button>
//     </div>
//   );
// }

// const handleStyle = { left: 10 };

// function TextUpdaterNode({ data, isConnectable }) {
//   console.log(data, "inpo");
//   const mapInputs = () => {
//     // const inputs = data?.map((input) => {
//     //   console.log(input, "inpo");
//     //   return (
//     //     <Handle
//     //       type="source"
//     //       position={Position.Bottom}
//     //       id="a"
//     //       style={handleStyle}
//     //       isConnectable={isConnectable}
//     //     />
//     //   );
//     // });
//     return (
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="a"
//         style={handleStyle}
//         isConnectable={isConnectable}
//       />
//     );
//   };

//   return (
//     <div className="text-updater-node">
//       {/* <Handle
//         type="target"
//         position={Position.Top}
//         isConnectable={isConnectable}
//       />
//       <div>
//         <label htmlFor="text">Text:</label>
//         <input id="text" name="text" className="nodrag" />
//       </div>
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="a"
//         style={handleStyle}
//         isConnectable={isConnectable}
//       />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="b"
//         isConnectable={isConnectable}
//       /> */}
//       <Handle
//         type="target"
//         position={Position.Top}
//         isConnectable={isConnectable}
//       />
//       {mapInputs()}
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="b"
//         isConnectable={isConnectable}
//       />
//     </div>
//   );
// }

