const submitForm = (newMeme) => async (dispatch) => {

    //add to database

    const response = await fetch('/api/memes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeme)
    })
    const data = await response.json()
    const _id = data.id
    if (response.status !== 201) {
        dispatch({
            type: 'ON_ERROR',
            payload: data.message
        })
    } else {
        dispatch({
            type: 'ON_SUCCESS',
            payload: data.message
        })

        //add to ui
        dispatch({
            type: 'ADD_NEW_MEME',
            payload: { _id, ...newMeme }
        })
    }


}

export default submitForm;