import { React, useState,useRef } from "react";
import "./home.scss";
import Model from '../../Components/Model/Model';
import PdfLayout from "../../Components/PdfLayout/PdfLayout";
import ReactToPdf from "react-to-pdf";

const Home = () => {

  const ref = useRef(null);

  const [invoices, setInvoices] = useState([
    {
      id: 1,
      title: "invoice1",
    },
    {
      id: 2,
      title: "invoice2",
    },
    {
      id: 3,
      title: "invoice3",
    },
  ])

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
    subtotaltitle: 'SubTotal',
    subtotal: 5000,
    taxamt: 1000,
    taxper: 20,
    nettotaltitle: "total",
    nettotal: 6000,
    tableData: [
      {
        col1: 1,
        col2: "Supporting of in-house project (hours worked)",
        col3: 40,
        col4: 125,
        col5: 5000,
      },
    ],
  });

  return (
    <>
      <div className="home">
        <div className="invoice-body">
          <div className="col-md-3 cardBody ">
            <div className="card invoiceto">
              <h5>Your invoices</h5>
                  {
                    invoices.map((invoice)=>{
                      return <>
                      <p key={invoice.id}>{invoice.title}</p>
                      </>
                    })
                  }
            </div>
            <div className="card invoiceto">
              <h5>invoiceto.me</h5>
              <h5>Edit the template to make invoice →</h5>
            </div>
            <div className="card invoiceto">
              <h5>Generate invoice</h5>

    <ReactToPdf targetRef={ref} x={-12} filename="invoice.pdf">
        {({toPdf}) => (
              <Model generate={toPdf} />
        )}
    </ReactToPdf>
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
          <div className="body-Right" ref={ref}>
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
