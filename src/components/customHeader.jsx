import { StyleSheet, View, Text,  TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const CustomHeader = () => {

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.header}>
                <View className='flex-row items-center gap-x-3' >
                <TouchableOpacity className=' flex h-10 w-10 bg-[#fae5d4] rounded-full items-center justify-center' >
                    <FontAwesome6 name="user" size={24} color="#f2c9b3" />
                </TouchableOpacity>
                    <Text className='text-xl text-[#fff]'>Good Morning, Alex</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="white" />       
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#121212",
    },
    header: {
        height: 56,
        width: "100%",
        backgroundColor: "#121212",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "600",
    },
});

export default CustomHeader;
