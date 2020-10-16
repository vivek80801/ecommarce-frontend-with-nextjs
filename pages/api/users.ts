import { NextApiRequest, NextApiResponse } from 'next'
import {users} from "../../data/users"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  console.log(req.body)
  res.json(users)
}
