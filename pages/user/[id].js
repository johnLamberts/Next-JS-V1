import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function EditUser (){
   const router = useRouter();
    const [userDetail, setUserDetail] = useState({});
    useEffect(()=>{
        getUserDetail();
    }, [])
    
    const getUserDetail = async() => {
        const userDetail = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/user/${router.query.id}`)
    }

  return(


    <main>
        <div className="edit-container-page">

        </div>
    </main>
  )
}