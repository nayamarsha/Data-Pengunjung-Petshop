import Booking from "../models/BookingModel.js";

export const getBookings = async (req, res) => {
    try {
        const response = await Booking.findAll();
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }
}

export const getBookingsbyId = async (req, res) => {
    try {
        const response = await Booking.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }
}

export const createBooking = async (req, res) => {
    try {
        await Booking.create(req.body);
        res.status(201).json({msg: "Booking Created"});
    }catch (error) {
        console.log(error.message);
    }
}

export const updateBooking = async (req, res) => {
    try {
        await Booking.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Booking Upadated"});
    }catch (error) {
        console.log(error.message);
    }
}

export const deleteBooking = async (req, res) => {
    try {
        await Booking.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Booking Deleted"});
    }catch (error) {
        console.log(error.message);
    }
}
