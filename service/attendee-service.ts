import {PrismaClient} from "@prisma/client";
import Attendee from "../model/Attendee";

const prisma = new PrismaClient();

export async function addAttendee(attendee: Attendee){
    console.log("Adding Attendee");
    try{
        await prisma.attendee.create({
            data: {
                name: "Jane Doe",
                email: "jane@example.com",
                registered_events: {
                    create: [
                        { eventId: "event-uuid-1" },
                        { eventId: "event-uuid-2" }
                    ]
                }
            }
        })
    } catch (e){
        console.error("Error adding attendee:", e);
    }
}