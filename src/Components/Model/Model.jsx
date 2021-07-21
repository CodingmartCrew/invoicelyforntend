import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./model.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { backend_url } from "../../services/url";

export default function Model({ data, tableData,signedIn,generate }) {
  const [open, setOpen] = React.useState(false);
  let history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const save = async () => {
    let details = {
      ...data,
      invoice_items: JSON.stringify(tableData),
    };
     await axios
      .post(`${backend_url}/api/invoice/save`, details)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // setError("Invalid email/password");
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="model">
      <Button className="generate" onClick={handleClickOpen}>
        Generate Pdf
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Want to save your invoices? "}
          <span className="closeButton" onClick={handleClose}>
            x
          </span>
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            By signing in save unlimited online invoices for your later needs...
            It's completely free
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              history.push("/signup");
            }}
            color="primary"
          >
            Sigin for free
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              generate()
              signedIn && save();
            }}
            color="secondary"
            autoFocus
          >
            Download PDF Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
