import React from 'react'

function App() {
    return (
        <form method="post" action="http://localhost:8081/memes">
            <input type="text" name="name" />
            <br></br>
            <input type="text" name="caption" />
            <br></br>

            <input type="text" name="url" />
            <br></br>

            <button type="submit">submit</button>
        </form>
    )
}

export default App

