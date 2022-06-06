import React, { useState } from "react";
import useStyles from "../styles";
import img1 from "../../../images/img1.png";
import {
  useWarrantState,
  useWarrantDispatch,
  setMyWarrant,
} from "../../../context/WarrantContext";
import {
  useBuyHistState,
  useBuyHistDispatch,
  setBuyHist,
} from "../../../context/BuyHistContext";

export default function BuyHistCard({ data, id }) {
  const classes = useStyles();
  const warrantDispatch = useWarrantDispatch();
  const buyHistDispatch = useBuyHistDispatch();

  const issueWarrant = (data) => {
    setMyWarrant(warrantDispatch, data);
    setBuyHist(buyHistDispatch, data);
  };
  return (
    <>
      <div
        className={classes.buyHistCard}
        style={{ opacity: data.issued ? 0.5 : 1 }}
      >
        <img className={classes.buyHistImg} src={img1} alt="" />
        <button
          className={classes.buyHistBtn}
          onClick={() => issueWarrant(data)}
        >
          {data.issued ? "발급 완료" : "보증서 발급"}
        </button>
      </div>
    </>
  );
}
