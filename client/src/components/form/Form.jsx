import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import './form.css'
import submit from '../../actions/submitFormAction'
import { useDispatch } from 'react-redux'
import editMeme from '../../actions/editMemeAction'



const Form = (props) => {
    const dispatch = useDispatch();
    const [newMeme, setNewMeme] = useState({
        name: "",
        url: "",
        caption: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        let edit = {}
        if (newMeme.name !== "") {
            edit.name = newMeme.name;
        }
        if (newMeme.url !== "") {
            edit.url = newMeme.url;
        }
        if (newMeme.caption !== "") {
            edit.caption = newMeme.caption;
        }
        props.isModal && props.closeOnSubmit()
        props.isModal && props.onClose()
        props.heading ? await dispatch(editMeme(edit, props.id)) : dispatch(submit(newMeme))
        props.isModal && window.location.reload()
        setNewMeme({
            name: "",
            caption: "",
            url: ""
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMeme((prevState) => ({ ...prevState, [name]: value }))
    }
    return (
        <form onSubmit={handleSubmit} className="form flex-column" style={{ "backgroundColor": "#fff" }}>
            <header>
                <h1>{props.heading || "Post Your Meme Here"}</h1>
            </header>

            <div className="name">
                <TextField
                    id="name"
                    className="input"
                    label="Name"
                    variant="outlined"
                    autoComplete="off"
                    value={newMeme.name}
                    required={props.heading ? false : true}
                    name="name"
                    onChange={handleChange}
                    spellCheck={false}
                />

            </div>

            <div className="caption">
                <TextField
                    id="caption"
                    className="input"
                    label="Caption"
                    variant="outlined"
                    autoComplete="off"
                    required={props.heading ? false : true}
                    value={newMeme.caption}

                    onChange={handleChange}
                    name="caption"
                    spellCheck={false}

                />

            </div>
            <div className="image-url">
                <TextField
                    id="url"
                    className="input"
                    label="Image Url"
                    variant="outlined"
                    autoComplete="off"
                    required={props.heading ? false : true}
                    value={newMeme.url}

                    name="url"
                    onChange={handleChange}
                    spellCheck={false}

                />

            </div>
            <Button
                className="submit-button"
                variant="contained"
                color="secondary"
                type="submit"
                startIcon={<SaveOutlinedIcon />}
            >
                {props.heading ? "Done" : "submit"}
            </Button>

        </form>
    )
}

export default Form
