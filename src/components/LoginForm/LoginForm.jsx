import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const initialValues = {
    name: "",
    email: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>Name</label>
          <Field name="name" placeholder="Name" />
          <label>Email</label>
          <Field name="email" type="email" placeholder="Email" />
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
