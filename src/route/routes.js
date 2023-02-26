import BackGround from "../components/BackGround";
import Dashboard from "../components/Dashboard";
import { FormComponent } from "../components/FormComponent";
import RegisterForm from "../components/RegisterForm";
import { CheckAuthLoader } from "../util/auth";

export const routes = [
//   { path: "/Dashboard", element: <Dashboard />, loader: CheckAuthLoader },
  { path: "/Dashboard", element: <Dashboard /> },
  {
    path: "/",
    element: <BackGround />,
    children: [
      { path: "/", element: <FormComponent /> },
      { path: "/Login", element: <FormComponent /> },
      { path: "/Register", element: <RegisterForm /> },
    ],
  },
];

export default routes;
