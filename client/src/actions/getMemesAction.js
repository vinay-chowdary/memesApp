const getMemes = () => async dispatch => {
    const response = await fetch('https://memes-gallery-api.herokuapp.com/memes')
    const data = await response.json()
    if (response.status !== 200) {
        dispatch({
            type: 'ON_ERROR',
            payload: data.message
        })
    } else {
        dispatch({
            type: 'GET_MEMES',
            payload: data
        })
    }
}

export default getMemes;