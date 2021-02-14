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
    const handleSubmit = (e) => {
        e.preventDefault();
        let edit = {}
        if (newMeme.name !== "") {
            edit.name = newMeme.name;
        }
        if (newMeme.url !== "") {
            edit.url = newMeme.url;
        }
        if (newMeme.caption !== "") {
            editMeme.caption = newMeme.caption;
        }
        props.heading ? dispatch(editMeme(edit, props.id)) : dispatch(submit(newMeme))
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
