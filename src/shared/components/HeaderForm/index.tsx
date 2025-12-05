import { Image, Text, View } from "react-native";

interface HeaderFormProps {
  title: string;
  subtitle: string;
}
export const HeaderForm = ({ subtitle, title }: HeaderFormProps) => {
  return (
    <View className="items-center justify-center">
      <Image
        source={require("../../../assets/images/Logo.png")}
        resizeMode="contain"
        className="w-[80px] h-[60px] mb-8"
      />
      <Text className="text-grays-500 font-lato-bold text-2xl pb-2">
        {title}
      </Text>
      <Text className="text-grays-300 font-lato-regular text-sm">
        {subtitle}
      </Text>
    </View>
  );
};
