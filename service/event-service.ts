import {Prisma, PrismaClient } from "@prisma/client";
import Events from "../model/Events";

const prisma = new PrismaClient();

export async function addEvent(event: Events) {
    console.log("Adding Event...");
    try{
        await prisma.event.create({
            data: {
                name: event.name,
                description: event.description,
                date: event.date,
                location: event.location,
                createdBy: event.createdBy,
                capacity: event.capacity,
                remaining_capacity: event.remaining_capacity,
                tags: event.tags
            }
        });
        console.log("Event [",event.name,"] added successfully !!!")
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new Error('An event with this name already exists.');
            }
        }
        throw error;
    }
}

export async function deleteEvent(name: string){
    try{
        await prisma.event.delete({
            where: {name: name}
        })
        console.log('Event Deleted : [',name,"]");
    } catch (error) {
        console.log("Error deleting event", error);
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code === 'P2025'){
                throw new Error("The event with this name doesnt exists");
            }
        }
        throw error;
    }
}

