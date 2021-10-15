type _sideItems = { img: string, title: string | null }[]
type _weekDays = ['пон', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
type _months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
export type certainModel = {
    sideItems: _sideItems,
    weekDays: _weekDays,
    months: _months
}

export interface ICertainData {
   readonly getModel: () => certainModel
}
