import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookingList = () => {
const [bookings, setBookings] = useState([]);

useEffect(() => {
    getBookings();
}, []);

const getBookings = async () => {
    const response = await axios.get('http://localhost:5000/bookings');
    setBookings(response.data);
}

const deleteBooking = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/bookings/${id}`);
        getBookings();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="flex justify-center mt-5">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <Link to={`add`} className="text-white bg-green-500 hover:bg-green-700 text-xs font-bold py-2 px-4 rounded">Add New</Link>
            <table className="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Owner Name</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Owner Phone</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pet Name</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Pet Type</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking, index) => (
                        <tr key={booking.id} className="bg-gray-50">
                            <td className="text-center px-6 py-4 whitespace-nowrap">{index + 1}</td>
                            <td className="text-center px-6 py-4 whitespace-nowrap">{booking.ownerName}</td>
                            <td className="text-center px-6 py-4 whitespace-nowrap">{booking.ownerPhone}</td>
                            <td className="text-center px-6 py-4 whitespace-nowrap">{booking.petName}</td>
                            <td className="text-center px-6 py-4 whitespace-nowrap">{booking.petType}</td>
                            <td className="text-center px-6 py-4 whitespace-nowrap">{booking.service}</td>
                            <td>
                                <Link to={`edit/${booking.id}`} className="text-white bg-blue-500 hover:bg-blue-700 text-xs foont-bold py-1 px-2 rounded">Edit</Link>
                                <button onClick={()=> deleteBooking(booking.id)} className="text-white bg-red-500 hover:bg-red-700 text-xs foont-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BookingList
