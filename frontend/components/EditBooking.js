import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditBooking = () => {
const [ownerName, setownerName] = useState("");
const [ownerPhone, setownerPhone] = useState("");
const [petName, setpetName] = useState("");
const [petType, setpetType] = useState("");
const [service, setservice] = useState("Grooming");
const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {
    getBookingById();
}, []);

const updateBooking = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/bookings/${id}`, {
            ownerName,
            ownerPhone,
            petName,
            petType,
            service
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}

const getBookingById = async () => {
    const reponse = await axios.get(`http://localhost:5000/bookings/${id}`);
    setownerName(reponse.data.ownerName);
    setownerPhone(reponse.data.ownerPhone);
    setpetName(reponse.data.petName);
    setpetType(reponse.data.petType);
    setservice(reponse.data.service);
}

  return (
    <div className="flex justify-center mt-5">
        <div className="w-1/2 bg-gray-100 p-4">
            <form onSubmit={updateBooking}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Owner Name</label>
                    <div className="mb-4">
                        <input type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value={ownerName}
                        onChange={(e)=> setownerName(e.target.value)}
                        placeholder='Owner Name'/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Owner Phone</label>
                    <div className="mb-4">
                        <input type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value={ownerPhone}
                        onChange={(e)=> setownerPhone(e.target.value)}
                        placeholder='Owner Phone'/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Pet Name</label>
                    <div className="mb-4">
                        <input type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value={petName}
                        onChange={(e)=> setpetName(e.target.value)}
                        placeholder='Pet Name'/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Pet Type</label>
                    <div className="mb-4">
                        <input type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value={petType}
                        onChange={(e)=> setpetType(e.target.value)}
                        placeholder='Pet Type'/>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Service</label>
                    <div className="relative">
                        <select value={service}
                        onChange={(e)=> setservice(e.target.value)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Grooming</option>
                            <option>Hotel</option>
                            <option>Clinic</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8l-4 4z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                   <button type='submit' className="text-white bg-green-500 hover:bg-green-700 text-xs font-bold py-2 px-4 rounded">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditBooking;
