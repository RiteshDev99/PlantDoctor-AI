import {View,Image, Text} from "react-native";

const DiagnosisResult = ({ confidence, disease, description, imageUri }) => (
    <View className="bg-gray-800 rounded-2xl p-4 mb-4">
        <View className="flex-row items-center mb-2">
            {imageUri && (
                <Image
                    source={{ uri: imageUri }}
                    className="w-20 h-20 rounded-xl mr-4"
                />
            )}
            <View className="flex-1">
                <Text className="text-green-400 text-sm font-semibold mb-1">
                    {confidence}% Confident
                </Text>
                <Text className="text-white text-xl font-bold mb-1">
                    {disease}
                </Text>
                <Text className="text-gray-400 text-sm">
                    {description}
                </Text>
            </View>
        </View>
    </View>
);

export default DiagnosisResult