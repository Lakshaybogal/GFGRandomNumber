import React from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./styleDisplayTask.css";

const PrintTaskDetails = (props) => {
  return (
    <div id="displayTask">
      <Typography className="heading" variant="h4" id="title" gutterBottom>
        Task Description
      </Typography>

      {props.taskData.map((element) => {
        return (
          <div className="task">
            <Accordion style={{
        borderRadius:"0",
      }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Task {element.sno}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{
                borderRadius: "0",
              }}>
                <Typography>{element.des}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};


export default PrintTaskDetails;
