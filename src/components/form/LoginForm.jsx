import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import FormInput from "@/components/block/FormInput";
import Button from "@/components/base/Button";
import { loginAsync } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import LinkBase from "@/components/base/LinkBase";

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "emilys",
      password: "emilyspass",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Zorunlu Alan!"),
      password: Yup.string()
        .min(4, "En az 4 karakter olmalıdır!")
        .required("Zorunlu Alan!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginAsync(values));
    },
  });

  const fieldProps = (name) => ({
    field: formik.getFieldProps(name),
    meta: formik.getFieldMeta(name),
  });

  const usernameProps = fieldProps("username");
  const passwordProps = fieldProps("password");

  return (
    <div className="mx-auto">
      <form
        className="flex w-96 flex-col gap-4 rounded-md bg-slate-50 p-6 shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-800">
          Giriş Yapın
        </h1>
        <LinkBase to="/register" tag="link">
          Hesabınız yok mu? Kayıt olun!
        </LinkBase>
        <FormInput {...usernameProps} />
        <FormInput {...passwordProps} type="password" />
        <Button type="submit">Giriş Yap</Button>
      </form>
    </div>
  );
};

export default LoginForm;
