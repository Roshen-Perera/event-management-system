import express from "express";
import Events from "../model/Events";
import {addEvent, deleteEvent, getAllEvents, updateField} from "../service/event-service";

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

router.delete("/delete/:id", async (req, res) =>{
    console.log("Delete Event...");
    const id: string = req.params.id
    try{
        await deleteEvent(id);
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

router.put("/update/:id", async (req, res) => {
    console.log("Updating event...");
    const id:string = req.params.id;
    const event: Events = req.body;
    try{
        await updateField(id, event)
        res.send(204).send("Event updated successfully");
    } catch (error){
        console.log("error updating event", error);
        if(error.message === 'This event doesnt exists'){
            res.status(404).send(error.message);
        } else {
            res.status(500).send("An error occurred while updating the event.");
        }
    }
})

router.get("/get", async (req, res) => {
    console.log("Fetching all events");
    try{
        const events = await getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        console.log("Error getting events",error)
    }
})

export default router;