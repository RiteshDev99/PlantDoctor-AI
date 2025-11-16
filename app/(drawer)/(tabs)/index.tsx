import {Animated, View} from "react-native";
import ScrollView = Animated.ScrollView;
import SearchBar from "@/src/components/ui/searchBar";
import FeatureCard from "@/src/components/ui/featureCard";
import SectionHeader from "@/src/components/ui/sectionHeader";
import PlantCard from "@/src/components/ui/plantCard";
import ArticleCard from "@/src/components/ui/articleCard";
import {useState} from "react";

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const plants = [
        {
            id: 1,
            name: 'Monstera',
            status: 'Healthy',
            statusColor: 'healthy',
            hasWarning: false,
            imageSource: { uri: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' }
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
            imageSource: { uri: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?w=400' }
        }
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
        }
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
                    buttonText="Scan a Leaf"
                    imageSource={{ uri: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800' }}
                    onPress={() => console.log('Scan pressed')}
                />

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