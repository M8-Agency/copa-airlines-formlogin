import React from 'react';

const FormLoginUI = (props) => (
    <div className="FormLogin">
        <form onSubmit={ props.validateForm } noValidate>
            <div>
                <input className="FormLogin__email" type="email" placeholder={ props.copy.emailPlaceholder } ref = { props.handlers.handlerEmail } />
                <input className="FormLogin__email_conf" type="email" placeholder= { props.copy.email2Placeholder } ref = { props.handlers.handlerEmailConfirmation }  />
            </div>
            { (props.error) && <p className="FormLogin__error">{ props.error }</p> }
            <button disabled={ props.working } className="FormLogin__cta">{ props.copy.submitLabel }</button>
        </form>
    </div>
)

export default FormLoginUI;