import React from 'react';
import styles from  './FormLoginUI.css'

const FormLoginUI = (props) => (
    <div className="FormLogin">
        <form onSubmit={ props.validateForm } noValidate>
            <div>
                <input type="hidden" name="_token" value="" />
                <input className="FormLogin__email" type="email" placeholder={ props.copy.emailPlaceholder } name="email" />
                <input className="FormLogin__email_conf" type="email" placeholder= { props.copy.email2Placeholder } name="email_confirmation" />
            </div>
            { (props.error) && <p className="FormLogin__message_golden">{ props.error }</p> }
            <input className="FormLogin__submit" type="submit" value={ props.copy.submitLabel } />
        </form>
    </div>
)   

export default FormLoginUI;