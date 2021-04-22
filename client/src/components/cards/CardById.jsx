import React from 'react'
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import { useSelector } from "react-redux";
import Form from "../form/Form";

const CardById = (props) => {
    const id = props.id
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const memes = useSelector((state) => state.getMemes);
    const meme = memes.filter((meme) => meme._id === id);
    return (
        <div>
            <div className="individual-meme-card">
                <Button
                    className="edit-button"
                    variant="contained"
                    color="secondary"
                    endIcon={<EditIcon />}
                    type="button"
                    onClick={handleOpen}
                >
                    Edit
        </Button>
                <h3 className="meme-name">{meme[0].name}</h3>
                <p className="meme-caption">{meme[0].caption}</p>
                <img src={meme[0].url} alt="not found" />
                <Modal open={open} onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Form
                        heading="Edit the Meme"
                        id={id}
                        isModal={true}
                        closeOnSubmit={handleClose}
                        onClose={props.onClose}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default CardById
