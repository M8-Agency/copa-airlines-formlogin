import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validatorjs'
import FormLoginUI from './FormLoginUI'
import axios from 'axios'

class FormLogin extends Component{
    
    constructor(props){
        super(props)
    }
    
    handleValidateForm = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target);
        let data = {
            'email' : formData.get('email'),
            'email2' : formData.get('email2')
        };
      
        const rules = {
            'email': 'required|email'
        };
      
        var validation = new Validator(data, rules);
        
        validation.passes(() => {
            this.login(formData);
        });
        
        validation.fails(() => {
            alert("ko");
        });        
    }

    login = (formData) => {
        return axios.post(this.props.endPoint, formData)
        .then(this.loginSuccess)
        .catch(this.loginError);
    }

    loginSuccess = (data) => {
        this.props.loginSuccess(data)
    }

    loginError = (error) => {
        this.props.loginError(error)
    }    

    render = () => {
        return (
            <FormLoginUI validateForm = { this.handleValidateForm }  copy={ this.props.copy['es']} /> 
        )
    }
}

const copy = {
    es : {
        'emailPlaceholder' : 'Email',
        'email2Placeholder' : 'Confirma Email',
        'submitLabel' : 'Continuar'
    },
    pt : {
        'emailPlaceholder' : 'Email',
        'email2Placeholder' : 'Confirma Email',
        'submitLabel' : 'Continuar'
    }
}

FormLogin.propTypes = {
    copy : PropTypes.object,
    endPoint : PropTypes.string.isRequired ,
    loginSuccess : PropTypes.func.isRequired,
    loginError : PropTypes.func.isRequired
};

FormLogin.defaultProps = {
    copy
};

export default FormLogin;