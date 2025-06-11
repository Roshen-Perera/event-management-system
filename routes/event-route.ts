import express from "express";
import Events from "../model/Events";
import {addEvent} from "../service/event-service";

const router = express.Router();

router.post("/add", async(req, res) => {
    const event: Events = req.body;
    console.log("Received Data", event);
    try{
        const addEvents = await addEvent(event);
        console.log(addEvents)
        res.status(201).send("Event Added")
    } catch (error: any){
        console.log("Error adding Event");
        console.log(error.message)
        if (error.message === 'An event with this name already exists.') {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("An error occurred while adding the event.");
        }
    }
})

export default router;