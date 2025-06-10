export default class Event {
    name!: string;
    description!: string;
    date!: Date;
    location!: string;
    createdBy!: string;
    capacity!: number;
    remaining_capacity!: number;
    tags !: string;
}