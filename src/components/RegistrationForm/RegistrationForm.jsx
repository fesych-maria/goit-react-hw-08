import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { registerThunk } from "../../redux/auth/operations";
YupPassword(Yup);

const LoginForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().password().required("Required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" placeholder="Name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" />
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" component="span" />
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
