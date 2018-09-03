import Validator from 'validatorjs'

export default function (formData, copy) {
    let data = {
        'email': formData.email.value,
        'emailConfirmation': formData.emailConfirmation.value
    };

    const rules = {
        'email': 'required|email',
        'emailConfirmation': 'required|email',
    }

    const errors = {
        'required': copy.error.required,
        'email': copy.error.email
    }

    var validation = new Validator(data, rules, errors);

    let responseObject = {
        valid: false,
        message: '',
        data
    }

    if (data.email === data.emailConfirmation) {
        validation.passes(() => {
            responseObject = {
                valid: true,
                message: '',
                data
            }
        });
        validation.fails(() => {
            const errors = validation.errors.all();
            const keyName = Object.keys(errors)[0];
            
            responseObject = {
                valid: false,
                message: errors[keyName][0],
                data
            }

        });
    } else {
        responseObject = {
            valid: false,
            message: copy.error.equal,
            data
        }
    }
    return responseObject;
}