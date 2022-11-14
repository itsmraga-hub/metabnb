import React from "react";
import style from "./css/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { BiChevronRight } from "react-icons/bi";

import Metamask from '../assets/metamask-yellow.svg';
import WalletConnect from '../assets/walletconnect.svg';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={style.darkBG} onClick={() => setIsOpen(false)} >
        <div className={style.centered}>
          <div className={style.modal}>
            <div className={style.header}>
              <h2>Connect Wallet</h2>
              <button className={style.closeBtn} onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{width: '30px', height: '30px'}} />
              </button>
            </div>
            <div className={style.Body}>
              <p>Choose your preferred wallet:</p>
              <button>
                <img src={Metamask} alt="metamask" />
                <BiChevronRight style={{width: '30px', height: '30px'}} />
              </button>
              <button>
                <img src={WalletConnect} alt="Wallet connect" />
                <BiChevronRight style={{width: '30px', height: '30px'}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;