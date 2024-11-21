import express from "express";
import { 
    getBookings, 
    getBookingsbyId,
    createBooking,
    updateBooking,
    deleteBooking
} from "../controllers/BookingController.js";

const router = express.Router();

router.get('/bookings', getBookings);
router.get('/bookings/:id', getBookingsbyId);
router.post('/bookings', createBooking);
router.patch('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);


export default router;
