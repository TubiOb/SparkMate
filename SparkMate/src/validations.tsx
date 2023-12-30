// validations.tsx
import * as Yup from "yup";


export const signInValidation = Yup.object().shape({
  email: Yup.string().email('invalid email').required("Required"),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
   ,
});

//valdation.tsx

export const signUpValidation = Yup.object().shape({
  email: Yup.string().email('invalid email').required("Required"),
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
});



export const forgetPasswordValidation = Yup.object().shape({
  email: Yup.string().required('Email is required'),
});
