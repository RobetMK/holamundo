import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/componenteB';

const ContactListComponentA = () => {
    const defaultContact = new Contacto('Andres', 'Bonfil','andresbonfil@gmail.com', true)
    return (
        <>
            <div>
                Your Contact:
            </div>
            {/* Aplicar un For/Map para renderizar una lista*/}
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
        </>
    );
};


export default ContactListComponentA;
