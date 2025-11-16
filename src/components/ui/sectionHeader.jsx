import {View,Text, TouchableOpacity} from "react-native";

const SectionHeader = ({ title, actionText, onActionPress }) => {
    return (
        <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-2xl font-bold">{title}</Text>
            {actionText && (
                <TouchableOpacity onPress={onActionPress}>
                    <Text className="text-green-500 text-base font-semibold">{actionText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SectionHeader