import { cpfMask, phoneMask, cpfValidation, confirmPasswordValidation } from 'utils/index';

export const inputMap = [
    [
        {   
            componentName: 'MyInput',
            name: 'name',
            label:  'nome',
            required: true,
            minLength: 2
        },
        {   
            componentName: 'MyInput',
            name: 'lastName',
            label:  'sobrenome',
            required: true,
            minLength: 2
        },
        {
            componentName: 'MySelect',
            name: 'gender',
            placeholder:  'gênero',
            required: true,
            options: [
                { value: 'f', text: 'feminino'},
                { value: 'm', text: 'masculino'},
                { value: 'u', text: 'indefinido'}
            ]
        },
        {   
            componentName: 'MyInput',
            name: 'cpf',
            label:  'cpf',
            required: true,
            mask: cpfMask,
            onBlur: cpfValidation
        },
        {   
            componentName: 'MyInput',
            name: 'birthDate',
            label:  'data nascimento',
            required: true,
            halfSize: true,
            className: 'fill',
            type: 'date',
            mask: (val = '') => val.substr(0,10)
        },
        {   
            componentName: 'MyInput',
            name: 'phone',
            label:  'telefone',
            required: true,
            halfSize: true,
            mask: phoneMask,
        },
        {   
            componentName: 'MyInput',
            name: 'email',
            label:  'email',
            type: 'email',
            required: true
        },
        {   
            componentName: 'MyInput',
            name: 'password',
            label:  'senha',
            type: 'password',
            required: true,
            pattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,}',
            title: 'Deve conter ao menos um número, uma letra maiúscula, uma minúscula e um caractere especial, e ter mais de 8 caracteres',
            id: "signinpassword1245"
        },
        {   
            componentName: 'MyInput',
            name: 'passwordRedundancy',
            label:  'repita a senha',
            type: 'password',
            required: true,
            'data-inputmaster': 'signinpassword1245',
            onBlur: confirmPasswordValidation,
            title: 'confirmação de senha não confere com a senha'
        },
    ],
]
