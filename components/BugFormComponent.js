import React from "react";
import { withFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import { CheckboxWithLabel } from "formik-material-ui";

const environmentOptions = [
    {
        label: "Google Chrome",
        value: "Google Chrome"
    },
    {
        label: "Microsoft Edge",
        value: "Microsoft Edge"
    },
    {
        label: "Mozilla Firefox",
        value: "Mozilla Firefox"
    },
    {
        label: "Apple Safari",
        value: "Apple Safari"
    },
    {
        label: "Windows",
        value: "Windows"
    },
    {
        label: "Mac",
        value: "Mac"
    },
    {
        label: "Linux",
        value: "Linux"
    }
];

const form = (props) => {
    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;

    return (
        <div style={{ marginTop: '3vh' }}>
            <form onSubmit={handleSubmit} >
                <Typography variant="h4" component="div" gutterBottom>
                    DPG Bug Report Form
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div" display="block">
                    This bug report form is still in its <b>BETA phase</b> and is being regularly updated and improved so additional information may be requested in addition to what is collected through this form.
                </Typography>

                <Grid container spacing={2}>
                    <Grid item lg={12} xs={12} sm={12}>
                        <TextField
                            id="toDo"
                            label="What were you trying to do?"
                            multiline
                            maxRows={4}
                            variant="standard"
                            value={values.toDo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.toDo ? errors.toDo : ""}
                            error={touched.toDo && Boolean(errors.toDo)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12}>
                        <TextField
                            id="expectedResults"
                            label="What were the results you were expecting?"
                            variant="standard"
                            value={values.expectedResults}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.expectedResults ? errors.expectedResults : ""}
                            error={touched.expectedResults && Boolean(errors.expectedResults)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12}>
                        <TextField
                            id="actualResults"
                            label="What was the actual result?"
                            multiline
                            maxRows={4}
                            variant="standard"
                            value={values.actualResults}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.actualResults ? errors.actualResults : ""}
                            error={touched.actualResults && Boolean(errors.actualResults)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} xs={12} sm={12}>
                        <FormControl component="fieldset" style={{ display: "flex" }}>
                            <FormLabel component="legend">Details of the environment (which browser, OS, etc.)</FormLabel>
                            <FormGroup>
                                {environmentOptions.map(opt => (
                                    <Field
                                        type="checkbox"
                                        component={CheckboxWithLabel}
                                        name="environment"
                                        key={opt.value}
                                        value={opt.value}
                                        Label={{ label: opt.label }}
                                        helperText={touched.environment ? errors.environment : ""}
                                        error={touched.environment && Boolean(errors.environment)}
                                    />
                                ))}
                            </FormGroup>
                            <ErrorMessage name="environment" component="div" style={{ color: '#e12c2c' }} />
                        </FormControl>
                    </Grid>

                    <Grid item lg={12} xs={12} sm={12}>
                        <TextField
                            id="stepsToReproduce"
                            label="Could you tell us the steps we can take to reproduce the problem?"
                            multiline
                            maxRows={4}
                            variant="standard"
                            value={values.stepsToReproduce}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.stepsToReproduce ? errors.stepsToReproduce : ""}
                            error={touched.stepsToReproduce && Boolean(errors.stepsToReproduce)}
                            fullWidth
                        />
                    </Grid>

                    <Grid item lg={12} xs={12} sm={12}>
                        <TextField
                            id="email"
                            label="Email (optional)"
                            variant="standard"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.email ? errors.email : ""}
                            error={touched.email && Boolean(errors.email)}
                            fullWidth
                        />
                    </Grid>


                    <Grid item xs={12} sm={12} style={{ paddingTop: '3vh' }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="medium"
                            color="primary"
                        >
                            Submit Bug Report
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

const BugFormComponent = withFormik({
    mapPropsToValues: ({
        toDo,
        expectedResults,
        actualResults,
        environment,
        stepsToReproduce,
        email,
        date
    }) => {
        return {
            toDo: toDo || "",
            expectedResults: expectedResults || "",
            actualResults: actualResults || "",
            environment: environment || [],
            stepsToReproduce: stepsToReproduce || "",
            email: email || "",
            date: new Date() || ""
        };
    },

    initialValues: {
        toDo: "",
        expectedResults: "",
        actualResults: "",
        environment: [],
        stepsToReproduce: "",
        email: "",
        date: new Date(),
    },

    validationSchema: Yup.object().shape({
        toDo: Yup.string().required("Required!"),
        expectedResults: Yup.string().required("Required!"),
        actualResults: Yup.string().required("Required!"),
        environment: Yup.array().min(1, 'Select atleast one environment used'),
        stepsToReproduce: Yup.string().required("Required!"),
        email: Yup.string().email("Enter a valid email"),
        date: Yup.date().default(() => new Date()),
    }),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // submit to the server
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
})(form);

export default BugFormComponent;
