import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import {v4 as uuidv4} from 'uuid'
import { postDetailQuery } from "../../../utils/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'GET'){
        const { id } = req.query
        const query = postDetailQuery(id)

        const data = await client.fetch(query)

        res.status(200).json(data[0])
    }

    if(req.method === 'PUT'){
        const { comment, userId } = req.body
        const {id}:any = req.query
        
        const data =  await client
        .patch(id)
        .setIfMissing({comments: []})
        .insert('after', 'comments[-1]', [
            {
                _key: uuidv4(),
                comment,
                postedBy: {
                    _ref: userId,
                    _type: 'PostedBy'
                }
            }
        ])
        .commit()

        res.status(200).json(data)
    }
}
