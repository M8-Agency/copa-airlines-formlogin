import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validatorjs'
import FormLoginUI from './FormLoginUI'
import axios from 'axios'

class FormLogin extends Component{
    
    constructor(props){
        super(props)
        this.data = {}
        this.state = {
            error : false
        }
    }
    
    handleValidateForm = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target);
        let data = {
            'email' : formData.get('email'),
            'email_confirmation' : formData.get('email_confirmation')
        };
      
        const rules = {
            'email': 'required|email',
            'email_confirmation': 'required|email',
        }
        
        const errors = {
            'required': 'El campo de e-mail es requerido',
            'email': 'El campo de e-mail es requerido'
        }        
      
        var validation = new Validator(data, rules, errors);
        
        if(data.email === data.email_confirmation){
            validation.passes(() => {
                this.data = data
                this.login(formData);    
            });
            validation.fails(() => {
                this.setState({
                    error : validation.errors.first('email')
                })                
            });            
        }else{
            this.setState({
                error : 'El email de confirmación no coincide'
            })            
        }                        
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
        //Envio al error con los datos que se enviaron al endpoint
        this.props.loginError(error, this.data)
    }    

    render = () => {
        return (
            <FormLoginUI validateForm = { this.handleValidateForm }  copy={ this.props.copy['es']} error={ this.state.error } /> 
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