
import React from 'react';

const ImportantDetails = () => {
    return (
        <section className="wpo-important-details-section" id="detalles">
            <div className="container">
                <div className="important-details-content">
                    <span className="details-subtitle">
                        Un par de detalles para nuestra celebración
                    </span>

                    <h2>Detalles importantes</h2>

                    <div className="details-divider"></div>

                    <div className="details-item">
                        <h3>Código de vestimenta</h3>
                        <p>
                            El código de vestimenta será formal.
                            Les agradecemos elegir su atuendo evitando
                            los tonos rosa y blanco, para respetar los
                            colores especiales de esta celebración.
                        </p>
                    </div>

                    <div className="details-item">
                        <h3>Celebración para adultos</h3>
                        <p>
                            Hemos preparado esta ocasión como una
                            celebración exclusiva para adultos, por lo
                            que en esta oportunidad no será posible
                            asistir con niñas o niños. Agradecemos mucho
                            su comprensión y apoyo.
                        </p>
                    </div>

                    <p className="details-thanks">
                        ¡Gracias por acompañarme y ser parte de este
                        momento tan especial!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ImportantDetails;
