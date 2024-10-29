// src/lib/crypto.js
import CryptoJS from 'crypto-js';

const SECRET_KEY = "asw2@Ssfft"; // Ganti dengan kunci rahasia Anda

// Fungsi untuk enkripsi
export function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

// Fungsi untuk dekripsi
export function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
