import Box from "@mui/material/Box";
import UserComponent from "./UserComponent";
import axios from "axios";
import ProjectsComponent from "./ProjectsComponent";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

const MainComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${
      localStorage.getItem("userData") &&
      JSON.parse(localStorage.getItem("userData")).token
    }`;

    axios
      .get("https://private-052d6-testapi4528.apiary-mock.com/info")
      .then((response) => setData(response.data));
  }, []);

  return (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              width: "80%",
              padding: "3rem",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {data && <ProjectsComponent data={data} />}

            {localStorage.getItem("userData") && (
              <UserComponent
                data={
                  JSON.parse(localStorage.getItem("userData")).personalDetails
                }
              />
            )}
          </Paper>
        </Box>
  );
};

export default MainComponent;
