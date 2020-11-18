import { Request, Response } from 'express'
import User from '@models/User'

export default {
  async index (req: Request, res: Response) {
    const users = await User.findAll()
    return res.status(200).json(users)
  },

  async store (req: Request, res: Response) {
    const { nome } = req.body

    const user = await User.create({ nome })

    return res.json(user)
  }
}
