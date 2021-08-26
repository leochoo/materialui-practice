import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          "aria-label": "secondary checkbox",
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup
          variant="contained"
          size="large"
          // style={{ fontSize: 24 }}
        >
          <Button
            color="primary"
            startIcon={<SaveIcon />}
            // onClick={() => alert("Hello")}
            // endIcon={<SaveIcon />}
          >
            SAVE
          </Button>
          <Button color="secondary" startIcon={<DeleteIcon />}>
            DISCARD
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
