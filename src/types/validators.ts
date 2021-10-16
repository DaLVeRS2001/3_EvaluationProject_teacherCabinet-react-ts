//COMMON
export type TDefaultValid = undefined | string
export type TDefaultValidFunc = (val: string)=> string | undefined

//VALIDATORS TYPES
export type TSymbolsCount = (count: number) => (val: string) => TDefaultValid