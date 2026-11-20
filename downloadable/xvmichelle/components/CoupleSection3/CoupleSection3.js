
import React from 'react';
import Link from 'next/link';
import coupleImg1 from '/public/images/couple/middle-img-2.png';
import shape from '/public/images/couple/shape-line.png';
import Image from 'next/image';

const CoupleSection3 = (props) => {

    return (
        <section className="wpo-couple-section-s3 section-padding p-0" id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">

                        <div className="col-xl-4 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Michelle</h3>
                                <p>
                                    Hoy celebro con mucha alegría mis XV años,
                                    una etapa llena de sueños, aprendizajes y
                                    momentos inolvidables. Me siento muy
                                    afortunada de compartir este día tan especial
                                    rodeada del amor de mi familia y de las
                                    personas que forman parte de mi vida.
                                </p>

                                {/* <div className="social">
                                    <ul>
                                        <li>
                                            <Link href="https://www.facebook.com/" target="_blank">
                                                <i className="ti-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/" target="_blank">
                                                <i className="ti-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.tiktok.com/" target="_blank">
                                                <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.5v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.05.88.14V9.34a6.4 6.4 0 1 0 5.52 6.33V8.73a8.3 8.3 0 0 0 4.85 1.56V6.8a4.9 4.9 0 0 1-1.08-.11z"/>
</svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-12">
                            <div className="middle-couple-pic-wrap">
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <Image src={coupleImg1} alt="Michelle" />
                                    </div>
                                    <div className="line-shape">
                                        <Image src={shape} alt="" />
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

export default CoupleSection3;
