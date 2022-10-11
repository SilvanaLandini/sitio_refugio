import React from 'react';
import "../styles/components/pages/Contacto.css";

const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label form="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label form="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label form="telefono">Teléfono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label form="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div>
                <h3>También puede comunicarse de forma privada por cualquiera de las redes facilitadas en el encabezado de
                    la página.</h3>
            </div>
        </main>
    );
}

export default Contacto;