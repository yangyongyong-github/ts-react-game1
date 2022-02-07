import React from 'react'
import { ChessType } from '../../types/enum';
import ChessComp from '../ChessComp';
import "./style.css"

interface IProps {
    chesses: ChessType[]
    isGameOver?: boolean
    onClick?: (index: number) => void
}

const BoardComp: React.FC<IProps> = function (props) {
    const isGameOver = props.isGameOver!; // 非空断言 或者 类型断言 as props.isGameOver=Boolean;
    const list = props.chesses.map((type, i) => <ChessComp
        key={i}
        type={type}
        onClick={() => {
            if (props.onClick && !isGameOver) {
                props.onClick(i)
            }
        }}
    />)
    return (
        <div className="board">
            {list}
        </div>
    )
}

BoardComp.defaultProps = {
    isGameOver: false
}

export { BoardComp }