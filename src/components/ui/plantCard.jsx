import {TouchableOpacity, View, Text, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const PlantCard = ({ name, status, imageSource, statusColor, hasWarning, onPress }) => {
    const statusColors = {
        healthy: 'text-green-500',
        warning: 'text-yellow-500',
        danger: 'text-red-500'
    };

    return (
        <TouchableOpacity onPress={onPress} className="mr-4">
            <View className="w-32 bg-zinc-800 rounded-2xl overflow-hidden">
                <View className="relative">
                    <Image
                        source={imageSource}
                        className="w-full h-32"
                        resizeMode="cover"
                    />
                    {hasWarning && (
                        <View className="absolute top-2 right-2 bg-yellow-500 rounded-full w-6 h-6 items-center justify-center">
                            <Ionicons name="warning" size={16} color="#000" />
                        </View>
                    )}
                </View>
                <View className="p-3">
                    <Text className="text-white font-semibold text-base mb-1">{name}</Text>
                    <Text className={`text-sm ${statusColors[statusColor]}`}>{status}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PlantCard