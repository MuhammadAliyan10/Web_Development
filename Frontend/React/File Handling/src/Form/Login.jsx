import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  // const delay = (d) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, d * 1000);
  //   });
  // };
  const onSubmit = async (data) => {
    const api = await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const res = await api.text();
    console.log(res);
    console.log(data);
  };
  return (
    <div>
      {isSubmitting && <p>Loading....</p>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login Form</h2>
          <input
            placeholder="Enter your name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 12,
                message: "Name must less then 12 characters",
              },
            })}
            type="text"
          />
          {errors.name && errors.name.message}
          <input
            placeholder="Enter your email"
            {...register("email")}
            type="email"
          />
          <input
            placeholder="Enter your password"
            {...register("password")}
            type="password"
          />
          <input disabled={isSubmitting} type="submit" value="Sudmit" />
          {errors.myName && errors.myName.message}
        </form>
      </div>
    </div>
  );
};

export default Login;
