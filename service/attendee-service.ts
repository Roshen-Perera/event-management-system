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
                        { eventId: "55ee2ff5-5865-4059-8e6b-0075b0208c17" },
                        { eventId: "5c4d39e7-fc8f-4dca-b8d3-4980d2f9f0b9" }
                    ]
                }
            }
        })
    } catch (e){
        console.error("Error adding attendee:", e);
    }
}