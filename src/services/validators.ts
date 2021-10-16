import {TDefaultValid, TSymbolsCount} from "../types/validators";

export const isRequired = (val: string) => {
        if (val.length === 0) return 'Обезательное поле'
        return undefined
    },
    isMax: TSymbolsCount = (count) => (val) => {
        if (val.length > count) return `Превышен лимит в ${count} символов`
        return undefined
    }