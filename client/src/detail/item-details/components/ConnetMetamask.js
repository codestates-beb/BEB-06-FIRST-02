const ConnectMetamask = () => {
  if (typeof window.ethereum !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    console.log("MetaMask should installed!");
  }
};

export default ConnectMetamask;
