import React from "react";
import "./input.scss";

const TextInput = ({ name, side, color, type, value, setValue }) => {
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
        value={value}
        style={{
          textAlign: ` ${side === "right" ? "right " : "left "}
          `,
        }}
        onChange={(e) => {
          setValue((prev) => {
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
  // console.log(data);
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
          {data.tableData.map((row,index) => {
            return (
              <tr key={index}>
                <td>
                  <TextInput
                    name={'col1'}
                    value={index+1}
                    setValue={setData}
                    color="transparent"
                  />
                </td>
                <td>
                  <TextInput
                    name={"col2"}
                    value={row.col2}
                    setValue={setData}
                    color="transparent"
                  />
                </td>
                <td>
                  <TextInput
                    name={"col3"}
                    value={row.col3}
                    setValue={setData}
                    color="transparent"
                  />
                </td>
                <td>
                  <TextInput
                    name={"col4"}
                    value={row.col4}
                    setValue={setData}
                    color="transparent"
                  />
                </td>
                <td>
                  <TextInput
                    name={"col5"}
                    value={row.col5}
                    setValue={setData}
                    color="transparent"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { TextInput, TextAreaInput, Tablecomponent };
