import { Route, Routes } from "react-router-dom"
import { Principal } from "../pages/Principal"
import  { Postres } from "../pages/Postres"
import { Reserva } from "../pages/Reserva"
import { Cafe } from "../pages/Cafe"


export const MainRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Principal />}/>
            <Route path='Postres' element={<Postres />} /> 
            <Route path='Reserva' element={<Reserva />} />
            <Route path='Cafe' element={<Cafe />} />
        </Routes>
    </main>
  )
}
