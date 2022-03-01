import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { CheckboxWithLabel } from "formik-material-ui";

import Router from "next/router";

import ValidationSchema from "../schema/schema";


const environmentOptions = [
  {
    label: "Google Chrome",
    value: "Google Chrome",
  },
  {
    label: "Microsoft Edge",
    value: "Microsoft Edge",
  },
  {
    label: "Mozilla Firefox",
    value: "Mozilla Firefox",
  },
  {
    label: "Apple Safari",
    value: "Apple Safari",
  },
  {
    label: "Windows",
    value: "Windows",
  },
  {
    label: "Mac",
    value: "Mac",
  },
  {
    label: "Linux",
    value: "Linux",
  },
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
    <div>
      
      <Box sx={{ marginTop: '3vh' }}
        autoComplete="off">
        <Typography variant="h4" component="div" gutterBottom>
          Bug Report Form
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          display="block"
        >
          This bug report form is still in its <b>BETA phase</b> and is being
          regularly updated and improved so additional information may be
          requested in addition to what is collected through this form.
        </Typography>

      </Box>
      <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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

          <Grid item xs={12}>
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

          <Grid item xs={12}>
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

          <Grid item xs={12}>

            <FormControl component="fieldset" style={{ display: "flex" }}>
              <FormLabel component="legend">
                Details of the environment (which browser, OS, etc.)
              </FormLabel>
              <FormGroup>
                {environmentOptions.map((opt) => (
                  <Field
                    type="checkbox"
                    component={CheckboxWithLabel}
                    name="environment"
                    key={opt.value}
                    value={opt.value}
                    Label={{ label: opt.label }}
                    error={touched.environment && Boolean(errors.environment)}
                  />
                ))}
              </FormGroup>
              <ErrorMessage
                name="environment"
                component="div"
                style={{ color: "#e12c2c" }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="stepsToReproduce"
              label="Could you tell us the steps we can take to reproduce the problem?"
              multiline
              maxRows={4}
              variant="standard"
              value={values.stepsToReproduce}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                touched.stepsToReproduce ? errors.stepsToReproduce : ""
              }
              error={
                touched.stepsToReproduce && Boolean(errors.stepsToReproduce)
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
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

          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="primary"
            >
              {!isSubmitting ? "Submit Bug Report" : "Submitting ..."}
            </Button>
          </Grid>
        </Grid>

      </Form>

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
    email
  }) => {
    return {
      toDo: toDo || "",
      expectedResults: expectedResults || "",
      actualResults: actualResults || "",
      environment: environment || [],
      stepsToReproduce: stepsToReproduce || "",
      email: email || "",
      date: new Date() || "",
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

  validationSchema: ValidationSchema,

  handleSubmit: async (values, { setSubmitting }) => {
    setSubmitting(true);
    let response = await fetch("/api/openIssue", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status != 200) {
      Router.push("/submission-error");
    } else {
      // Clear form fields after clicking submit
      setSubmitting(false);
      Router.push(response.url);
    }
  },
})(form);

export default BugFormComponent;
