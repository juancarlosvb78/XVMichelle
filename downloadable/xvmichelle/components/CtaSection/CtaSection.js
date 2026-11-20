import React from 'react'


const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`wpo-cta-section ${props.ctClass}`}>
            <div className="conatiner-fluid">
                <div className="wpo-cta-item">
                    <h2>«¡Me encantará compartir este día contigo!»</h2>
                    <p>«Será una alegría enorme contar con tu presencia y compartir juntos
                    una noche llena de momentos especiales, emociones y recuerdos inolvidables.
                    ¡Te espero para celebrar mis XV años!»</p>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;