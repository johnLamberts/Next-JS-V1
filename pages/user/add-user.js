
import { useState } from 'react';
import axios from 'axios';

export default function AddUser() {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        type: '',
        mobile: '',
        gender: '',
        status: '',
    })

    const [email, setName] = useState('')

    const addUser = async (e) => {
        e.preventDefault();

        const user = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}user`, { userData });
        console.log('user.data.sucess', user.data.success);

        if(user.data.success) {  
            alert("User added successfully!")
        } else {
            alert("User cannot be added");
        }

    }

    return (
        <div className="add-user-form">
            <form onSubmit={addUser}>
                <input type="text" onChange={(e) => setUserData({ ...userData, email: e.target.value })} name="email" placeholder='Email' /> <br />
                <input type="text" onChange={(e) => setUserData({ ...userData, name: e.target.value })} name="name" placeholder='Name' /> <br />
                <input type="text" onChange={(e) => setUserData({ ...userData, password: e.target.value })} name="password" placeholder='Password' /> <br />
                <input type="text" onChange={(e) => setUserData({ ...userData, type: e.target.value })} name="type" placeholder='Type of user' /> <br />
                <input type="text" onChange={(e) => setUserData({ ...userData, mobile: e.target.value })} name="mobile" placeholder='Mobile' /> <br />
                <input type="text" onChange={(e) => setUserData({ ...userData, gender: e.target.value })} name="gender" placeholder='Gender' />  <br />
                <input type="text" onChange={(e) => setUserData({ ...userData, status: e.target.value })} name="status" placeholder='Status' /> <br />

                <button type="submit" className="btn-user" >Add user</button>
            </form>
        </div>
    )
}