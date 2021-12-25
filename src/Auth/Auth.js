import React from 'react'

const Auth = () => {
    return (
        <>
        <div className="auth">
            <h2>Login</h2>
            <input type="text" name='username'></input>
            <input type="password" name='password'></input>
            <button>Login</button>
        </div>
    </>
    )

}

export default Auth
