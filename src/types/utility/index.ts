
type _ParsedNull<T> = {[K in keyof T]: T[K] extends  null | undefined ? never : K}[keyof T]
export type ObjNonNullable<T> = {
    [K in _ParsedNull<T>]: T[K]
}

