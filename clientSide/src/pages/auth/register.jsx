import CommonForm from "@/components/common/Form.jsx";
import { RegisterFormControls } from "@/config/index.js";
import { Link } from "react-router-dom";
import { useState } from "react";
const initialState = {
  username: "",
  email: "",
  password: "", // corrected typo
};
function RegisterAuth() {
  const [formData, setFormData] = useState(initialState);

  function onsubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>

        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={RegisterFormControls}
        buttonText={"Sign up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onsubmit}
      ></CommonForm>
    </div>
  );
}
export default RegisterAuth;
