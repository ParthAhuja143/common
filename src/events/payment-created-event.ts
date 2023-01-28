import { Subjects } from "./subjects";

export interface PaymentCreatedEvent {
    sublject: Subjects.PaymentCreated;
    data: {
        id: string,
        orderId: string,
        stripeId: string,
    },
};