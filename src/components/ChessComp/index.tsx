import React from 'react'
import { ChessType } from '../../types/enum';
import "./style.css"

interface IProps {
    type: ChessType
    onClick?: () => void
}

export default function index({ type, onClick }: IProps) {
    let chess = null;
    if (type === ChessType.red) {
        chess = <div className="red chess-item"></div>
    }
    else if (type === ChessType.black) {
        chess = <div className="black chess-item"></div>
    }

    return (
        <div className="chess" onClick={() => {
            if (type === ChessType.none && onClick){
                // 如何处理
                onClick();
            }
        }}>
            {chess}
        </div>
    )
}
