import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const ProjectsComponent = ({ data }) => {
  function createData(
    id,
    name,
    score,
    madeDadeline,
    durationInDays,
    bugsCount
  ) {
    return { id, name, score, madeDadeline, durationInDays, bugsCount };
  }

  const rows = [];

  data.forEach((elem) => {
    rows.push(
      createData(
        elem.id,
        elem.name,
        elem.score,
        elem.madeDadeline,
        elem.durationInDays,
        elem.bugsCount
      )
    );
  });

  const rowColor = (score) => {
        if(score <= 70){
            return "red"
        } else if(score >= 90){
            return "green"
        }
  }

  return (
      
      <Paper sx={{ maxHeight: "40rem", overflow: "auto" }}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Score</TableCell>
                <TableCell align="right">Made Dadeline</TableCell>
                <TableCell align="right">Duration In Days</TableCell>
                <TableCell align="right">Bugs Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }, backgroundColor: rowColor(row.score) }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                  <TableCell align="right">
                    {row.madeDadeline.toString()}
                  </TableCell>
                  <TableCell align="right">{row.durationInDays}</TableCell>
                  <TableCell align="right">{row.bugsCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
  );
};

export default ProjectsComponent;
