
import './App.css'
import Formulario from './components/Form'
import Cita from './components/Cita.jsx'


function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <h2>Crear mi Cita</h2>
            <Formulario/>
          </div>
          <div className='one-half column'>
          
            <h2>Administra tus citas</h2>
            <Cita nombre="Nina" dueno = "Martin" fecha = "2021-08-05" hora = "08:20" sintomas = "Le duele la pierna"/> 
             <Cita nombre="Sifon" dueno = "Flecha" fecha = "2023-08-05" hora = "09:24" sintomas = "Duerme mucho"/> 
             <Cita nombre="Floki" dueno = "Ari" fecha = "2023-08-05" hora = "16:15" sintomas = "No está comiendo"/> 
           
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
