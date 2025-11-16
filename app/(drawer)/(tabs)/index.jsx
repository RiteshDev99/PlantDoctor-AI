import { TouchableOpacity, View, Text, ScrollView} from "react-native";

import SearchBar from "@/src/components/ui/searchBar";
import FeatureCard from "@/src/components/ui/featureCard";
import SectionHeader from "@/src/components/ui/sectionHeader";
import PlantCard from "@/src/components/ui/plantCard";
import ArticleCard from "@/src/components/ui/articleCard";
import {useState} from "react";
import {useRouter} from "expo-router";

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const router = useRouter();

    const plants = [
        {
            id: 1,
            name: 'Monstera',
            status: 'Healthy',
            statusColor: 'healthy',
            hasWarning: false,
            imageSource: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqK7awHfreuNem8DGGseQd0eQ25VMbu96LqQ&s' }
        },
        {
            id: 2,
            name: 'Fiddle Leaf',
            status: 'Needs attention',
            statusColor: 'warning',
            hasWarning: true,
            imageSource: { uri: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' }
        },
        {
            id: 3,
            name: 'Snake Plant',
            status: 'Healthy',
            statusColor: 'healthy',
            hasWarning: false,
            imageSource: { uri: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8fDA%3D' }
        },
        {
            id: 4,
            name: 'Monstera',
            status: 'Healthy',
            statusColor: 'healthy',
            hasWarning: false,
            imageSource: { uri: 'https://www.bspp.org.uk/wp-content/uploads/2022/11/word-image-358959-1.png' }
        },
        {
            id: 5,
            name: 'Fiddle Leaf',
            status: 'treatment',
            statusColor: 'warning',
            hasWarning: true,
            imageSource: { uri: 'https://media.istockphoto.com/id/483451251/photo/fungal-attack.jpg?s=612x612&w=0&k=20&c=PM0Lld99Io4DU6sRqemkytZUkuSF5effOJ8fhIAXwVo=' }
        },
        {
            id: 6,
            name: 'Snake Plant',
            status: 'treatment',
            statusColor: 'healthy',
            hasWarning: false,
            imageSource: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpERUDlvsvLfWPPwtb_a0VqiIcSgohIzl90A&s' }
        },
    ];

    const articles = [
        {
            id: 1,
            title: 'Preventing Powdery Mildew',
            description: 'Keep your plants healthy with these simple tips and tricks.',
            imageSource: { uri: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=400' }
        },
        {
            id: 2,
            title: 'Winter Care for Succulents',
            description: 'Learn how to protect your succulents during the colder months.',
            imageSource: { uri: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400' }
        },
        {
            id: 3,
            title: 'Preventing Powdery Mildew',
            description: 'Keep your plants healthy with these simple tips and tricks.',
            imageSource: { uri: 'https://www.thespruce.com/thmb/Pum0gNBUFzzV01rrKYKqMJrVGRY=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-houseplants-grown-in-water-4177520-hero-264670857d8b4c68a66b6d63c20e179e.jpg' }
        },
        {
            id: 4,
            title: 'Winter Care for Succulents',
            description: 'Learn how to protect your succulents during the colder months.',
            imageSource: { uri: 'https://masonhome.in/cdn/shop/files/244_3f0104fd-5f53-446e-8751-b50d5c413b8e.png?v=1752051288&width=1100' }
        },
    ];

    return (
        <ScrollView className="flex-1 bg-black">
            <View className="p-4 pt-4">
                <SearchBar
                    placeholder="Search for plants or diseases"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />

                <FeatureCard
                    title="Diagnose Your Plant"
                    description="Use your camera to identify diseases in your plants."
                    imageSource={{ uri: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800' }}
                />
                <View>
                    <TouchableOpacity
                        onPress={() => router.push('/(drawer)/(tabs)/aiDoctor')}
                        className="bg-green-500 rounded-lg py-3 items-center mb-6"
                    >
                        <Text className="text-white font-semibold text-base">Scan Leaf</Text>
                    </TouchableOpacity>
                </View>

                <SectionHeader
                    title="My Garden"
                    actionText="See All"
                    onActionPress={() => console.log('See all pressed')}
                />

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                    {plants.map(plant => (
                        <PlantCard
                            key={plant.id}
                            name={plant.name}
                            status={plant.status}
                            statusColor={plant.statusColor}
                            hasWarning={plant.hasWarning}
                            imageSource={plant.imageSource}
                            onPress={() => console.log(`${plant.name} pressed`)}
                        />
                    ))}
                </ScrollView>

                <SectionHeader
                    title="Featured Articles"
                    actionText="See All"
                    onActionPress={() => console.log('See all articles pressed')}
                />

                {articles.map(article => (
                    <ArticleCard
                        key={article.id}
                        title={article.title}
                        description={article.description}
                        imageSource={article.imageSource}
                        onPress={() => console.log(`${article.title} pressed`)}
                    />
                ))}
            </View>
        </ScrollView>
    );
}