import { Route, Routes } from "react-router-dom"
import { Principal } from "../pages/Principal"
import  { Postres } from "../pages/Postres"
import { Cafe } from "../pages/Cafe"
import { CrudApp } from "../pages/CrudApp"


export const MainRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Principal />}/>
            <Route path='Postres' element={<Postres />} /> 
            <Route path='Cafe' element={<Cafe />} />
            <Route path='CrudApp' element={<CrudApp />} />

        </Routes>
    </main>
  )
}
