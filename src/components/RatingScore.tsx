import styles from "../styles/TetrisGamePage.module.css";
import React from "react";


interface RatingScoreProps {
    score: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const RatingScore: React.FC<RatingScoreProps> = ({ score ,onClick}) =>{
    return (
        <div className={styles.starRating} onClick={onClick}>
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {
                        i <= score
                            ? "★"
                            : "☆"
                        }
                  </span>
            ))}
        </div>
    );
};


export default RatingScore;