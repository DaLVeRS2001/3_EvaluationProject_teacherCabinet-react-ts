import {TGetRandomColor} from "../types/#common";

export const getRandomColor: TGetRandomColor = (colors) => {
    if(colors.find((el: string)=> el[0] !== '#')) throw new Error(
        'One of the colors is not correct". Color should starts with: "#". Dir: service > getRandomColor.tsx'
    )
    const randomIdx = Math.floor(Math.random() * colors.length)
    return colors[randomIdx]
}

