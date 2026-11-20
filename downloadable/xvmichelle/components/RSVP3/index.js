
import React, { useState, useEffect, useRef } from 'react';
import shape1 from '/public/images/contact/4.png';
import shape2 from '/public/images/contact/3.png';
import Image from 'next/image';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1cIjNggc-6cZVDEhW0AiNyA8jaAGYObJ5ePbor21Yf3UyW_5pXMkYpht-vlNtO7G3/exec';

const RSVP3 = (props) => {
    const [forms, setForms] = useState({
        name: '',
        attendance: '',
        guests: '1',
        events: [],
        comments: ''
    });

    const [status, setStatus] = useState('');
    const formRef = useRef(null);
    const payloadRef = useRef(null);
    const iframeRef = useRef(null);
    const requestTokenRef = useRef('');

    useEffect(() => {
      const handleMessage = (event) => {
    if (event.data?.type !== 'rsvp-response') return;
    if (event.data?.token !== requestTokenRef.current) return;

            if (event.data.success) {
                setStatus('success');
                setForms({
                    name: '',
                    attendance: '',
                    guests: '1',
                    events: [],
                    comments: ''
                });
            } else {
                setStatus('error');
            }

            requestTokenRef.current = '';
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setForms(prev => ({
            ...prev,
            [name]: value
        }));

        setStatus('');
    };

    const eventHandler = (e) => {
        const { value, checked } = e.target;

        setForms(prev => ({
            ...prev,
            events: checked
                ? [...prev.events, value]
                : prev.events.filter(item => item !== value)
        }));

        setStatus('');
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (status === 'sending') return;

        if (!forms.name.trim()) {
            setStatus('required');
            return;
        }

        if (!forms.attendance) {
            setStatus('attendance');
            return;
        }

        if (forms.attendance === 'Sí' && forms.events.length === 0) {
            setStatus('events');
            return;
        }

        const token =
            Date.now().toString(36) +
            Math.random().toString(36).substring(2);

        requestTokenRef.current = token;

        const data = {
            token,
            name: forms.name.trim(),
            attendance: forms.attendance,
            guests: forms.attendance === 'Sí' ? forms.guests : '0',
            events: forms.attendance === 'Sí'
                ? forms.events.join(', ')
                : 'No asistirá',
            comments: forms.comments.trim()
        };

        payloadRef.current.value = JSON.stringify(data);

        setStatus('sending');

        formRef.current.submit();
    };

    return (
        <section
            className={`wpo-contact-section-s3 section-padding ${props.rClass || ''}`}
            id="RSVP"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">

                                    <div className="wpo-section-title">
                                        <h2>Confirma tu asistencia</h2>
                                        <p>
                                            Nos encantará compartir contigo
                                            este día tan especial.
                                        </p>
                                    </div>

                                    <form
                                        ref={formRef}
                                        method="POST"
                                        action={SCRIPT_URL}
                                        target="rsvp-response-frame"
                                        onSubmit={submitHandler}
                                        className="contact-validation-active"
                                    >
                                        <input
                                            ref={payloadRef}
                                            type="hidden"
                                            name="payload"
                                        />

                                        <div className="row">

                                            <div className="col-lg-12 col-md-12 col-12">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={forms.name}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    placeholder="Nombre completo"
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-12">
                                                <p>¿Nos acompañarás?</p>

                                                <div className="radio-buttons">
                                                    <div className="row">

                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input
                                                                    type="radio"
                                                                    id="attend-yes"
                                                                    name="attendance"
                                                                    value="Sí"
                                                                    checked={forms.attendance === 'Sí'}
                                                                    onChange={changeHandler}
                                                                />
                                                                <label htmlFor="attend-yes">
                                                                    ¡Sí, ahí estaré!
                                                                </label>
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input
                                                                    type="radio"
                                                                    id="attend-no"
                                                                    name="attendance"
                                                                    value="No"
                                                                    checked={forms.attendance === 'No'}
                                                                    onChange={changeHandler}
                                                                />
                                                                <label htmlFor="attend-no">
                                                                    No podré asistir
                                                                </label>
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            {forms.attendance === 'Sí' && (
                                                <>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <select
                                                            name="guests"
                                                            value={forms.guests}
                                                            onChange={changeHandler}
                                                            className="form-control"
                                                        >
                                                            <option value="1">1 asistente</option>
                                                            <option value="2">2 asistentes</option>
                                                            <option value="3">3 asistentes</option>
                                                            <option value="4">4 asistentes</option>
                                                            <option value="5">5 asistentes</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <p>
                                                            ¿A qué evento nos acompañarás?
                                                        </p>

                                                        <div className="radio-buttons">
                                                            <p>
                                                                <input
                                                                    type="checkbox"
                                                                    id="event-misa"
                                                                    value="Misa"
                                                                    checked={forms.events.includes('Misa')}
                                                                    onChange={eventHandler}
                                                                />
                                                                <label htmlFor="event-misa">
                                                                    Misa
                                                                </label>
                                                            </p>

                                                            <p>
                                                                <input
                                                                    type="checkbox"
                                                                    id="event-recepcion"
                                                                    value="Recepción"
                                                                    checked={forms.events.includes('Recepción')}
                                                                    onChange={eventHandler}
                                                                />
                                                                <label htmlFor="event-recepcion">
                                                                    Recepción
                                                                </label>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            <div className="col-lg-12 col-md-12 col-12">
                                                <textarea
                                                    name="comments"
                                                    value={forms.comments}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    placeholder="Comentarios (opcional)"
                                                    rows="3"
                                                />
                                            </div>

                                        </div>

                                        <div className="submit-area">
                                            <button
                                                type="submit"
                                                className="theme-btn"
                                                disabled={status === 'sending'}
                                            >
                                                {status === 'sending'
                                                    ? 'Enviando...'
                                                    : 'Confirmar asistencia'}
                                            </button>
                                        </div>

                                        {status === 'success' && (
                                            <p className="successMessage">
                                                ¡Gracias! Tu confirmación ha sido registrada.
                                            </p>
                                        )}

                                        {status === 'error' && (
                                            <p className="errorMessage">
                                                No fue posible registrar tu confirmación.
                                                Inténtalo nuevamente.
                                            </p>
                                        )}

                                        {status === 'required' && (
                                            <p className="errorMessage">
                                                Por favor, escribe tu nombre.
                                            </p>
                                        )}

                                        {status === 'attendance' && (
                                            <p className="errorMessage">
                                                Por favor, indica si nos acompañarás.
                                            </p>
                                        )}

                                        {status === 'events' && (
                                            <p className="errorMessage">
                                                Selecciona al menos un evento.
                                            </p>
                                        )}

                                    </form>

                                    <iframe
                                        ref={iframeRef}
                                        name="rsvp-response-frame"
                                        title="Respuesta de confirmación"
                                        style={{ display: 'none' }}
                                    />

                                </div>
                            </div>

                            <div className="shape-1">
                                <Image src={shape1} alt="" />
                            </div>

                            <div className="shape-2">
                                <Image src={shape2} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RSVP3;
