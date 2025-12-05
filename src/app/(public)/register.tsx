import { RegisterView } from "../../viewModels/register/Register.view";
import { useRegisterViewModel } from "../../viewModels/register/useRegister.viewModel";

export default function Register() {
  const props = useRegisterViewModel();

  return <RegisterView {...props} />;
}
