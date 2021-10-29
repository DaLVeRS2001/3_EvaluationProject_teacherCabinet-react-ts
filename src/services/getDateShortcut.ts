import {TDateShortcut} from "../types/#common";


export const dateShortcut: TDateShortcut = (date, locale, options ) =>
    date?.toLocaleString(locale, options)
