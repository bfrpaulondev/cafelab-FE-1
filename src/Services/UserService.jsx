import CryptoJS from 'crypto-js';

const SECRET_KEY = 'chave-secreta'; // Substitua por sua chave secreta

const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

const encryptAndSaveToLocalStorage = (key, data) => {
    const encryptedData = encryptData(data);
    localStorage.setItem(key, encryptedData);
};

const getDecryptedDataFromLocalStorage = (key) => {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
        return decryptData(encryptedData);
    }
    return null;
};

export { encryptAndSaveToLocalStorage, getDecryptedDataFromLocalStorage };
