/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createContext, useContext, useState } from "react";

type UserData = {
  no_telp: string;
  nama: string;
  tanggal_lahir: string;
  tempat_lahir: string;
  email: string;
  pin: string;
  otp: string; 
  saldo: number;
  state_saldo: number;
  top_up_type: string;
  state_top_up_type: string;
};

type Users = {
  data: UserData;
  setNoTelp: (no_telp: string) => void;
  setOtpUsers: (otp: string) => void; 
  setDetailData: (data: any) => void;
  setPinUsers: (pin: string) => void;
  setStateSaldo: (state_saldo: number) => void;
  setSaldo: (saldo: number) => void;
  setTopUpType: (top_up_type: string) => void;
  setStateTopUpType: (state_top_up_type: string) => void;

};

// Default user data
const defaultUsers = {
  data: {
    no_telp: '',
    nama: '',
    tanggal_lahir: '',
    tempat_lahir: '',
    email: '',
    pin: '',
    otp: '', 
    saldo: 0,
    state_saldo: 0,
    top_up_type: '',
    state_top_up_type: '',

  },
  setNoTelp: () => {},
  setOtpUsers: () => {},
  setDetailData: () => {},
  setPinUsers: () => {},
  setStateSaldo: () => {},
  setSaldo: () => {},
  setTopUpType: () => {},
  setStateTopUpType: () => {},
};

// Create Context
const UsersContext = createContext<Users>(defaultUsers);

// Provider Component
export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(defaultUsers.data);

  const setNoTelp = (no_telp: string) => {
    setUserData((prevData) => ({ ...prevData, no_telp }));
  };
  
  const setOtpUsers = (otp: string) => {
    setUserData((prevData) => ({ ...prevData, otp }));
  };

  const setDetailData = (data: any) => {
    setUserData((prevData) => ({ ...prevData, nama: data.nama, email: data.email, tanggal_lahir: data.tanggal_lahir ,tempat_lahir: data.tempat_lahir}));
  };
  const setPinUsers = (pin: string) => {
    setUserData((prevData) => ({ ...prevData, pin: pin }));
  };

  const setStateSaldo = (state_saldo: number) => {
    setUserData((prevData) => ({ ...prevData, state_saldo: state_saldo }));
  };

  const setSaldo = (saldo: number) => {
    setUserData((prevData) => ({ ...prevData, saldo: saldo }));
  };

  const setTopUpType = (top_up_type: string) => {
    setUserData((prevData) => ({ ...prevData, top_up_type: top_up_type }));
  };

  const setStateTopUpType = (state_top_up_type: string) => {
    setUserData((prevData) => ({ ...prevData, state_top_up_type: state_top_up_type }));
  };

  return (
    <UsersContext.Provider value={{ data: userData, setNoTelp, setOtpUsers , setDetailData, setPinUsers, setStateSaldo, setSaldo, setTopUpType, setStateTopUpType}}>
      {children}
    </UsersContext.Provider>
  );
};

// Custom Hook to use the Users Context
export const useUsers = () => useContext(UsersContext);
