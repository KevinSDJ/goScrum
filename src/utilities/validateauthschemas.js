import * as Yup from 'yup'


export const SignUpSchema= Yup.object().shape({
    username:Yup.string()
    .min(6,'min 6 characters')
    .max(15,'max 15 characters')
    .required('*required'),
    password:Yup.string()
    .min(8,'min length 8')
    .max(20,'to long!')
    .required('*required')
})

export const SignInSchema= Yup.object().shape({
    username:Yup.string()
    .min(6,'min 6 characters')
    .max(15,'max 15 characters')
    .required('*required'),
    password:Yup.string()
    .min(8,'min length 8')
    .max(20,'to long!')
    .required('*required'),
    guard:Yup.boolean()
})