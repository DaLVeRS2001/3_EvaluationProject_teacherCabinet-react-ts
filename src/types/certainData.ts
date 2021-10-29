type _sideItems = { img: string, title: string | null }[]
type _weekDays = ['пон', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
type _months = {
    Jan: 'Янв', Feb: 'Фев', Mar: 'Март', Apr: 'Апр',
    May: 'Май', Jun: 'Июнь', Jul: 'Июль', Aug: 'Авг',
    Sep: 'Сент', Oct: 'Окт', Nov: 'Ноя', Dec: 'Дек'
}
export type certainModel = {
    sideItems: _sideItems,
    weekDays: _weekDays,
    months: _months
}

export interface ICertainData {
   readonly getModel: () => certainModel
}
