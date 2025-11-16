import {View, Image, Text, TouchableOpacity} from "react-native";

const FeatureCard = ({ title, description, buttonText, onPress, imageSource }) => {
    return (
        <View className="rounded-2xl overflow-hidden mb-6">
            <Image
                source={imageSource}
                className="w-full h-48"
                resizeMode="cover"
            />
            <View className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <Text className="text-white text-xl font-bold mb-2">{title}</Text>
                <Text className="text-gray-300 text-sm mb-3">{description}</Text>
                <TouchableOpacity
                    onPress={onPress}
                    className="bg-green-500 rounded-lg py-3 items-center"
                >
                    <Text className="text-white font-semibold text-base">{buttonText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export  default FeatureCard
