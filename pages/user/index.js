
import { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link'

export default function Users() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const users = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}user`)
        // console.log('users', users.data.data);
        setUsersData(users.data.data);
    }

    return (
        <div>
            <h1 id="title">Users table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Type</th>
                        <th>Mobile</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData && usersData.map((user, index) => {
                            return (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.type}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.status}</td>

                                        <td>
                                           <Link href={`${process.env.NEXT_PUBLIC_FR}user/${user._id}`}>Edit</Link>
                                        </td>
                                    </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}