import { createContext } from "react";

const initialState = {
  address: "",
  isConnected: false,
  setAddress: (address: string) => {
    address = address;
  },
  setIsConnected: (isConnected: boolean) => {
    isConnected = isConnected;
  },
};

const AccountContext = createContext(initialState);

export default AccountContext;
