
import React from 'react';
import Link from 'next/link';
import coupleImg1 from '/public/images/couple/middle-img-2.png';
import shape from '/public/images/couple/shape-line.svg';
import Image from 'next/image';
import ScrollReveal from '../ScrollReveal';


const CoupleSection3 = (props) => {

    return (
        <section className="wpo-couple-section-s3 section-padding p-0" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">

                        {/* Columna del texto */}
                        <div className="col-xl-4 col-lg-4 col-12">
                            <div className="text-grid">

                                <ScrollReveal animation="fadeInUp" duration={1300}>
                                    <h3>Michelle</h3>
                                </ScrollReveal>

                                <ScrollReveal animation="fadeInUp" duration={1300} delay={250}>
                                    <p>
                                        Hoy celebro con mucha alegría mis XV años,
                                        una etapa llena de sueños, aprendizajes y
                                        momentos inolvidables. Me siento muy
                                        afortunada de compartir este día tan especial
                                        rodeada del amor de mi familia y de las
                                        personas que forman parte de mi vida.
                                    </p>
                                </ScrollReveal>

                            </div>
                        </div>

                        {/* Columna de la fotografía */}
                        <div className="col-xl-8 col-lg-8 col-12">
                            <ScrollReveal
                                animation="fadeInRight"
                                duration={1600}
                                className="middle-couple-pic-wrap"
                            >
                                <div className="middle-couple-pic">
    <div className="middle-couple-pic-inner">
        <Image src={coupleImg1} alt="Michelle" />
    </div>

    <div className="line-shape">
        <Image src={shape} alt="" />
    </div>
</div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoupleSection3;
