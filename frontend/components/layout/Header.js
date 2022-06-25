import { useContext } from "react";
import styles from "./Header.module.scss";
import btn from "../../styles/button.module.scss";
import Link from "next/link";
import { utils } from "ethers";
import Image from "next/image";
import { Web3Context } from "../../contexts/Web3Context";
import { shortenWalletAddress } from "../Helper/Utils";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  const { wallet, provider, connect, connectTo, disconnect } =
    useContext(Web3Context);

  return (
    <div className={styles.header}>
      <div>
        <div className={styles.header__title}>
          {/* <div className={styles.header__logo}>
          <Image src={logo} alt="Tuks logo" width={68} height={50} />
        </div> */}
          <Link href="./">
            <p className={styles.header__logoText}>TUKS</p>
          </Link>
        </div>
      </div>
      <div className={styles.header__nav}>
        <NavBar />
        <div className={styles.account}>
          {wallet ? (
            <button
              className={`${btn.btn} ${btn.btn__cursor} ${btn.btn__animated}`}
            >
              {shortenWalletAddress(wallet.address, 6)}
            </button>
          ) : (
            ""
          )}
          <div className={styles.header__connect}>
            {!wallet ? (
              <button
                onClick={connect}
                className={`${btn.btn} ${btn.btn__animated} ${styles.header__btn} `}
              >
                <img
                  className={styles.header__icon}
                  src="./wallet.png"
                  alt="icon"
                />
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button
                onClick={disconnect}
                className={`${btn.btn} ${styles.header__btn}`}
              >
                <img
                  className={styles.header__icon}
                  src="./wallet.png"
                  alt="icon"
                />
                <span>Disconnect</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
