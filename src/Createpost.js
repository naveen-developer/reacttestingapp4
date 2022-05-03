import React, { useState } from "react";
import "./Createpost.css";
import { FileUploader } from "react-drag-drop-files";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

const Createpost = () => {
  const [imagename, setImageName] = useState("");
  const [desc, setDesc] = useState("");

  const postHandler = () => {
    console.log(imagename);
    console.log(desc);
    setImageName("");
    setDesc("");
  };

  const [file, setFile] = useState(null);
  console.log(file);
  const handleChange = (file) => {
    setFile(file);
    setImageName(file.name);
  };
  return (
    <div className="createpost_parentDiv">
      <div className="createpost_childDiv">
        <h1>CreatePost</h1>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <TextField
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          id="outlined-textarea"
          label="Post Description"
          placeholder="Placeholder"
          multiline
        />
        <div className="createpost_button">
          <Button
            onClick={postHandler}
            disabled={!desc || !imagename}
            variant="contained"
          >
            Createpost
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
