import CommonForm from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { Link } from "react-router-dom";
import { useState } from "react";
const initialState = {
  email: "",
  password: "",
};
function LoginAuth() {
  const [formData, setFormData] = useState(initialState);

  function onsubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>

        <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign in"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onsubmit}
      ></CommonForm>
    </div>
  );
}
export default LoginAuth;
