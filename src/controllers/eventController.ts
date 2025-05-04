import {Request, Response} from 'express';

import Event from "../models/Event";


export const createEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const {title, description, date} = req.body;
        if (isNaN(Date.parse(date))) {
            res.status(400).json({message: "Invalid date format"});
            return;
        }
        const eventDate = new Date(date);
        const currentDate = new Date();
        if (eventDate < currentDate) {
            res.status(400).json({message: "Event date cannot be in the past"});
            return;
        }
        const event = await Event.create({title, description, date});
        res.status(201).json(event);
    } catch (err){
        res.status(500).json({message: "Error creating event", error: err});
    }
}

export const getEvents = async (_req: Request, res: Response) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching events', error: err });
    }
}
export const getEventById = async (req:Request, res:Response): Promise<void> => {
    try{
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    }catch (error){
        res.status(400).json({message: "Error Fetching event", error: error});
    }
}

export const updateEvent = async (req:Request,res:Response): Promise<void> => {
    try{
        const {title, description, date} = req.body;
        if (date && isNaN(Date.parse(date))){res.status(400).json({message: "Invalid date format"})
        return;
    };

        const event = await Event.findByIdAndUpdate(req.params.id, {title, description, date}, {new: true, runValidators: true}
        );

        res.status(200).json(event);
    }catch (error){
            res.status(400).json({message: "Error updating event", error: error});
    }
}

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting event", error: error });
    }
}