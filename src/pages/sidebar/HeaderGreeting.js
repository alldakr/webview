import React, { useState } from "react";
import useStyles from "./styles";
import { ReactComponent as Wallet } from "../../images/wallet.svg";

export default function HeaderGreeting() {
  const classes = useStyles();
  const [walletAddr, setWalletAddr] = useState("");

  const walletYn = () => {
    if (walletAddr) {
      setWalletAddr("");
    } else {
      setWalletAddr("0x804F41582f06fd8c54F86…");
    }
  };
  return (
    <>
      <div className={classes.headerGreeting}>
        Welcome
        <br />
        안녕하세요 권혁진 고객님
      </div>
      <div className={classes.walletBox}>
        <div className={classes.walletText}>
          <Wallet />
          <span style={{ marginLeft: 4 }}>My Wallet</span>
        </div>
        <div className={classes.walletButton}>
          {walletAddr ? (
            <div className={classes.walletAddress}>{walletAddr}</div>
          ) : (
            <button className={classes.walletBtn} onClick={walletYn}>
              지갑 생성
            </button>
          )}
        </div>
      </div>
    </>
  );
}
