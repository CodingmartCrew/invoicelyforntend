import { React, useState } from "react";
import "./layout.scss";
import { TextInput, TextAreaInput,Tablecomponent } from "../inputboxes/inputs";
import { Row, Col, Container } from "react-bootstrap";

const PdfLayout = ({ tableData,setTableData }) => {
  
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

  return (
    <div className="pdf">
        <div className="container ">
      <Container className="pdf-container p-5">
        <Row className="mx-0 my-2">
          <Col xs={6}>
            <TextInput
              side="left"
              name="companyname"
              value={data.companyname}
              setValue={setData}
              type="title"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              side="right"
              name="pdftitle"
              value={data.pdftitle}
              setValue={setData}
              type="title"
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={6} >
            <TextInput
              name="address1"
              value={data.address1}
              setValue={setData}
              type="default"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              side="right"
              name="date"
              value={data.date}
              setValue={setData}
              type="default"
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={6} >
            <TextInput
              name="address2"
              value={data.address2}
              setValue={setData}
              type="default"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              side="right"
              name="invoiceno"
              value={data.invoiceno}
              setValue={setData}
              type="default"
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={6} >
            <TextInput
              name="address3"
              value={data.address3}
              setValue={setData}
              type="default"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              side="right"
              name="ponumber"
              value={data.ponumber}
              setValue={setData}
              type="default"Tablecomponent
            />
          </Col>
        </Row>
        <br />
        <Row className="m-0">
          <Col xs={6} >
            <TextInput
              name="phno"
              value={data.phno}
              setValue={setData}
              type="default"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              side="right"
              name="attender"
              value={data.attender}
              setValue={setData}
              type="bold"
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={6} >
            <TextInput
              name="email"
              value={data.email}
              setValue={setData}
              type="default"
            />
          </Col>
          <Col xs={6}>
            <TextInput
              side="right"
              name="clientname"
              value={data.clientname}
              setValue={setData}
              type="bold"
            />
          </Col>
        </Row>
        <hr/>
        <Row>
            <TextAreaInput 
              name="maincontent"
              value={data.maincontent}
              setValue={setData}
            />
        </Row>
        <Row>
           <div className="tablecomp">
                <Tablecomponent
                  data={tableData}
                  setData={setTableData}
                />
            </div>
        </Row>
        <Row>
            <TextAreaInput 
              name="footcontent"
              value={data.footcontent}
              setValue={setData}
            />
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default PdfLayout;