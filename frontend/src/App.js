import {BrowserRouter, Routes, Route} from "react-router-dom";
import BookingList from "./components/BookingList";
import AddBooking from "./components/AddBooking";
import EditBooking from "./components/EditBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<BookingList/>}/>
        <Route path="add" element= {<AddBooking/>}/>
        <Route path="edit/:id" element= {<EditBooking/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
