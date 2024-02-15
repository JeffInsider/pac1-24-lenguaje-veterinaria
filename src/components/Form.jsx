import { useState, useEffect } from 'react';
import Error from './Error';
import ErrorChildren from './ErrorChildren';

//esto recibe los valores desde app
const Form = ({ citas, setCitas, cita, setCita }) => {
  const [name, setName] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);


  useEffect(() => {
    //console.log(cita);
    if(Object.keys(cita).length > 0) {
      setName(cita.name);
      setPropietario(cita.propietario)
      setEmail(cita.email)
      setFecha(cita.fecha)
      setSintomas(cita.sintomas)
    } 
    //else{
    // console.log('No hay informacion')
    //}

  }, [cita]);

  //useEffect(() => {
  //  console.log('el componenre esta listp')
  //}, [])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha;
  }


  const onPropietarioChange = (e) => {
    //console.log(e.target.value); util para comprobar
    setPropietario(e.target.value)
  }

  //console.log(name);

  //para poder enviar formulario y que no refresqu
  const handelSubmit = (e) => {
    e.preventDefault();

    //arreglo en javascript
    if ([name, propietario, email, fecha, sintomas].includes('')) {
      //console.log('La informacion no esta completa');
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      name,
      propietario,
      email,
      fecha,
      sintomas,
      //id: generarId()
    }

    //para saber si agrega o edita, me imagino que si tiene valores entra al verdadero
    if(cita.id){
      //console.log('editando')
      objetoPaciente.id = cita.id
      //recorre un arreglo y devuelve otro el map osea recorrer cada cita e ir dejando una
      const citasActualizadas = citas.map( (citaState) =>
      //cita del arreglo === cita editando se le va a pasar el arreglo a la posicion sino que retorne asi como esta
        citaState.id === cita.id ? objetoPaciente : citaState
       );

       setCitas(citasActualizadas)
       setCita({});

    }else{
      //console.log('insertando')
      objetoPaciente.id = generarId();
      setCitas([...citas, objetoPaciente])
    }

    //console.log(objetoPaciente)
    //setCitas([...citas, objetoPaciente]);

    //console.log('Enviando formulario')

    setName('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 bg-white mt-5 mx-5 p-3 rounded-md">
      <h2 className="text-2xl text-indigo-800 text-center font-bold">
        Registrar cita
      </h2>
      <form className="mt-3" onSubmit={handelSubmit}>

        {/*error && (
          <Error message={'Todos los campos son requeridos'} />
        )*/}

        {error && (
          <ErrorChildren>
            <span className='block'>Todos los campos son requeridos</span>
          </ErrorChildren>
        )}

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
            htmlFor="name">Nombre Mascota
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
            type="text" id="name" placeholder="Nombre de la mascota"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
            htmlFor="propietario">Propietario
          </label>
          <input
            value={propietario}
            onChange={onPropietarioChange}
            className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
            type="text" id="propietario" placeholder="Nombre del propietario"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
            htmlFor="email">Correo electronico
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
            type="email" id="email" placeholder="Correo electronico del animal"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
            htmlFor="fecha">Fecha de ingreso
          </label>
          <input
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
            type="date" id="fecha" placeholder="Fecha de ingreso"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-bold uppercase"
            htmlFor="sintoma">Describa los sintomas
          </label>
          <textarea
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            className="border-2 w-full p-2 rounded-md placeholder-gray-400 mt-2"
            id="sintoma"
            placeholder="Describa los sintomas"
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={cita.id ? 'Editar Cita' : 'Agregar Cita'}
        />

      </form>
    </div>

  )
}

export default Form