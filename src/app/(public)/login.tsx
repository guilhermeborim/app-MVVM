import { LoginView } from "../../viewModels/login/Login.view";
import { useLoginViewModel } from "../../viewModels/login/useLogin.viewModel";

export default function Login() {
  const props = useLoginViewModel();

  return <LoginView {...props} />;
}
