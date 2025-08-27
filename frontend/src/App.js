import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import axios from 'axios';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='form' style={{paddingBottom: "50px", paddingTop: "50px"}}>
          <form>
            <div className='form-wrapper' style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{flex: 1, marginRight: "10px"}}>
                <input className='form-control' type="text" placeholder='Nome' name="nome_usuario"></input>
              </div>
              <div style={{flex: 1}}>
                <input className='form-control' type="text" placeholder="Email" name="email_usuario"></input>
              </div>
              <div style={{flex: 1}}>
                <input className='form-control' type="text" placeholder="Senha" name="senha_usuario"></input>
              </div>
              {
                editMode ?
                  <button type='submit' style={{width:"200px", marginLeft:"10px"}} className='btn btn-primary'>Editar</button>
                  :
                  <button type='submit' style={{width:"200px", marginLeft:"10px"}} className='btn btn-primary'>+ Add</button>
                }
            </div>
          </form>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Email</th>
              <th scope='col'>Senha</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Karyne</td>
              <td>kaaryne@gmail.com</td>
              <td>1234</td>
              <td>
                <i className='fa-solid fa-pen-to-square' style={{color: "green", cursor: "pointer", marginRight: "25px"}}></i>
                <i style={{color: "red", cursor: "pointer"}} className='fa-solid fa-trash-can'></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App