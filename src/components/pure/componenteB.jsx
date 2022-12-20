import React from "react";
import PropTypes from "prop-types";
import {Contacto} from '../../models/contacto.class'; 

const ContactoComponentB = ({ contacto })=>{
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                Conectado:  { contacto.conectado ? 'CONECTADO' : 'DESCONECTADO'}
            </h5>
        </div>  
    );
};

ContactoComponentB.prototypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoComponentB;