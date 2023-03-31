import React from "react";
import { Typography, Divider } from "@mui/material";
import "./styleDisplayTask.css";

{
  /*taskData */
}

const PrintTaskDetails = (props) => {
  return (
    <div id="displayTask">
      <Typography className="heading" variant="h3" id="title" gutterBottom>
        Task Description
      </Typography>
      <Divider  />
      {props.taskData.map((element) => {
        return (
          <div>
            <Typography className="heading" variant="h6" gutterBottom>
              {element.sno}. {element.des}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default PrintTaskDetails;
