import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
    toDo: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    expectedResults: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    actualResults: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    environment: Yup.array().min(1, 'Select atleast one environment used'),
    stepsToReproduce: Yup.string()
        .required("Required!")
        .min(5, "Too Short!"),
    email: Yup.string().email("Enter a valid email"),
    date: Yup.date().default(() => new Date()),
})

export default ValidationSchema;