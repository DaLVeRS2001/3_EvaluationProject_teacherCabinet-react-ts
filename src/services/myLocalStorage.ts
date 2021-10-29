import {ILocalStorage} from "../types/localStorage";

const myLocalStorage: Readonly<ILocalStorage> = {
    setCurrentDate(date){
        localStorage.setItem('currentDate', JSON.stringify(date))
    },
    getCurrentDate(){
        return localStorage.getItem('currentDate')
    },
    removeCurrentDate(){
        localStorage.removeItem('currentDate')
    }
}

export default myLocalStorage