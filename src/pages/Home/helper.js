export const inputMap = [
    [
        {   
            componentName: 'MyInput',
            name: 'name',
            label:  'nome',
            required: true,
            minLength: 2,
        },
        {
            componentName: 'MySelect',
            name: 'segment',
            placeholder:  'segmento',
            required: true,
            options: [
                { value: 'prenatal', text: 'pré-natal'},
                { value: 'postChildbirth', text: 'pós-parto'},
            ]
        },
        {
            componentName: 'MySelect',
            name: 'category',
            placeholder:  'categoria',
            required: true,
            options: [
                { value: 'One', text: 'categoria um'},
                { value: 'Two', text: 'categoria dois'},
            ]
        },
        {
            componentName: 'MyInput',
            name: 'gestationStart',
            placeholder:  'semana de inicio de disparo(gestação)',
            type: 'number',
            min: 0,
            required: true
        },
    ],
    [
        {
            componentName: 'MySelect',
            name: 'frequencia',
            placeholder:  'frequency',
            required: true,
            options: [
                { value: 'weekly', text: 'semanal'},
                { value: 'monthly', text: 'mensal'},
            ]
        },
        {
            componentName: 'MyInput',
            name: 'duration',
            placeholder:  'duração',
            type: 'number',
            min: 1,
            required: true
        },
        {   
            componentName: 'MyInput',
            name: 'titulo',
            label:  'title',
            required: true,
            minLength: 2
        },
        {
            componentName: 'MyTextarea',
            name: 'content',
            label:  'texto',
            minLength: 60,
            required: true
        },
    ],
]
