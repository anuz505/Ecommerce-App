import CommonForm from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { loginUser } from "@/store/auth-slice";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
function LoginAuth() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  async function onsubmit(event) {
    event.preventDefault();
    try {
      const result = await dispatch(loginUser(formData)).unwrap();
      if (result.success) {
        toast({
          title: result.message,
        });
        navigate("/shop/home");
      } else {
        toast({
          title: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: error.message || "Login failed",
        variant: "destructive",
      });
    }
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
