import CryptoJS from 'crypto-js';

export default class Crypter {
    constructor(salt) { this.salt = salt; }

    encrypt(text, password) {
        const key = CryptoJS.SHA256(CryptoJS.SHA256(this.salt) + ":" + CryptoJS.SHA256(password))
        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(text, key, { iv, mode: CryptoJS.mode.CBC });
        return iv.toString() + ':' + encrypted.ciphertext.toString();
    }

    decrypt(cipherText, password) {
        const [ivHex, dataHex] = cipherText.split(':');
        const key = CryptoJS.SHA256(CryptoJS.SHA256(this.salt) + ":" + CryptoJS.SHA256(password))
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: CryptoJS.enc.Hex.parse(dataHex) },
            key,
            { iv: CryptoJS.enc.Hex.parse(ivHex), mode: CryptoJS.mode.CBC }
        );
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}