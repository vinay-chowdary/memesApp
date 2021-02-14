const getMemeById = (id) => {
    return {
        type: 'GET_MEME_BY_ID',
        payload: id
    }
}

export default getMemeById;