import { router } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";
import { Button } from "../../shared/components/Button";
import { HeaderForm } from "../../shared/components/HeaderForm";
import { InputController } from "../../shared/components/InputController";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useLoginViewModel } from "./useLogin.viewModel";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
          <HeaderForm
            subtitle="Informe seu e-mail e senha"
            title="Acesse sua conta"
          />

          <InputController
            leftIcon="mail-outline"
            label="E-MAIL"
            control={control}
            placeholder="mail@example.com.br"
            name="email"
          />

          <InputController
            leftIcon="lock-closed-outline"
            control={control}
            name="password"
            label="SENHA"
            placeholder="Sua senha"
            secureTextEntry
          />

          <Button className="mt-6" rightIcon="arrow-forward" onPress={onSubmit}>
            Login
          </Button>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>
          <Button
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/(public)/register")}
          >
            Registro
          </Button>
        </View>
      </View>
    </KeyboardContainer>
  );
};
