import React, { useState } from "react";
import useStyles from "../styles";
import img1 from "../../../images/img1.png";
import WarrantDetailModal from "./WarrantDetailModal";

export default function MyWarrantCard() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={classes.warrantCard} onClick={handleModalOpen}>
        <img className={classes.cardImg} src={img1} alt="" />
        <div className={classes.cardTextBox}>
          <div className={classes.cardTitle}>보테가베네타</div>
          <div className={classes.cardDesc}>22SS 여성 인트레치 아토</div>
        </div>
      </div>
      {modalOpen && (
        <WarrantDetailModal open={modalOpen} close={handleModalClose} />
      )}
    </>
  );
}
