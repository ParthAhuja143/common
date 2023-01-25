import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        version: number;
        status: OrderStatus;
        userId: string;
        expiresAt: string; // events are only emitted as string not date
        ticket: {
            id: string;
            price: number;
        };
    };
};