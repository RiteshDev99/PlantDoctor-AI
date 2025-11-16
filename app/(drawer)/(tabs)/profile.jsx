import { useState } from "react";
import { View, Text, ScrollView, Alert, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import UploadSection from "@/src/components/ui/uploadSection";
import DiagnosisResult from "@/src/components/ui/diagnosisResult";
import TreatmentCard from "@/src/components/ui/treatmentCard";
import { ImageRecognitionWithGemini } from "../../../src/api/geminiApi";

const AiDoctorUI = () => {
    const [diagnosisData, setDiagnosisData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    
    const parseGeminiResponse = (text) => {
        try {
            const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const jsonText = jsonMatch[1] || jsonMatch[0];
                return JSON.parse(jsonText);
            }
            
            return {
                diagnosis: {
                    confidence: 0,
                    disease: "Analysis Complete",
                    description: text,
                    imageUri: uploadedImage
                },
                treatments: []
            };
        } catch (error) {
            console.error("Error parsing Gemini response:", error);
            return null;
        }
    };
    
    const convertImageToBase64 = async (uri) => {
        try {
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            return base64;
        } catch (error) {
            console.error('Error converting image to base64:', error);
            throw error;
        }
    };

    const handleUpload = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert(
                    'Permission Required',
                    'Sorry, we need camera roll permissions to analyze plant images.'
                );
                return;
            }
            
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.8,
            });

            if (result.canceled) {
                return;
            }

            setLoading(true);
            setUploadedImage(result.assets[0].uri);

            const base64Image = await convertImageToBase64(result.assets[0].uri);
            
            const response = await ImageRecognitionWithGemini(base64Image);

            if (response) {
                const parsedData = parseGeminiResponse(response);

                if (parsedData) {
                    parsedData.diagnosis.imageUri = result.assets[0].uri;
                    setDiagnosisData(parsedData);
                } else {
                    Alert.alert('Error', 'Failed to parse analysis results');
                }
            } else {
                Alert.alert('Error', 'Failed to analyze image');
            }

        } catch (error) {
            console.error('Upload error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    
    const handleCamera = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();

            if (status !== 'granted') {
                Alert.alert(
                    'Permission Required',
                    'Sorry, we need camera permissions to take photos.'
                );
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.8,
            });

            if (result.canceled) {
                return;
            }

            setLoading(true);
            setUploadedImage(result.assets[0].uri);
            
            const base64Image = await convertImageToBase64(result.assets[0].uri);

            const response = await ImageRecognitionWithGemini(base64Image);

            if (response) {
                const parsedData = parseGeminiResponse(response);

                if (parsedData) {
                    parsedData.diagnosis.imageUri = result.assets[0].uri;
                    setDiagnosisData(parsedData);
                } else {
                    Alert.alert('Error', 'Failed to parse analysis results');
                }
            } else {
                Alert.alert('Error', 'Failed to analyze image');
            }

        } catch (error) {
            console.error('Camera error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView className="flex-1 bg-black">
            <View className="p-6 pt-12">
                <Text className="text-white text-4xl font-bold text-center mb-2">
                    Welcome to AiDoctor
                </Text>
                <Text className="text-gray-400 text-center mb-8">
                    Upload a photo of a plant leaf to diagnose potential diseases.
                </Text>

                <UploadSection
                    onUpload={handleUpload}
                    onCamera={handleCamera}
                />

                {loading && (
                    <View className="items-center justify-center py-8">
                        <ActivityIndicator size="large" color="#4ade80" />
                        <Text className="text-gray-400 mt-4">
                            Analyzing plant image...
                        </Text>
                    </View>
                )}

                {diagnosisData && !loading && (
                    <>
                        <DiagnosisResult
                            confidence={diagnosisData.diagnosis.confidence}
                            disease={diagnosisData.diagnosis.disease}
                            description={diagnosisData.diagnosis.description}
                            imageUri={diagnosisData.diagnosis.imageUri}
                        />

                        {diagnosisData.treatments && diagnosisData.treatments.length > 0 && (
                            <>
                                <Text className="text-white text-2xl font-bold mb-4">
                                    Suggested Treatments
                                </Text>

                                {diagnosisData.treatments.map((treatment, index) => (
                                    <TreatmentCard
                                        key={index}
                                        icon={treatment.icon}
                                        iconType={treatment.iconType}
                                        title={treatment.title}
                                        description={treatment.description}
                                    />
                                ))}
                            </>
                        )}
                    </>
                )}
            </View>
        </ScrollView>
    );
};

export default AiDoctorUI;