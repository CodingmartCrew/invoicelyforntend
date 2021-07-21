import { React, useEffect, useState, useRef } from "react";
import "./home.scss";
import Model from "../../Components/Model/Model";
import PdfLayout from "../../Components/PdfLayout/PdfLayout";
import ReactToPdf from "react-to-pdf";
import axios from "axios";
import { backend_url } from "../../services/url";

const Home = ({ signedIn }) => {
  const ref = useRef(null);

  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [data, setData] = useState({
    companyname: "Your Company Name",
    pdftitle: "INVOICE",
    address1: "123 Your Street",
    address2: "Your Townspos",
    address3: "Address Line 3",
    phno: "(123) 456 789",
    email: "email@yourcompany.com",
    date: "19-July-2021",
    invoiceno: "Invoice #2334889",
    ponumber: "PO 456001200",
    attender: "Att: Ms. Jane Doe",
    clientname: "Client Company Name",
    createdby: localStorage.getItem("invoice_use_data"),
    maincontent: `
        Dear Ms. Jane Doe,
        Please find below a cost-breakdown for the recent work completed. 
        Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.                
        
        Many thanks,
        Your Name`,
    footcontent: `
        Many thanks for your custom! I look forward to doing business with you again in due course.
 
        Payment terms: to be received within 60 days.`,
  });

  const [tableData, setTableData] = useState({
    sno: "#",
    itemdescription: "ItemDescription",
    quantity: "Quantity",
    unitprice: "Unit price (€)",
    total: "Total (€)",
    subtotaltitle: "SubTotal",
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

  const rowHandler = (action) => {
    if (action === "add") {
      setTableData((prev) => {
        let arr = [
          ...prev.tableData,
          {
            col1: prev.tableData.length + 1,
            col2: "",
            col3: "",
            col4: "",
            col5: "",
          },
        ];
        return {
          ...prev,
          tableData: arr,
        };
      });
    } else if (action === "remove" && tableData.tableData.length >= 1) {
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

  const changeInvoice = async (id) => {
    console.log(id);
    setLoadingPdf(true);
    await axios
      .get(`${backend_url}/api/invoice/find/${id}`)
      .then((res) => {
        setLoadingPdf(false);
        setData(res.data);
        setTableData(JSON.parse(res.data.invoice_items));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(localStorage.getItem("invoice_use_data"));
      await axios
        .post(`${backend_url}/api/invoice/findbymail`, {
          createdby: localStorage.getItem("invoice_use_data"),
        })
        .then((res) => {
          setInvoices(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setInvoices(null);
        });
    };
    signedIn && fetchData();
  }, [signedIn]);

  return (
    <>
      <div className="home">
        <div className="invoice-body">
          <div className="col-md-3 cardBody ">
            {signedIn && (
              <div className="text-center card invoiceto">
                <h5>Your invoices</h5>
                {loading
                  ? "Loading..."
                  : invoices?.map((invoice, ind) => {
                      return (
                        <>
                          <p
                            key={ind}
                            onClick={() => changeInvoice(invoice.id)}
                          >
                            {invoice.invoiceno}
                          </p>
                        </>
                      );
                    })}
              </div>
            )}
            <div className="card invoiceto">
              <h5>invoiceto.me</h5>
              <h5>Edit the template to make invoice →</h5>
            </div>
            <div className="card invoiceto">
              <h5>Generate invoice</h5>

              <ReactToPdf
                targetRef={ref}
                scale={0.9}
                x={0}
                filename="invoice.pdf"
              >
                {({ toPdf }) => (
                  <Model
                    signedIn={signedIn}
                    data={data}
                    tableData={tableData}
                    generate={toPdf}
                  />
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
            {loadingPdf ? (
              <p className="text-light h4">Loading Details...Please Wait!!!</p>
            ) : (
              <PdfLayout
                data={data}
                setData={setData}
                tableData={tableData}
                setTableData={setTableData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
