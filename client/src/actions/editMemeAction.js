const editMeme = (editMeme, id) => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8081/memes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(editMeme)
        });
        const data = await response.json()
        console.log(data);
        if (response.status !== 200) {
            dispatch({
                type: 'ON_ERROR',
                payload: data.message
            })
        } else {
            dispatch({
                type: 'ON_SUCCESS',
                payload: data
            })

            //add to ui
            dispatch({
                type: 'MODIFY_MEME',
            })
        }
    }
    catch (err) {
        console.log(err);
    }

}

export default editMeme;