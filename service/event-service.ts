import {Prisma, PrismaClient } from "@prisma/client";
import Event from "../model/Event";

const prisma = new PrismaClient();

export async function addEvent(event: Event) {
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
        console.log("Event "+event.name+" added successfully !!!")
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                throw new Error('An event with this name already exists.');
            }
        }
        throw error;
    }
}