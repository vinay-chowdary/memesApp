import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getMemes from '../../actions/getMemesAction'
import Card from './Card'
import './card.css'


const Cards = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMemes())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const memes = useSelector(state => state.getMemes)
    return (
        <div className="grid container cards-container">
            {memes.map(
                (meme) => (
                    <Card
                        key={meme._id}
                        id={meme._id}
                        name={meme.name}
                        caption={meme.caption}
                        url={meme.url}
                        getId={props.getId}
                    />)
            )}
        </div>
    )
}

export default Cards
