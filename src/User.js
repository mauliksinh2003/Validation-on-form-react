import { useState } from "react";

function User() {

    const [username, setUserName] = useState("");
    const [userpass, setUserPass] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function getUserData(e) {
        e.preventDefault();
        // console.log(username ,userpass)
    }

    function userNameReq(e) {

        let Item = e.target.value
        if (Item.length < 3) {
            setNameErr(true)
        }
        else {
            setNameErr(false)

        }
        setUserName(e.target.value)
    }

    function userPassReq(e) {
        let Item = e.target.value
        if (Item.length < 3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)

        }
        setUserPass(e.target.value)
    }

    return (

        <div className="User">
            <h1>Sign up form</h1>
            <br ></br>

            <form onSubmit={getUserData}>
                <input type="text" placeholder="Enter username" onChange={userNameReq}></input><br />
                {nameErr ? <span>User not valid</span> : null}
                <br />
                <input type="password" placeholder="Enter password" onChange={userPassReq}></input><br />
                {passErr ? <span>Please enter a valid password</span> : null}
                <br /><br />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default User;