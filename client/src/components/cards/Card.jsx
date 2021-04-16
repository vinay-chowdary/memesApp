import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = (props) => {

    return (
        <Link to={`/memes/${props.id}`}>
            <div className="meme-card flex-column" style={{ "color": "#000" }} >
                <h3 className="meme-name">{props.name}</h3>
                <p className="meme-caption">{props.caption}</p>
                <div>
                    <img src={props.url} alt="not found" />
                </div>

            </div >
        </Link>
    )
}

export default Card
