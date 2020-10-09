import { NextApiRequest, NextApiResponse } from 'next'
import {productItems} from "../../data/products"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json(productItems)
}
