// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { allowCORS } from "../../libs/allowCors"

export default async function handler(req, res) {

  allowCORS();

  res.status(200).json({ name: 'John Doe', sender: "lucy de rojas" })
}
