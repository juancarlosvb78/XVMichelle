
import React from 'react'
import pImg7 from '/public/images/portfolio/7.jpg'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image'

const images = [pImg7]

const PortfolioSection2 = (props) => {

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    const [open, setOpen] = React.useState(false);

    return (
        <section
            className={`wpo-portfolio-section section-padding ${props.pClass || ''}`}
            id="gallery"
        >
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Galería fotográfica</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="portfolio-grids gallery-container clearfix">
                            {images.map((item, pitem) => (
                                <div className="grid" key={pitem}>
                                    <div
                                        className="img-holder"
                                        onClick={() => setOpen(true)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Image
                                            src={item}
                                            alt="Galería fotográfica de Michelle"
                                            className="img img-responsive"
                                        />
                                        <div className="hover-content">
                                            <i className="ti-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
            />
        </section>
    )
}

export default PortfolioSection2;
