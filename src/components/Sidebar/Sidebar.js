import React, { useState, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import {
  Home as HomeIcon,
  FormatSize as TypographyIcon,
  BorderAll as TableIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import SideLayout from "../../pages/sidebar";

// styles
import useStyles from "./styles";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Typography",
    link: "/app/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
];

function Sidebar({ location }) {
  const classes = useStyles();
  const theme = useTheme();

  // global
  const { isSidebarOpened } = useLayoutState();
  const layoutDispatch = useLayoutDispatch();

  // local
  const [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <>
      <div id="sidebar">
        <Drawer
          variant={isPermanent ? "permanent" : "temporary"}
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: isSidebarOpened,
            [classes.drawerClose]: !isSidebarOpened,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: isSidebarOpened,
              [classes.drawerClose]: !isSidebarOpened,
            }),
          }}
          open={isSidebarOpened}
          onClose={(e) => toggleSidebar(layoutDispatch)}
        >
          <div className={classes.headerSpace}></div>
          <SideLayout />
        </Drawer>
      </div>
    </>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
