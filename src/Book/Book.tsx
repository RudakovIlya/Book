import React, {ReactNode} from "react";

export type BookPropsType = {
    name: string
    year: number
    price: number
    children?: ReactNode
}

export const Book: React.FC<BookPropsType> = ({name, price, year, children}) => {
    return (
        <div className={'book-container'} aria-hidden={true}>
            <h2>Название: {name}</h2>
            <p>Цена: {price}</p>
            <p>Год выпуска: {year}</p>
            <p>{children ? <span>{children}</span> : ''}</p>
        </div>
    )
}