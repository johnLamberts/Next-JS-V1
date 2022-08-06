import SAMPLEUsers from "../../../models/user";
import dbConnect from "../../../util/db-connect";

export default async function User(req, res)  {
  try {
    dbConnect();
    console.log('req.query.id', req.query.id);
    // const getUserDetail = await SAMPLEUsers.findOne({_id: req.query.id});
    // res.json(getUserDetail);
    
  } catch (error) {
    console.log('error', error)
    res.json({success: false})
  }
}