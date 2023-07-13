import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'

export const CrudApp = () => {
    useEffect(()=>{
        getFood()
    },[])
    const initialValue = {name: "", food: "",}
    const [info, setInfo] =  useState(initialValue)
    const [infoArray,setInfoArray]=useState([])
    const [editID, setEditID]= useState ('')

    const getComidaId = async(id) => {
    const doc = await db.collection('food').doc(id).get()
    setInfo({...doc.data()})
    }
    
    const getFood = async()=>{
        db.collection("food").onSnapshot((querySnapshot)=>{
        const docs=[]
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id:doc.id})
        })
        setInfoArray(docs)
       })
    }

    const handdlerForm = ({target}) => {
        setInfo ({
            ...info, [target.name]:target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        try{
        if (editID==='') {
            await db.collection('food').add(info)
            setInfo(initialValue)
    } else {
        await db.collection('food').doc(editID).update(info)
        setEditID('')
      }} catch (error){

      }
    }

    const handleDelete = async(id)=>{
        await db.collection('food').doc(id).delete()

    }
    useEffect(()=> {
        if (editID===''){
          setInfo (initialValue)
        } else {
          getComidaId (editID)
        }
      },[editID])

  return (
    <>
    <h2>CrudApp</h2>
    <hr />
    <form onSubmit={submitForm}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder='Escriba su nombre' onChange={handdlerForm} value={info.name} />
        <label htmlFor="food">Comida Favorita</label>
        <input type="text" name="food" placeholder='escriba su comida favorita' onChange={handdlerForm} value={info.food} />
        <button type='submit' >
            {editID===''?'agregar':'actualizar'}
        </button>
    </form>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Orden</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {infoArray.map((e)=>(
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.food}</td>
                    <td>
                        <button onClick={()=>setEditID(e.id)}>Editar</button>
                        <button onClick={()=>handleDelete(e.id)}>Eliminar</button>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}
