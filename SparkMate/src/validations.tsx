// validations.tsx
import * as Yup from "yup";


export const signInValidation = Yup.object().shape({
  email: Yup.string().email('invalid email').required("Required"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
   ,
});



export const signUpValidation = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Fullname can only contain alphabets and spaces')
    .required('Fullname is required'),
  email: Yup.string().email('invalid email').required("Required"),
  username: Yup.string()
    .required('Username is required')
    .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain alphanumeric characters')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must not exceed 20 characters'),
    hobbies: Yup.string()
    .required('Hobbies are required')
    .matches(/^[a-zA-Z\s,]+$/, 'Hobbies can only contain letters, spaces, and commas'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
    confirmPassword: Yup.string()
    .required("Please confirm your password")
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
    age: Yup.number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(18, 'Must be at least 18 years old or above'),
    location: Yup.string().required('Location is required'),
});



export const forgetPasswordValidation = Yup.object().shape({
  email: Yup.string().required('Email is required'),
});
