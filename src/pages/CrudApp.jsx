import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'

export const CrudApp = () => {
    
    useEffect(()=>{
        getFood()
    },[])
    const initialValue = {name: "", lastname: "", howmany:"", comment:"",day:"" }
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
    <div className='Reserva'>
    <h1>Good Choise!
    </h1>
    <hr />
    <form onSubmit={submitForm}>
        <label htmlFor="name"></label>
        <input type="text" name="name" placeholder='Nombre' onChange={handdlerForm} value={info.name} />
        <hr />
        <label htmlFor="lastname"></label>
        <input type="text" name="lastname" placeholder='Apellido' onChange={handdlerForm} value={info.lastname} />
        <hr />
        <hr />
        <label htmlFor="howmany"></label>
        <input type="number" name="howmany" placeholder='¿Mesa para cuantos?' onChange={handdlerForm} value={info.howmany} />
        <hr />
        <label htmlFor="day"></label>
        <input type="date" name="day" onChange={handdlerForm} value={info.day} />
        <hr />
        <label htmlFor="comment"></label>
        <input type="text" name="comment" placeholder='Comentarios' onChange={handdlerForm} value={info.comment} />
        <hr />
        <button type='submit'>
            {editID===''?'Reservar':'Modificar reserva '}
        </button>
    </form>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cantidad de personas</th>
                <th>Fecha</th>
                <th>Comentarios adicionales</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {infoArray.map((e)=>(
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.lastname}</td>
                    <td>{e.howmany}</td>
                    <td>{e.day}</td>
                    <td>{e.comment}</td>
                    <td>
                        <button onClick={()=>setEditID(e.id)}>Editar</button>
                        <button onClick={()=>handleDelete(e.id)}>Eliminar</button>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}
