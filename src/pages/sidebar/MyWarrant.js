import React from "react";
import useStyles from "./styles";

import { useWarrantState } from "../../context/WarrantContext";

import MyWarrantCard from "./components/MyWarrantCard";

export default function MyWarrant() {
  const classes = useStyles();
  const { warrantData } = useWarrantState();

  return (
    <>
      <div className={classes.warrantTitle}>나의 보증서</div>
      <div className={classes.warrantBox}>
        {warrantData.length === 0 && (
          <div className={classes.warrnatNoData}>발급된 보증서가 없습니다.</div>
        )}
        {warrantData.length !== 0 &&
          warrantData.map((data, idx) => <MyWarrantCard key={idx} />)}
      </div>
    </>
  );
}
