import Patient from "./Patient"

const PatientsList = ({ citas, setCita, eliminarCita }) => {
  //para ver que trae la cita
  //console.log(citas)
  return (
    <div className="md:w-1/2 lg:w-3/5 bg-white mt-5 p-3  rounded-md md:overflow-y-scroll md:h-screen">
      <h2 className="text-2xl text-indigo-800 text-center font-bold">
        Listado de Pacientes
      </h2>

      { citas.map( (cita) => (
        <Patient key={cita.id} cita = {cita} setCita = {setCita} eliminarCita = {eliminarCita}/>
      ))}

      
    </div>
  )
}

export default PatientsList