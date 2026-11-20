
import React from 'react'
import Link from 'next/link'

const Footer2 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      <footer className="wpo-site-footer-s2" style={{ backgroundColor: '#8f6a71' }}>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                &reg; 2026 |{' '}
                                <Link onClick={ClickHandler} href="https://www.codisoptoluca.com.mx/" target="_blank" rel="noopener noreferrer">
                                    Codisop Toluca
                                </Link>
                                {' '}| Todos los derechos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;
