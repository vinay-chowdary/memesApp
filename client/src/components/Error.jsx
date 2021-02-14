import { useSelector, useDispatch } from 'react-redux'
const Error = () => {
    const dispatch = useDispatch()
    const error = useSelector(state => state.submit)
    if (error.message !== "") {
        setTimeout(() => {
            dispatch({
                type: 'SET_TO_DEFAULT'
            })
        }, 2000);
    }
    return (
        <>
            {error.status ? <div id="error">
                <p className="error-message">
                    {error.message}
                </p>
            </div>
                :
                <div id="success">
                    <p className="error-message">
                        {error.message}
                    </p>
                </div>

            }
        </>
    )
}

export default Error
