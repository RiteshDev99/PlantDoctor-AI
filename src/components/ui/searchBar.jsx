import {TextInput, View} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const SearchBar = ({ placeholder = "Search", onChangeText, value }) => {
    return (
        <View className="flex-row items-center bg-zinc-900 rounded-xl px-4 py-3 mb-4">
            <Feather name="search" size={20} color="#22c55e" />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#71717a"
                className="flex-1 ml-3 text-white text-base"
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

export default SearchBar