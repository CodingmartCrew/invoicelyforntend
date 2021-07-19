import {React,useState,useEffect} from "react";
import "./input.scss";

const TextInput = ({ id, name, side, color, row, type, value, setValue }) => {
  return (
    <div className="input">
      <input
        className={`
            ${
              type === "title"
                ? "title "
                : type === "bold"
                ? "bold"
                : "default "
            } 
            ${color === "transparent" ? "transparent" : ""}
        `}
        type="text"
        defaultValue={value}
        style={{
          textAlign: ` ${side === "right" ? "right " : "left "}
          `,
        }}
        onChange={(e) => {
          row
            ? setValue(name,e.target.value, id-1)
            : setValue((prev) => {
                return {
                  ...prev,
                  [name]: e.target.value,
                };
              });
        }}
      />
    </div>
  );
};

const TextAreaInput = ({ name, value, setValue }) => {
  return (
    <div className="input">
      <textarea
        defaultValue={value}
        onChange={(e) => {
          setValue((prev) => {
            return {
              ...prev,
              [name]: e.target.value,
            };
          });
        }}
      ></textarea>
    </div>
  );
};

const Tablecomponent = ({ data, setData }) => {

  const rowChange = ( name, value, id) => {
    console.log("row ",id, name);
    console.log(data);
    setData((prev)=>{
      let dataCopy = prev;
      dataCopy.tableData[id][name] = value;
      dataCopy.tableData[id].col5 = dataCopy.tableData[id].col3 * dataCopy.tableData[id].col4;
      console.log( dataCopy.tableData[id].col5)
      return dataCopy;
    }) 
  };

  return (
    <div className="table">
      <table className="table table-bordered">
        <thead>
          <tr className="secondary">
            <th scope="col" style={{ width: "50px" }}>
              <TextInput
                name={"sno"}
                value={data.sno}
                setValue={setData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col" style={{ width: "300px" }}>
              <TextInput
                name={"itemdescription"}
                value={data.itemdescription}
                setValue={setData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col">
              <TextInput
                name={"quantity"}
                value={data.quantity}
                setValue={setData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col">
              <TextInput
                name={"unitprice"}
                value={data.unitprice}
                setValue={setData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col">
              <TextInput
                name={"total"}
                value={data.total}
                setValue={setData}
                type="bold"
                color="transparent"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.tableData.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.col1}</td>
                <td>
                  <TextInput
                    id={row.col1}
                    name={"col2"}
                    value={row.col2}
                    setValue={rowChange}
                    color="transparent"
                    row={true}
                  />
                </td>
                <td>
                  <TextInput
                    id={row.col1}
                    name={"col3"}
                    value={row.col3}
                    setValue={rowChange}
                    color="transparent"
                    row={true}
                  />
                </td>
                <td>
                  <TextInput
                    id={row.col1}
                    name={"col4"}
                    value={row.col4}
                    setValue={rowChange}
                    color="transparent"
                    row={true}
                  />
                </td>
                <td>{row.col5} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { TextInput, TextAreaInput, Tablecomponent };
