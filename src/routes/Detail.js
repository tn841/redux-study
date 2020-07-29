import React, { useState } from 'react';

function Home(){
    const [text, settext] = useState("") //hooks

    function onChange(e) {
        settext(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
        settext("")
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button onClick={onsubmit}> submit</button>
            </form>
            <ul>

            </ul>
        </>
    )
}

export default Home;

