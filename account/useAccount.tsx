import { useContext } from "react";
import WalletContext from "./AccountContext";

const useAccount = () => {
  const { address, isConnected, setAddress, setIsConnected } =
    useContext(WalletContext);

  const login = (address: string) => {
    setAddress(address);
    setIsConnected(true);
  };

  const logout = () => {
    setAddress("");
    setIsConnected(false);
  };

  return { address, isConnected, logout, login };
};

export default useAccount;
