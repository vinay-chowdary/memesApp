const submitForm = (newMeme) => async (dispatch) => {

    //add to database

    const response = await fetch('http://localhost:8081/memes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newMeme)
    })
    const data = await response.json()
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
            payload: newMeme
        })
    }


}

export default submitForm;