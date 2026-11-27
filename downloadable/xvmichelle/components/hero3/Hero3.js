
import React from 'react'
import hImg1 from '/public/images/slider/Michelle.png'
import shape1 from '/public/images/slider/line-shape1.svg'
import shape2 from '/public/images/slider/line-shape2.svg'
import shape3 from '/public/images/slider/shape3.png'
import shape4 from '/public/images/slider/shape4.png'
import shape5 from '/public/images/slider/shape01.png'
import shape6 from '/public/images/slider/shape02.png'
import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const Hero3 = (props) => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-12">
                                <div className="wpo-static-hero-inner">

                                    <ScrollReveal
                                        animation="fadeInUp"
                                        duration={3000}
                                        delay={300}
                                    >
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2>Michelle</h2>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal
                                        animation="fadeInLeft"
                                        duration={3200}
                                        delay={1100}
                                    >
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Mis XV Años - Viernes 18 de diciembre 2026</p>
                                        </div>
                                    </ScrollReveal>

                                    <div className="clearfix"></div>

                                    <div className="shape">
                                        <Image src={shape1} alt=""/>
                                    </div>
                                    <div className="shape2">
                                        <Image src={shape2} alt=""/>
                                    </div>
                                    <div className="flower-1">
                                        <Image src={shape3} alt=""/>
                                    </div>
                                    <div className="flower-2">
                                        <Image src={shape4} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-12">
                                <div className="static-hero-right">
                                    <ScrollReveal
                                        animation="fadeInRight"
                                        duration={3500}
                                        delay={700}
                                    >
                                        <div className="static-hero-img">
                                            <div className="static-hero-img-inner">
                                                <Image src={hImg1} alt="Michelle"/>
                                            </div>
                                            <div className="shape01">
                                                <Image src={shape5} alt=""/>
                                            </div>
                                            <div className="shape02">
                                                <Image src={shape6} alt=""/>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;