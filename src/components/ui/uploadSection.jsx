import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UploadSection = ({ onUpload, onCamera }) => (
    <View className="border-2 border-dashed border-gray-700 rounded-3xl p-8 mb-6 items-center">
        <View className="bg-green-900 rounded-full w-16 h-16 items-center justify-center mb-4">
            <Ionicons name="camera" size={32} color="#4ade80" />
            <View className="absolute -top-1 -right-1 bg-green-400 rounded-full w-6 h-6 items-center justify-center">
                <Ionicons name="add" size={18} color="#000" />
            </View>
        </View>
        <Text className="text-white text-xl font-bold mb-2">
            Tap to Upload or Take a Photo
        </Text>
        <Text className="text-gray-400 text-center mb-6">
            For best results, place the leaf on a plain background with good lighting.
        </Text>

        <View className="flex-row gap-3">
            <TouchableOpacity
                onPress={onUpload}
                className="bg-green-400 rounded-full px-8 py-4 flex-1"
                activeOpacity={0.8}
            >
                <Text className="text-black font-bold text-base text-center">
                    Upload Image
                </Text>
            </TouchableOpacity>

            {onCamera && (
                <TouchableOpacity
                    onPress={onCamera}
                    className="bg-gray-700 rounded-full px-8 py-4 flex-1"
                    activeOpacity={0.8}
                >
                    <Text className="text-white font-bold text-base text-center">
                        Take Plant Photo
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    </View>
);

export default UploadSection;