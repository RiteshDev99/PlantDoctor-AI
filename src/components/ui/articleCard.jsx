import {TouchableOpacity,View, Text, Image} from "react-native";

const ArticleCard = ({ title, description, imageSource, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex-row bg-zinc-900 rounded-2xl p-4 mb-4">
            <Image
                source={imageSource}
                className="w-20 h-20 rounded-xl"
                resizeMode="cover"
            />
            <View className="flex-1 ml-4 justify-center">
                <Text className="text-white text-base font-bold mb-2">{title}</Text>
                <Text className="text-gray-400 text-sm" numberOfLines={2}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export  default ArticleCard