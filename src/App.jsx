import { useEffect, useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"


function App() {

  //valor inicial  se tiene que convertir de string a objeto y si no hay nada ?? entonces arreglo vacio []
  const [citas, setCitas] = useState( JSON.parse(localStorage.getItem('citas')) ?? []);
  const [cita, setCita] = useState({});

  // const imprime2Mas2 = () =>{
  //   console.log(2+2);
  // }

  // const tomarUnValor = (valor) =>{
  //   console.log(valor);
  // }

//este espera dos parametros
  useEffect(() => {
    //console.log('Componente listo o cabio en ciras')
    //transformar el arreglo en un string
    localStorage.setItem('citas', JSON.stringify(citas))

  }, [citas]); //cada vez que sehaga un cambio que se refleje en el localstorage

  const eliminarCita = (id) => {
    //console.log('Eliminado la cita: ', id);
    //map para poder transformar y filter para mostrar
    const citasActualizadas = citas.filter((cita) => cita.id !== id);
    setCitas(citasActualizadas);
  }

  //aqui se envia por prop
  return (
    <div className="container mx-auto mt-8">
      <Header
        // numeros={1}
        // isAdmin = {true}
        // fn = {imprime2Mas2}
        // tomarUnValor={tomarUnValor}
       />
      <div className="md:flex mt-10">
        <Form
          citas = {citas}
          setCitas = {setCitas}
          cita = {cita}
          setCita = {setCita}
        />
        <PatientsList
          citas = {citas}
          setCita = {setCita}
          eliminarCita = {eliminarCita}
        />
      </div>
    </div>
  )
}

export default App
