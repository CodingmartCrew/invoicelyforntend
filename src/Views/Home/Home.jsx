import { React, useState } from "react";
import "./home.scss";
import Button from "@material-ui/core/Button";
import PdfLayout from "../../Components/PdfLayout/PdfLayout";

const Home = () => {

  const rowHandler = (action) => {
    if (action === "add") {
      setTableData((prev) => {
        let arr = [...prev.tableData,
          {
            col1: prev.tableData.length+1,
            col2: "",
            col3: "",
            col4: "",
            col5: "",
          }
        ];
        return {
          ...prev,
          tableData: arr,
        };
      });
    } else if (action === "remove" && tableData.tableData.length  >= 1) {
      setTableData((prev) => {
        let arr = [...prev.tableData];
        arr.pop();
        return {
          ...prev,
          tableData: arr,
        };
      });
    }
  };

  const [tableData, setTableData] = useState({
    sno: "#",
    itemdescription: "ItemDescription",
    quantity: "Quantity",
    unitprice: "Unit price (€)",
    total: "Total (€)",
    tableData: [
      {
        col1: 1,
        col2: "Supporting of in-house project (hours worked)",
        col3: "40",
        col4: "125.00",
        col5: "5000.00",
      },
      {
        col1: 2,
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        col1: 3,
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        col1: 4,
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        col1: 5,
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
    ],
  });



  return (
    <>
      <div className="home">
        <div className="invoice-body">
          <div className="col-md-3 cardBody ">
            <div className="card invoiceto">
              <h5>invoiceto.me</h5>
              <br />
              <h5>Edit the template to make invoice →</h5>
            </div>
            <div className="card invoiceto">
              <h5>Generate invoice</h5>
              <br />
              <Button variant="outlined" className="generate">
                Get PDF
              </Button>
            </div>
            <div className="card invoiceto">
              <h5>Resize table</h5>
              <div className="mx-2">
                <p
                  onClick={() => {
                    rowHandler("add");
                  }}
                >
                  {" "}
                  + &nbsp;Add row
                </p>
                <p
                  onClick={() => {
                    rowHandler("remove");
                  }}
                >
                  {" "}
                  - &nbsp;Delete row
                </p>
              </div>
            </div>
          </div>
          <div className="body-Right">
            <PdfLayout 
            tableData={tableData} 
            setTableData={setTableData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
