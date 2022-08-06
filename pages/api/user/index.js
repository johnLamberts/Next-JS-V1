import SAMPLEUsers from "../../../models/user";
import dbConnect from "../../../util/db-connect";

export default async function User(req, res)  {
    try {
        //connection atlas
        dbConnect();

       if (req.method === 'POST') {
        const user = await SAMPLEUsers.create({
            ...req.body.userData
         })  
 
         if(!user) {
             res.json({success: false});
         } else {
             res.json({success: true})
         }
       }else if (req.method === 'GET') {
         const getUsers = await SAMPLEUsers.find();
         res.json({data: getUsers, success: true})
         
       }else {
        res.json({success: false, message: 'Method not allowed'})
       }


    } catch (err) {
        console.log('err', err);

        res.json({success: false, message: err})
    }
}