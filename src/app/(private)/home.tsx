import { Text, View } from "react-native";
import { Button } from "../../shared/components/Button";
import { useUserStore } from "../../shared/store/user-store";

export default function Home() {
  const { user, logout } = useUserStore();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-grays-500 text-xl">{user.id}</Text>
      <Text className="text-grays-500 text-xl">{user.email}</Text>
      <Text className="text-grays-500 text-xl">{user.name}</Text>
      <View className="items-center justify-center px-[40px] mt-4">
        <Button onPress={logout} rightIcon="arrow-forward">
          Deslogar
        </Button>
      </View>
    </View>
  );
}
