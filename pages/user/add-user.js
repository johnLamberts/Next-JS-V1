
import { useState } from 'react';
import axios from 'axios';

export default function AddUser() {
    const [name, setName] = useState('')
    return (
        <div>
            User Form Input

            <input type="text" placeholder="Add name" onChange={(e) => { setName(e.target.value) }} />

            <span>{name}</span>

            <button onClick={async() => {
                const user = await axios.post('http://localhost:3000/api/sample', {name, description: 'description'})
                console.log(user);
            }}>Add</button>
        </div>
    )
}