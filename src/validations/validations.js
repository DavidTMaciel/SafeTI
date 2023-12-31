import * as yup from "yup";

export const epiValidation = yup.object({

        name: yup.string().required(),
})
export const userValidation = yup.object({

        name: yup.string().required().typeError('Name must be a string'),
        email: yup.string().required(),
        password: yup.string().required(),
        admin: yup.boolean().required(),
})

export const collaboratorValidation = yup.object({
    
    name: yup.string().required().typeError('Name must be a string'),
    office: yup.string().required(),
    admission_Date: yup.string().required(),
    constructions: yup.string().required(),
    company: yup.string().required(),
})