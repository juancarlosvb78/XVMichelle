
import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from '/public/images/team/Raul.jpeg';
import timg2 from '/public/images/team/Gris.jpeg';
import timg3 from '/public/images/team/Miguel.jpeg';
import timg4 from '/public/images/team/Teresa.jpeg';
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const brideGrooms = [
    {
        id: '1',
        // tImg: timg1,
        name: 'Raul Berrios Hernandez',
        title: 'Papá',
    },
    {
        id: '2',
        //tImg: timg2,
        name: 'Gricelda Partida Gonzalez',
        title: 'Mamá',
    },
    {
        id: '3',
       // tImg: timg3,
        name: 'Miguel Angel Cortes Cortes',
        title: 'Padrino',
    },
    {
        id: '4',
       // tImg: timg4,
        name: 'Teresa Partida Gonzalez',
        title: 'Madrina',
    },
];

const BrideGrooms = (props) => {

    return (
       <section
    id="parents"
    className={`wpo-team-section section-padding ${props.tClass || ''}`}
    style={{ marginTop: '50px' }}
>
            <div className="container">

               <ScrollReveal animation="fadeInUp" duration={1200}>
    <SectionTitle
        subTitle={'Con mucho cariño'}
        MainTitle={'Padres y padrinos'}
    />
</ScrollReveal>

                <div className="wpo-team-wrap">
                    <div className="row">
                        {brideGrooms.map((brideGroom) => (
                            <div
                                className="col-lg-3 col-md-6 col-sm-6 col-12"
                                key={brideGroom.id}
                            >
                                <div className="wpo-team-item">

                                    {/* <div className="wpo-team-img">
                                        <div className="wpo-team-img-inner">
                                            <Image
                                                src={brideGroom.tImg}
                                                alt={brideGroom.name}
                                            />
                                        </div>
                                    </div> */}

                                    <ScrollReveal
    animation="fadeInUp"
    duration={1200}
    delay={Number(brideGroom.id) * 200}
>
    <div className="wpo-team-text">
        <h3>{brideGroom.name}</h3>
        <span>{brideGroom.title}</span>
    </div>
</ScrollReveal>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BrideGrooms;
