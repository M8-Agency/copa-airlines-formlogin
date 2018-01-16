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

        let data = {
            'email' : document.getElementsByName('FormLoginUI__email')[0].value,
            'email_confirmation' : document.getElementsByName('FormLoginUI__email_confirmation')[0].value
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
                this.login(data);    
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

    login = (data) => {
        //Inicio proceso de login
        this.props.working(true)

        this.data = data
        const formData = new FormData()

        formData.append('email', data.email)
        formData.append('email_confirmation', data.email_confirmation)

        return axios.post(this.props.endPoint, formData)
        .then(this.loginSuccess)
        .catch(this.loginError);
    }

    loginSuccess = (response) => {
        this.props.working(false)
        if(response.data.status === 'ok'){
            this.props.loginSuccess(response.data)
        }else{
            this.props.loginError(response.data.description, this.data)
            this.setState({
                error : response.data.description
            })
        }
    }

    loginError = (error) => {
        //Envio al error con los datos que se enviaron al endpoint
        this.props.working(false)
        this.props.loginError(error, this.data)
    }    

    render = () => {
        return (
            <FormLoginUI validateForm = { this.handleValidateForm }  copy={ this.props.copy } error={ this.state.error } /> 
        )
    }
}

const copy = {
    'emailPlaceholder' : 'Email',
    'email2Placeholder' : 'Confirma Email',
    'submitLabel' : 'Continuar'
}

FormLogin.propTypes = {
    copy : PropTypes.object,
    endPoint : PropTypes.string.isRequired ,
    working : PropTypes.func.isRequired,
    loginSuccess : PropTypes.func.isRequired,
    loginError : PropTypes.func.isRequired
};

FormLogin.defaultProps = {
    copy
};

export default FormLogin;