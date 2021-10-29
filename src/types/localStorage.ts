export interface ILocalStorage {
    setCurrentDate: (date: Date) => void,
    getCurrentDate: () => string | null
    removeCurrentDate: () => void
}


