import { Link } from 'react-router-dom';
import React from 'react'
import Logo from '../../public/Vooltrex.png';
import Sec1 from '../components/home/sec1';

const UsuarioList = () => {
    return (
        
        <>
          <Sec1/>
            <h1>Hola bienvenido a Vooltrex</h1>
            <img src={Logo} alt="Logo" style={{width:"300px", height:"300px"}}/>
          
            
        </>
    );
};

export default UsuarioList;
