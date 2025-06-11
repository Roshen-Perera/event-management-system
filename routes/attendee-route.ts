import express from "express";
import Attendee from "../model/Attendee";
import {addAttendee} from "../service/attendee-service";

const router = express.Router()

router.post("/add", async (req, res) => {
    const attendee: Attendee = req.body;
    console.log("Received Data",attendee);
    try{
        const addAttendees = await addAttendee(attendee);
        console.log(addAttendees)
        res.status(201).send("Attendee Added")
    } catch (error: any){
        console.log("Error adding Attendee");
        console.log(error.message)
        if (error.message === 'The attendee with this email already exists.') {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("An error occurred while adding the attendee.");
        }
    }
})

export default router;