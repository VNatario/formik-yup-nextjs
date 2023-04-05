import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yup.object({
      login: yup
        .string()
        .min(3, "Minímo 3 caracteres")
        .max(16, "Deve conter menos que 16 caracteres")
        .required("Campo obrigatório"),

      password: yup
        .string()
        .min(3, "Minímo 8 caracteres")
        .max(16, "Deve conter menos que 16 caracteres")
        .required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col border border-slate-400 rounded-2xl p-10 shadow-2xl bg-slate-100"
      >
        <label htmlFor="login">User</label>
        <input
          className={`border p-2 border-slate-600 outline-none rounded-lg ${
            formik.touched.login && formik.errors.login && `border-red-600`
          }`}
          id="login"
          type="text"
          //metodo resumido
          {...formik.getFieldProps("login")}
        />
        {formik.touched.login && formik.errors.login && (
          <div className="text-xs text-red-600">{formik.errors.login}</div>
        )}

        <label htmlFor="password" className="mt-5">
          Password
        </label>
        <input
          className="border p-2 border-slate-600 outline-none rounded-lg"
          id="password"
          type="password"
          //passando props uma por uma
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-xs text-red-600">{formik.errors.password}</div>
        )}

        <button
          type="submit"
          className="border p-2 border-slate-600 outline-none rounded-lg bg-slate-300 shadow-2xl mt-5 hover:bg-slate-400 transition-all duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
