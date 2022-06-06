import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

// styles

import Image from "../../images/main-bg.png";

export default function Dashboard(props) {
  // local
  var [mainChartState, setMainChartState] = useState("monthly");
  return (
    <>
      <Grid container spacing={4}>
        <Grid item sx={12}>
          <img
            src={Image}
            alt=""
            style={{ height: "100vh", margin: "0 auto", top: 0 }}
          />
        </Grid>
      </Grid>
    </>
  );
}
