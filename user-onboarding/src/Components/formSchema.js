import * as yup from "yup";

const formSchema = yup.object().shape({
    fullname: yup
        .string()
        .trim()
        .required("First and Last name is required!!!"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .trim()
        .required("Email is required!!!"),
    password: yup  
        .string()
        .trim()
        .required("Password can't be symbols")
        .min(6,"Password must be 6 characters long"),
    tos: yup  
        .boolean()
        .oneOf([true],["kickout","social","community"],"All must be checked!"),
    kickout: yup.boolean(),
    social: yup.boolean(),
    community: yup.boolean()
});

export default formSchema;