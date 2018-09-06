import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validatorjs'
import FormLoginUI from './FormLoginUI'
import axios from 'axios'
import validate from './validate'

class FormLogin extends Component{
    
    constructor(props){
        super(props)
        this.data = {}
        this.formData = {}
        this.state = {
            error : false
        }
    }
    
    handlerEmail = (element) => {
        this.formData['email'] = element
    }

    handlerEmailConfirmation = (element) => {
        this.formData['emailConfirmation'] = element
    }    

    handlers = {
        handlerEmail : this.handlerEmail,
        handlerEmailConfirmation : this.handlerEmailConfirmation,
    }

    handleValidateForm = (event) => {
        event.preventDefault()
        const validateData = validate(this.formData, this.props.copy)
        
        if(validateData.valid){
            
            this.props.success(validateData)

        }else{
            this.setState({
                error: validateData.message
            })            
            this.props.error(validateData)
        }
    }

    render = () => {
        return (
            <FormLoginUI 
            validateForm = { this.handleValidateForm }  
            copy={ this.props.copy } 
            error={ this.state.error } 
            handlers = { this.handlers } 
            working = { this.props.working }/> 
        )
    }
}

const copy = {
    emailPlaceholder : 'Email',
    email2Placeholder : 'Confirma Email',
    submitLabel : 'Continuar',
    error : {
        required : 'El campo de e-mail es requerido',
        email : 'El campo de e-mail es requerido',
        equal : 'El email de confirmación no coincide'
    }
}

FormLogin.propTypes = {
    copy : PropTypes.object,
    working : PropTypes.bool,
    success : PropTypes.func.isRequired,
    error : PropTypes.func.isRequired
};

FormLogin.defaultProps = {
    copy,
    working : false
};

export default FormLogin;