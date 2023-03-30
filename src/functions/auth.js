import CryptoJS from "crypto-js";
const securityPass = "XkhZG4fW2t2W";

export const encryptData = (text) => {
    let data = CryptoJS.AES.encrypt(JSON.stringify(text), securityPass);
    return data.toString();
}

export const descryptData = (text) => {
    let data = CryptoJS.AES.decrypt(text, securityPass);
    return JSON.parse(data.toString(CryptoJS.enc.Utf8));
}

export const password_verify = (email, password) => {
    let auth = JSON.parse(localStorage.getItem('users'));
    if (auth) {
        let user = auth.find((user) => {
            return user.email == email;
        });
        if (user) {
            ;
            if (password === descryptData(user.password)) {
                return { status: true, user };
            } else {
                return { status: false };
            }
        } else {
            return { status: false };
        }
    }else{
        return { status: false };
    }
}
export const checkValidEmail = (email) => {
    let auth = JSON.parse(localStorage.getItem('users'));
    if (auth) {
        let exist_user = auth.filter((user) => user.email === email);
        if (exist_user.length != 0) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}
