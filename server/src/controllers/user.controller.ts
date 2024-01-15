import { Request, Response } from "express";
import connection from '../db/connection';


export const newUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'New User',
        body
    })

}

export const loginUser = (req: Request, res: Response) => {

    const { body } = req;;

    res.json({
        msg: 'Login User',
        body
    })

}