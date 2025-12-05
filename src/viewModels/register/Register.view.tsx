import { router } from "expo-router";
import { FC } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button } from "../../shared/components/Button";
import { HeaderForm } from "../../shared/components/HeaderForm";
import { InputController } from "../../shared/components/InputController";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { useRegisterViewModel } from "./useRegister.viewModel";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  control,
  errors,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <HeaderForm
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />
        <InputController
          control={control}
          name="name"
          leftIcon="person-outline"
          label="NOME"
          placeholder="Seu nome completo"
        />
        <InputController
          control={control}
          name="phone"
          leftIcon="call-outline"
          label="TELEFONE"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-grays-500 font-lato-bold text-base mt-6">
          Acesso
        </Text>

        <InputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="mail@example.com.br"
        />
        <InputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          placeholder="Sua senha"
          secureTextEntry
        />
        <InputController
          control={control}
          name="confirmPassword"
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          placeholder="Confirme sua senha"
          secureTextEntry
        />

        <Button onPress={onSubmit} rightIcon="arrow-forward">
          Cadastrar
        </Button>

        <View className="mt-16">
          <Text className="text-base mb-6 text-gray-300">
            Já tem uma conta?
          </Text>
          <Button
            variant="outlined"
            onPress={() => router.push("/(public)/login")}
          >
            Login
          </Button>
        </View>
      </ScrollView>
    </KeyboardContainer>
  );
};
