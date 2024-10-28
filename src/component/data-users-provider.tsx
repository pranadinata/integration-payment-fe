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
  otp: string; // Store OTP here
  saldo: string;
  top_up_type: string;
};

type Users = {
  data: UserData;
  setNoTelp: (no_telp: string) => void;
  setOtpUsers: (otp: string) => void; 
  setDetailData: (data: any) => void;
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
    otp: '', // Initialize OTP here
    saldo: '',
    top_up_type: '',
  },
  setNoTelp: () => {},
  setOtpUsers: () => {},
  setDetailData: () => {},

};

// Create Context
const UsersContext = createContext<Users>(defaultUsers);

// Provider Component
export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(defaultUsers.data);

  // Update OTP only
  const setNoTelp = (no_telp: string) => {
    setUserData((prevData) => ({ ...prevData, no_telp }));
  };
  // Update OTP only
  const setOtpUsers = (otp: string) => {
    setUserData((prevData) => ({ ...prevData, otp }));
  };

  const setDetailData = (data: any) => {
    setUserData((prevData) => ({ ...prevData, nama: data.nama, email: data.email, tanggal_lahir: data.tanggal_lahir ,tempat_lahir: data.tempat_lahir}));
  };

  return (
    <UsersContext.Provider value={{ data: userData, setNoTelp, setOtpUsers , setDetailData}}>
      {children}
    </UsersContext.Provider>
  );
};

// Custom Hook to use the Users Context
export const useUsers = () => useContext(UsersContext);
