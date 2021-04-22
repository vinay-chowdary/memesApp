import React from 'react'
import './card.css'
import Dialog from '@material-ui/core/Dialog';
import CardById from './CardById';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


function CardDialog(props) {
    const { onClose, id, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <>

            <Dialog fullScreen onClose={handleClose} open={open}>
                <div className="close-btn">
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </div>
                <CardById id={id} onClose={props.onClose} />
            </Dialog>
        </>
    );
}

const Card = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

            <div className="meme-card flex-column"
                style={{ "color": "#000" }}
                onClick={handleClick}
            >
                <h3 className="meme-name">{props.name}</h3>
                <p className="meme-caption">{props.caption}</p>
                <div>
                    <img src={props.url} alt="not found" />
                </div>

            </div >
            <CardDialog open={open} onClose={handleClose} id={props.id} />

        </>
    )
}

export default Card
