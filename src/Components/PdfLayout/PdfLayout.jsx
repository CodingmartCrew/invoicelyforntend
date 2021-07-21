import { React } from "react";
import "./layout.scss";
import { TextInput, TextAreaInput, Tablecomponent } from "../inputboxes/inputs";
import { Row, Col, Container } from "react-bootstrap";

const PdfLayout = ({  data, setData, tableData, setTableData }) => {

  return (
    <div  id="pdf" className="pdf">
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
            <Col xs={6}>
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
            <Col xs={6}>
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
            <Col xs={6}>
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
                type="default"
                Tablecomponent
              />
            </Col>
          </Row>
          <br />
          <Row className="m-0">
            <Col xs={6}>
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
            <Col xs={6}>
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
          <hr />
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
                tableData={tableData}
                setTableData={setTableData}
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
