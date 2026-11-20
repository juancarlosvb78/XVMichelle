
import React from 'react';
import SectionTitle from '../SectionTitle';
import sImg1 from '/public/images/story/4.png';
import Image from 'next/image';

const StorySection3 = (props) => {

    return (
        <section
            className="wpo-story-section-s3 section-padding pb-0"
            id="story"
        >
            <div className="container">

                <SectionTitle
                    subTitle={'Mi hermana'}
                    MainTitle={'Andrea'}
                />

                <div className="wpo-story-wrap">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-12">
                            <div className="wpo-story-item">

                                <div className="wpo-story-img-wrap">
                                    <div className="wpo-story-img">
                                        <Image
                                            src={sImg1}
                                            alt="Andrea, hermana de Michelle"
                                        />
                                    </div>
                                </div>

                                <div className="wpo-story-content">
                                    <div className="wpo-story-content-inner">
                                        <h2>Alguien muy especial</h2>

                                        <p>
                                            Gracias, Andrea, por estar a mi lado
                                            durante estos 15 años, por cada
                                            momento compartido, por tu cariño,
                                            tus consejos y por acompañarme en
                                            cada etapa de mi vida. Gracias por
                                            ser parte de mis alegrías, mis
                                            recuerdos y por caminar conmigo en
                                            esta etapa tan especial. Me siento
                                            muy afortunada de tenerte como mi
                                            hermana. ¡Te quiero mucho!.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StorySection3;
