import React, { useRef, useState } from 'react'
import './UserDetail.css'

const UserDetail = () => {
    const [user, setUser] = useState(false)
    const [email, setEmail] = useState(false)
    const [pass, setPass] = useState(false)
    const userUpdate = useRef()
    const emailUpdate = useRef()
    const passUpdate = useRef()


    const handleEditUserName = () => {
        setUser(true)
    }

    const handleEditEmail = () => {
        setEmail(true)
    }

    const handleEditPassword = () => {
        setPass(true)
    }
    const updateUser = () => {
        localStorage.setItem("username", userUpdate.current.value)

    }
    const updateEmail = () => {
        localStorage.setItem("email", emailUpdate.current.value)
        setEmail(false)
    }
    const updatePassword = () => {
        localStorage.setItem("password", passUpdate.current.value)
        setPass(false)
    }
    return (
        <>
            {user && <div className="pop-up">

                <label htmlFor="username">Username</label>
                <input type="text" id='username' onChange={e => e.target.value} required ref={userUpdate} />
                <button onClick={updateUser} >Save</button>
            </div>}
            {email && <div className="pop-up"> <label htmlFor="email">Email</label>
                <input type="text" id='email' onChange={e => e.target.value} required ref={emailUpdate} />
                <button onClick={updateEmail} >Save</button>
            </div>}
            {pass && <div className="pop-up"> <label htmlFor="password">Password</label>
                <input type="text" id='password' onChange={e => e.target.value} required ref={passUpdate} />
                <button onClick={updatePassword} >Save</button>
            </div>}
            <div className='user-details'>
                <div className='user-detail'>
                    <h3>UserName</h3>
                    <p>{localStorage.getItem("username")}</p>
                    <button onClick={handleEditUserName}><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button>
                </div>
                <div className='user-detail'>
                    <h3>Email</h3>
                    <p>{localStorage.getItem("email")}</p>
                    <button onClick={handleEditEmail}><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button>
                </div>
                <div className='user-detail'>
                    <h3>Password</h3>
                    <p>{localStorage.getItem("password")}</p>
                    <button onClick={handleEditPassword}><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button>
                </div>

            </div>


        </>
    )
}

export default UserDetail
