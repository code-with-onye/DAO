import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Admin from "./Admin";

const index = () => {
  return (
    <div>
      <button onclick={connectWallet}>Connect wallet</button>

      <Admin />
    </div>
  );
};

export default index;
