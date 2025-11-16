import {View, Image, Text} from "react-native";

const FeatureCard = ({ title, description, imageSource }) => {
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
                
            </View>
        </View>
    );
};

export  default FeatureCard
