import { React } from "react";
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
            ? setValue(name, e.target.value, id - 1)
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

const Tablecomponent = ({ tableData, setTableData }) => {
  const numberPattern = /\d+/g;
  const setTax = (name,value) => {
    setTableData((prev) => {
      let taxPer = value ? value.match(numberPattern)?.join(''):0;
      let taxamt = parseFloat((prev.subtotal / 100) * parseInt(taxPer));
      return{
        ...prev,
        taxamt : taxamt,
        nettotal : parseFloat(prev.subtotal + (taxamt?taxamt:0)),
        taxper: parseInt(taxPer),
      };
    });
  };

  const rowChange = (name, value, id) => {
    try {
      setTableData((prev) => {
        let dataCopy = prev;
        dataCopy.tableData[id][name] = value;
        if (name !== "col2") {
          dataCopy.tableData[id].col5 = isNaN(
            parseFloat(dataCopy.tableData[id].col3)
          )
            ? 1 * dataCopy.tableData[id].col4
            : dataCopy.tableData[id].col3 * dataCopy.tableData[id].col4;
          let total = dataCopy.tableData.reduce((a, b) => {
            return { col5: a.col5 + b.col5 };
          });
          dataCopy.subtotal = total.col5;
          dataCopy.taxamt = parseFloat((total.col5 / 100) * dataCopy.taxper);
          dataCopy.nettotal = parseFloat(dataCopy.subtotal + dataCopy.taxamt);
        }
        return {
          ...prev,
          tableData: [...dataCopy.tableData],
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="table">
      <table className="table table-bordered">
        <thead>
          <tr className="secondary">
            <th scope="col" style={{ width: "50px" }}>
              <TextInput
                name={"sno"}
                value={tableData.sno}
                setValue={setTableData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col" style={{ width: "300px" }}>
              <TextInput
                name={"itemdescription"}
                value={tableData.itemdescription}
                setValue={setTableData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col">
              <TextInput
                name={"quantity"}
                value={tableData.quantity}
                setValue={setTableData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col">
              <TextInput
                name={"unitprice"}
                value={tableData.unitprice}
                setValue={setTableData}
                type="bold"
                color="transparent"
              />
            </th>
            <th scope="col">
              <TextInput
                name={"total"}
                value={tableData.total}
                setValue={setTableData}
                type="bold"
                color="transparent"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.tableData.map((row, index) => {
            return (
              <tr key={index}>
                <td className="blocked" title="Auto Generated">
                  {row.col1}
                </td>
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
                <Blocked value={row.col5} />
              </tr>
            );
          })}
          <tr>
            <td colSpan="4">
              <TextInput
                name={"subtotaltitle"}
                value={tableData.subtotaltitle}
                setValue={rowChange}
                type="bold"
                color="transparent"
              />
            </td>
            <Blocked value={tableData.subtotal} />
          </tr>
          <tr>
            <td title="Include tax Percentage here for calculation" colSpan="4">
              <TextInput
                name={"taxper"}
                value={`Sales Tax (${tableData.taxper}%)`}
                setValue={setTax}
                type="bold"
                color="transparent"
                row={true}
              />
            </td>
            <Blocked value={tableData.taxamt} />
          </tr>
          <tr>
            <td colSpan="4">
              <TextInput
                name={"nettotaltitle"}
                value={tableData.nettotaltitle}
                setValue={rowChange}
                type="bold"
                color="transparent"
              />
            </td>
            <Blocked value={tableData.nettotal} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const extractNum = (data) => {
  var numberPattern = /\d+/g;
  return data.match(numberPattern)?data.match(numberPattern):20;
};

const Blocked = ({ value }) => {
  return (
    <td className="blocked" title="Auto Generated">
      {value ? value.toFixed(2) : "-"}
    </td>
  );
};

export { TextInput, TextAreaInput, Tablecomponent, Blocked, extractNum };
