import {PrismaClient} from "@prisma/client";
import Attendee from "../model/Attendee";

const prisma = new PrismaClient();

export async function addAttendee(attendee: Attendee){
    console.log("Adding Attendee");
    try{
        await prisma.attendee.create({
            data: {
                name: attendee.name,
                email: attendee.email,
                registered_events: {
                    create: [
                        { eventId: attendee.registered_events }
                    ]
                }
            }
        })
    } catch (e){
        console.error("Error adding attendee:", e);
    }
}