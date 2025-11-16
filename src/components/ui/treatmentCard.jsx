import {Text, View} from "react-native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const TreatmentCard = ({ icon, iconType, title, description }) => (
    <View className="bg-gray-800 rounded-2xl p-4 mb-3">
        <View className="flex-row items-start">
            <View className="bg-green-900 rounded-full w-12 h-12 items-center justify-center mr-4">
                {iconType === 'material' ? (
                    <MaterialCommunityIcons name={icon} size={24} color="#4ade80" />
                ) : (
                    <Ionicons name={icon} size={24} color="#4ade80" />
                )}
            </View>
            <View className="flex-1">
                <Text className="text-white text-lg font-bold mb-1">
                    {title}
                </Text>
                <Text className="text-gray-400 text-sm">
                    {description}
                </Text>
            </View>
        </View>
    </View>
);

export default TreatmentCard