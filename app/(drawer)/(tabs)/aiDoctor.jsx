import { useState } from "react";
import { View, Text, ScrollView, Alert, ActivityIndicator } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Ionicons } from '@expo/vector-icons';
import UploadSection from "@/src/components/ui/uploadSection";
import DiagnosisResult from "@/src/components/ui/diagnosisResult";
import TreatmentCard from "@/src/components/ui/treatmentCard";
import { ImageRecognitionWithGemini } from "../../../src/api/geminiApi";

const AiDoctorUI = () => {
    const [diagnosisData, setDiagnosisData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    // Parse Gemini's text response into structured data
    const parseGeminiResponse = (text, imageUri) => {
        try {
            // Remove markdown code blocks if present
            let cleanText = text.trim();
            cleanText = cleanText.replace(/```json\n?/g, '').replace(/```\n?/g, '');

            // Try to find JSON object
            const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);

                // Check if it's an error response (non-plant image)
                if (parsed.error) {
                    Alert.alert(
                        'Invalid Image',
                        parsed.message,
                        [{ text: 'OK', style: 'default' }]
                    );
                    return null;
                }

                // Add the uploaded image to diagnosis
                if (parsed.diagnosis) {
                    parsed.diagnosis.imageUri = imageUri;
                }

                return parsed;
            }

            // If no JSON found, treat as plain text response
            Alert.alert(
                'Analysis Failed',
                'Unable to analyze the image. Please upload a clear image of a plant leaf.'
            );
            return null;

        } catch (error) {
            console.error("Error parsing Gemini response:", error);
            Alert.alert(
                'Error',
                'Failed to process the analysis results. Please try again.'
            );
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

            // Reset previous data before starting new analysis
            setDiagnosisData(null);
            setUploadedImage(null);
            setLoading(true);

            const currentImageUri = result.assets[0].uri;
            const base64Image = await convertImageToBase64(currentImageUri);

            const response = await ImageRecognitionWithGemini(base64Image);

            if (response) {
                const parsedData = parseGeminiResponse(response, currentImageUri);

                if (parsedData) {
                    // Only set the image and data if parsing was successful
                    setUploadedImage(currentImageUri);
                    setDiagnosisData(parsedData);
                } else {
                    // If parsing failed (wrong image), don't set the image
                    setUploadedImage(null);
                    setDiagnosisData(null);
                }
            } else {
                Alert.alert('Error', 'Failed to analyze image. Please try again.');
                setUploadedImage(null);
                setDiagnosisData(null);
            }

        } catch (error) {
            console.error('Upload error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
            setUploadedImage(null);
            setDiagnosisData(null);
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

            // Reset previous data before starting new analysis
            setDiagnosisData(null);
            setUploadedImage(null);
            setLoading(true);

            const currentImageUri = result.assets[0].uri;
            const base64Image = await convertImageToBase64(currentImageUri);

            const response = await ImageRecognitionWithGemini(base64Image);

            if (response) {
                const parsedData = parseGeminiResponse(response, currentImageUri);

                if (parsedData) {
                    // Only set the image and data if parsing was successful
                    setUploadedImage(currentImageUri);
                    setDiagnosisData(parsedData);
                } else {
                    // If parsing failed (wrong image), don't set the image
                    setUploadedImage(null);
                    setDiagnosisData(null);
                }
            } else {
                Alert.alert('Error', 'Failed to analyze image. Please try again.');
                setUploadedImage(null);
                setDiagnosisData(null);
            }

        } catch (error) {
            console.error('Camera error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
            setUploadedImage(null);
            setDiagnosisData(null);
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
                            confidence={diagnosisData.diagnosis?.confidence}
                            disease={diagnosisData.diagnosis?.disease}
                            description={diagnosisData.diagnosis?.description}
                            imageUri={diagnosisData.diagnosis?.imageUri}
                            scientificName={diagnosisData.diagnosis?.scientificName}
                            severity={diagnosisData.diagnosis?.severity}
                            plantType={diagnosisData.diagnosis?.plantType}
                        />

                        {/* Symptoms Section */}
                        {diagnosisData.symptoms && diagnosisData.symptoms.length > 0 && (
                            <View className="bg-gray-800 rounded-2xl p-4 mb-4">
                                <Text className="text-white text-xl font-bold mb-3">
                                    Symptoms Observed
                                </Text>
                                {diagnosisData.symptoms.map((symptom, index) => (
                                    <View key={index} className="flex-row mb-2">
                                        <Text className="text-green-400 mr-2">•</Text>
                                        <Text className="text-gray-300 text-sm flex-1">
                                            {symptom}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        {/* Causes Section */}
                        {diagnosisData.causes && diagnosisData.causes.length > 0 && (
                            <View className="bg-gray-800 rounded-2xl p-4 mb-4">
                                <Text className="text-white text-xl font-bold mb-3">
                                    Possible Causes
                                </Text>
                                {diagnosisData.causes.map((cause, index) => (
                                    <View key={index} className="flex-row mb-2">
                                        <Text className="text-yellow-400 mr-2">⚠</Text>
                                        <Text className="text-gray-300 text-sm flex-1">
                                            {cause}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        {/* Immediate Actions */}
                        {diagnosisData.immediateActions && diagnosisData.immediateActions.length > 0 && (
                            <View className="bg-red-900/20 border border-red-500 rounded-2xl p-4 mb-4">
                                <View className="flex-row items-center mb-3">
                                    <Ionicons name="alert-circle" size={24} color="#ef4444" />
                                    <Text className="text-red-400 text-xl font-bold ml-2">
                                        Immediate Actions Required
                                    </Text>
                                </View>
                                {diagnosisData.immediateActions.map((action, index) => (
                                    <View key={index} className="flex-row mb-2">
                                        <Text className="text-red-400 mr-2 font-bold">
                                            {index + 1}.
                                        </Text>
                                        <Text className="text-gray-300 text-sm flex-1">
                                            {action}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        {/* Treatments Section */}
                        {diagnosisData.treatments && diagnosisData.treatments.length > 0 && (
                            <>
                                <Text className="text-white text-2xl font-bold mb-4">
                                    Treatment Options
                                </Text>

                                {diagnosisData.treatments.map((treatment, index) => (
                                    <TreatmentCard
                                        key={index}
                                        icon={treatment.icon}
                                        iconType={treatment.iconType}
                                        title={treatment.title}
                                        description={treatment.description}
                                        category={treatment.category}
                                    />
                                ))}
                            </>
                        )}

                        {/* Prognosis Section */}
                        {diagnosisData.prognosis && (
                            <View className="bg-blue-900/20 border border-blue-500 rounded-2xl p-4 mb-4">
                                <View className="flex-row items-center mb-2">
                                    <Ionicons name="analytics" size={20} color="#3b82f6" />
                                    <Text className="text-blue-400 text-lg font-bold ml-2">
                                        Prognosis
                                    </Text>
                                </View>
                                <Text className="text-gray-300 text-sm">
                                    {diagnosisData.prognosis}
                                </Text>
                            </View>
                        )}

                        {/* Spread Risk */}
                        {diagnosisData.spreadRisk && (
                            <View className="bg-orange-900/20 border border-orange-500 rounded-2xl p-4 mb-4">
                                <View className="flex-row items-center mb-2">
                                    <Ionicons name="warning" size={20} color="#f97316" />
                                    <Text className="text-orange-400 text-lg font-bold ml-2">
                                        Spread Risk
                                    </Text>
                                </View>
                                <Text className="text-gray-300 text-sm">
                                    {diagnosisData.spreadRisk}
                                </Text>
                            </View>
                        )}

                        {/* Additional Notes */}
                        {diagnosisData.additionalNotes && (
                            <View className="bg-gray-800 rounded-2xl p-4 mb-4">
                                <View className="flex-row items-center mb-2">
                                    <Ionicons name="information-circle" size={20} color="#4ade80" />
                                    <Text className="text-green-400 text-lg font-bold ml-2">
                                        Additional Notes
                                    </Text>
                                </View>
                                <Text className="text-gray-300 text-sm">
                                    {diagnosisData.additionalNotes}
                                </Text>
                            </View>
                        )}
                    </>
                )}
            </View>
        </ScrollView>
    );
};

export default AiDoctorUI;