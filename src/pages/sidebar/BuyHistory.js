import React, { useState } from "react";
import useStyles from "./styles";
import BuyHistCard from "./components/BuyHistCard";
import { useBuyHistState } from "../../context/BuyHistContext";

export default function BuyHistory() {
  const classes = useStyles();
  const { buyHistData } = useBuyHistState();
  return (
    <>
      <div className={classes.buyHistTitle}>구매 이력</div>
      <div className={classes.buyHistBox}>
        <div className={classes.buyHistCardBox}>
          {buyHistData.map((data, idx) => (
            <BuyHistCard data={data} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}
