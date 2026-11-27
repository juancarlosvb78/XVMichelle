
import React from 'react'
import SectionTitle from '../SectionTitle'
import ScrollReveal from '../ScrollReveal'
import sImg1 from '/public/images/event/4.jpeg'
import sImg2 from '/public/images/event/5.jpeg'
import sImg3 from '/public/images/event/6.jpeg'
import Image from 'next/image'

const Events = [
    {
        title: 'Misa de acción de gracias',
        li1: 'Viernes 18 de diciembre de 2026 · 17:00 hrs',
        li2: 'Parroquia Cristo Rey',
        li3: 'Acompáñame a dar gracias por este momento tan especial en una emotiva ceremonia religiosa.',
        address: 'Av. Manuel Gómez Morín Sur 723, Jardines de La Rivera, 47675 Tepatitlán de Morelos, Jalisco.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parroquia+Cristo+Rey+Av+Manuel+Gomez+Morin+Sur+723+Tepatitlan+Jalisco',
        sImg: sImg1,
    },
    {
        title: 'Recepción y fotografías',
        li1: 'Viernes 18 de diciembre de 2026 · 18:45 hrs',
        li2: 'Jacarandas Eventos',
        li3: 'Será un gusto recibirte en la terraza. Compartiremos este momento especial y tendremos una sesión de fotografías para guardar juntos recuerdos inolvidables.',
        address: 'Hacienda 1706, Cuatro Caminos, 47656 Tepatitlán de Morelos, Jalisco.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jacarandas+Eventos+Hacienda+1706+Cuatro+Caminos+Tepatitlan+Jalisco',
        sImg: sImg2,
    },
    {
        title: '¡Que comience la celebración!',
        li1: 'Después de la recepción',
        li2: 'Jacarandas Eventos',
        li3: 'Ha llegado el momento de disfrutar, bailar y celebrar mis XV años. ¡Espero que me acompañes para hacer de esta noche un recuerdo inolvidable!',
        address: 'Hacienda 1706, Cuatro Caminos, 47656 Tepatitlán de Morelos, Jalisco.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jacarandas+Eventos+Hacienda+1706+Cuatro+Caminos+Tepatitlan+Jalisco',
        sImg: sImg3,
    },
]

const EventSectionS2 = (props) => {
    return (
        <section className={`wpo-event-section-s2 section-padding ${props.eClass}`} id="event">
            <div className="container">
                <ScrollReveal animation="fadeInUp" duration={1200}>
    <SectionTitle
        subTitle={'Mis XV años'}
        MainTitle={'Ceremonia y celebración'}
    />
</ScrollReveal>

                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
    <ScrollReveal
        animation="fadeInUp"
        duration={1300}
        delay={eitem * 250}
    >
        <div className="wpo-event-item">

                                    <div className="wpo-event-img">
                                        <div className="wpo-event-img-inner">
                                            <Image
                                                src={event.sImg}
                                                alt={event.title}
                                            />
                                        </div>
                                    </div>

                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>

                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li>{event.address}</li>
                                            <li>
                                                <a
                                                    href={event.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Ver ubicación en Google Maps
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                              </div>
            </ScrollReveal>
        </div>
    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSectionS2;
