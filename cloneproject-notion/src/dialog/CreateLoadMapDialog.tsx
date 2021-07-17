import React, { FC, useCallback } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./DialogModule.css";
import { Theme, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AndroidIcon from "@material-ui/icons/Android";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Editor from "@monaco-editor/react";

const DialogWithStyle = withStyles((Theme) => ({
  root: {
    width: "100% !important",
    "& .MuiDialog-container": {
      height: 800,
    },
    "& .MuiDialog-paper": {
      width: 700,
      maxWidth: 700,
      height: 800,
    },
  },
}))(Dialog);

interface IPCreateLoadMapDialogProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateLoadMapDialog: FC<IPCreateLoadMapDialogProps> = ({
  setOpen,
}: IPCreateLoadMapDialogProps) => {
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState("java");
  const [editvalue, setEditValue] = React.useState("//start! coding!!");

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setType(e.target.value);
    setEditValue("");
    console.log(editvalue);
  }, []);

  const handleChangeEditor = useCallback((e) => {
    setEditValue(e.target.value);
  }, []);

  return (
    <div>
      <DialogWithStyle
        className="dialog-full"
        aria-labelledby="simple-dialog-title"
        open={true}
        onClose={handleClose}
      >
        <DialogTitle>
          <TextField
            className="title-textfield"
            id="dialog-name"
            placeholder="제목 없음"
            value={value}
            onChange={handleChange}
          ></TextField>
        </DialogTitle>
        <DialogContent>
          <div className="dialog-content">
            <div className="side-tabs">
              <div className="side-tab">
                <AndroidIcon />
                <div className="tab-title"> 언어 유형</div>
              </div>
            </div>
            <div>
              <Select
                className="type-select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleTypeChange}
              >
                <MenuItem value={"java"}>JAVA</MenuItem>
                <MenuItem value={"javascript"}>JAVA SCRIPT</MenuItem>
                <MenuItem value={"c++"}>C++</MenuItem>
                <MenuItem value={"sql"}>SQL</MenuItem>
                <MenuItem value={"python"}>python</MenuItem>
              </Select>
            </div>
          </div>

          <Editor
            height="600px"
            language={type}
            defaultLanguage="java"
            value={editvalue}
            defaultValue="//start coding!"
          />
          {/* //모나코 에디터 자리  */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={handleClose} color="primary">
            Apply
          </Button>
        </DialogActions>
      </DialogWithStyle>
    </div>
  );
};

export default CreateLoadMapDialog;
