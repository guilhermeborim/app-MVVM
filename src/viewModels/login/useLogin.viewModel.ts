import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../shared/queries/auth/use-login.mutation";
import { useUserStore } from "../../shared/store/user-store";
import { LoginFormData, loginScheme } from "./login.scheme";

export const useLoginViewModel = () => {
  const { user } = useUserStore();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (userFormData) => {
    await loginMutation.mutate(userFormData);
  });

  return {
    control,
    onSubmit,
  };
};
