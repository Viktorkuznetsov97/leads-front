import styled from "@emotion/styled";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

import ProgressTracker from "../UI/ProgressTracker";
import EditState from "./EditState";
import DeleteIcon from "@mui/icons-material/Delete";

const StartCardWrapper = styled.div`
  .zones-count {
    background: blue;
    border-radius: 50%;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
  }

  table thead * {
    font-weight: 700;
  }

  table th,
  table td,
  table span {
    border: none;
    font-size: 12px;
  }
`;

const StateCard = ({ state, deleteState, setUpdateStates }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    if (!state.zones.length) return;
    setExpanded(!expanded);
  };

  return (
    <StartCardWrapper>
      <Box
        bgcolor="#fff"
        borderRadius="20px"
        paddingBottom="20px"
        onClick={handleExpandClick}
        style={{ cursor: state?.zones.length ? "pointer" : "default" }}
      >
        <Box padding="20px 16px 0">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="15px"
          >
            <Typography variant="h5" fontWeight="700">
              {state.name}
            </Typography>
            <Box onClick={(e) => e.stopPropagation()}>
              <EditState state={state} setUpdateStates={setUpdateStates} />
              <IconButton onClick={() => deleteState(state._id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
          <Typography>
            Zones: <span className="zones-count">{state.zones?.length}</span>
          </Typography>
          <Typography marginBottom="10px">
            leads: {state.leads_count}/{state.plan}
          </Typography>
          <ProgressTracker leads={state.leads_count} target={state.plan} />
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Zone</TableCell>
                <TableCell>Leads</TableCell>
                <TableCell>Present</TableCell>
                <TableCell>ZIPs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.zones?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {row.leads_count}/{row.plan}
                  </TableCell>
                  <TableCell>
                    {Math.round(row.leads_count / (row.plan / 100))}%
                  </TableCell>
                  {row.zip_codes[0] && (
                    <TableCell>
                      <Tooltip
                        placement="top"
                        title={row.zip_codes.map((item, index) => (
                          <span>
                            {index ? "," : ""}
                            {item}
                          </span>
                        ))}
                      >
                        {row.zip_codes[0]}
                        {row.zip_codes.length > 1 ? "..." : ""}
                      </Tooltip>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </Box>
    </StartCardWrapper>
  );
};

export default StateCard;
