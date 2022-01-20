import { useEffect, useMemo, useState } from "react";

// import thirdweb
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)

  // If user hasn't connected their wallet
  // to web app. Call connectWallet
  if (!address) {
    return (
      <div className="landing">
        <h1>Crypto/DeFi DAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }
  
  // If users wallet is connected
  // Show welcome message
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
};

export default App;