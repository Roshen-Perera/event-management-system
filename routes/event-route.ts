import express from "express";
import Events from "../model/Events";
import {addEvent, deleteEvent} from "../service/event-service";

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

router.delete("/delete/:name", async (req, res) =>{
    console.log("Delete Event...");
    const name: string = req.params.name
    try{
        await deleteEvent(name);
        res.status(204).send('Event Deleted');
    } catch (error: any){
        console.log("Error deleting Event", error);
        if(error.message === 'This event doesnt exists'){
            res.status(404).send(error.message);
        } else {
            res.status(500).send("An error occurred while deleting the event.");
        }
    }
})

export default router;