import { Request, Response } from 'express';
import connection from '../db/connection';


export const getPersonas = (req: Request, res: Response) => {

    connection.query('SELECT * FROM persona', (err, data) => {
        if(err) throw err;
        res.json(data)
    })
}

//Persona: para buscar por id
export const getPersona = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('SELECT * FROM persona WHERE id = ?', id, (err, data) => {
        if(err) throw err;
        res.json(data[0])
    })
}

//Para borrar Persona
export const deletePersona = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('DELETE FROM persona WHERE id = ?', id, (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        })
    })
}

//Post, configuracion body.
export const postPersona = (req: Request, res: Response) => {
    
    const { body } = req;

    connection.query('INSERT INTO persona set ?',[body], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Persona agregada con exito'
        })
    })
    
}

//Put ingreso persona
export const putPersona = (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;

    connection.query('UPDATE persona set ? WHERE id = ?', [body, id], (err, data) => {
        if(err) throw err;
        res.json({
            msg: 'Persona Actualizada con exito'
        })
    })
    // res.json({
    //     msg: "postPersona",
    //     body: body,
    //     id: id
    // })
}