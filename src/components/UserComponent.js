import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const UserComponent = ({data}) => {
  return (
      <Card>
        <Box sx={{ display: "flex" }}>
          <Box>
            <CardContent>
              <img src={data.avatar} />
            </CardContent>
            <CardContent>Name: {data.name}</CardContent>
            <CardContent>Team: {data.Team}</CardContent>
            <CardContent>Joined at: {data.joinedAt}</CardContent>
          </Box>
        </Box>
      </Card>
  );
}

export default UserComponent;