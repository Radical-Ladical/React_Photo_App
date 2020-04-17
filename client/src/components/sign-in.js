import React from 'react'


function SignIn() {
    return(
        <React.Fragment>
        <div class ="parent">
            <ul class="children">
                <li>
                    <input class="username"></input>
                </li>
                <li>
                    <input class ="password"></input>
                </li>
                <li>
                    <input class="password1"></input>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default SignIn;