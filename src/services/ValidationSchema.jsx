import * as yup from 'yup';

// Regex para validar NIF português
const nifRegex = /^(1|2|3|5|6|8|9)\d{8}$/;

// Regex para validar email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Regex para validar senha (letra, número e símbolo especial)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validationSchema = yup.object().shape({
    name: yup.string()
        .matches(/^[a-zA-Z]+\s+[a-zA-Z]+$/, 'Name must contain at least one first name and one last name')
        .required('Name is required'),
    profile_image: yup.string()
        .url('Profile image must be a valid URL')
        .required('Profile image is required'),
    email: yup.string()
        .matches(emailRegex, 'Email must be a valid email address')
        .required('Email is required'),
    password: yup.string()
        .matches(passwordRegex, 'Password must contain at least one letter, one number, and one special character')
        .required('Password is required'),
    address: yup.string()
        .required('Address is required'),
    nif: yup.string()
        .matches(nifRegex, 'NIF must be a valid Portuguese NIF')
        .required('NIF is required'),
    date_birth: yup.date()
        .required('Date of birth is required')
});

export default validationSchema;
