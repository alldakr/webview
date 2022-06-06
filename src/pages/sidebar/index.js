import React, { useState } from "react";
import useStyles from "./styles";
import img1 from "../../images/img1.png";
import { ReactComponent as Wallet } from "../../images/wallet.svg";
import HeaderGreeting from "./HeaderGreeting";
import MyWarrant from "./MyWarrant";
import BuyHistory from "./BuyHistory";

export default function SideLayout() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <HeaderGreeting />
        <div className={classes.divider} />
        <MyWarrant />
        <div className={classes.divider} />
        <BuyHistory />
      </div>
    </>
  );
}
