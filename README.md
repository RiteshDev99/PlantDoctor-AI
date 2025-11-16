# 🌱 Plant Doctor - AI Powered Plant Disease Detection

> **An intelligent mobile app that diagnoses plant diseases using AI-powered image recognition, built with Expo, React Native, and Google Gemini API.**

A production-ready React Native application that helps users identify and treat plant diseases by analyzing leaf images with advanced AI models. Get instant disease diagnosis, treatment recommendations, and care tips.

---

## 🎯 About Plant Doctor

**Plant Doctor** is an innovative mobile application designed for plant enthusiasts and farmers to:
- ✅ Identify plant diseases from leaf images using AI
- ✅ Get detailed disease analysis and severity assessment
- ✅ Receive organic and chemical treatment recommendations
- ✅ Browse featured plant care articles
- ✅ Manage a personal plant garden
- ✅ Access real-time diagnostic reports

The app leverages **Google Gemini 2.0 API** for accurate plant disease recognition and provides actionable treatment plans with expert advice.

---

## 📱 App Screens & Features

### Home Screen (Dashboard)
The main landing page showcases:
- **User Greeting**: Personalized welcome message with profile avatar
- **Search Bar**: Quick search for plants or diseases
- **Diagnose Section**: "Diagnose Your Plant" feature card with compelling call-to-action
- **Scan Leaf Button**: Green primary action button for initiating diagnosis
- **My Garden Section**: Grid of tracked plants with health status indicators
  - **Healthy** (Green): Plants in good condition
  - **Needs Attention** (Yellow): Plants requiring care
  - **Treatment** (Red): Plants needing immediate treatment
- **Featured Articles**: Curated plant care content
- **Navigation**: Bottom tab bar with Home and Doctor tabs

**Visual Components:**
- Dark theme with green accent color (#22C55E)
- Plant cards with thumbnail images
- Status badges with color coding
- Article cards with images and descriptions

### AI Doctor Screen (Diagnosis)
The core feature for plant disease detection:
- **Welcome Header**: "Welcome to AiDoctor" with instructional text
- **Upload/Camera Section**:
  - Camera icon in circular button with plus indicator
  - "Tap to Upload or Take a Photo" instruction
  - Tips for best results (plain background, good lighting)
  - **Upload Image Button**: Access device gallery
  - **Take Plant Photo Button**: Direct camera access
- **Analysis Process**:
  - Shows loading spinner during API call
  - Real-time status updates
- **Results Display**:
  - Disease name and confidence percentage
  - Plant species identification
  - Severity assessment
  - Visible symptoms list
  - Root causes analysis
  - Treatment recommendations (organic & chemical)

**Key Features:**
- **Image Recognition**: AI-powered leaf disease identification
- **Detailed Analysis**: Comprehensive disease information
- **Multiple Treatments**: Both organic and chemical solutions
- **Prevention Tips**: Actionable preventive measures
- **Care Instructions**: Plant-specific care guidelines

---

## ✨ Key Features

### 🤖 AI-Powered Diagnosis
- **Advanced Image Recognition**: Uses Google Gemini 2.0 Flash for accurate plant disease identification
- **Confidence Scoring**: Get confidence levels (0-100%) for diagnosis accuracy
- **Disease Classification**: Identifies specific diseases with scientific names
- **Multi-model Analysis**: Considers multiple disease indicators

### 📊 Comprehensive Analysis
- **Symptom Detection**: Detailed visual symptom identification
- **Severity Assessment**: Classify disease severity (Mild, Moderate, Severe)
- **Plant Type Recognition**: Identifies the plant species from the image
- **Environmental Factors**: Considers humidity, temperature, and conditions
- **Root Cause Analysis**: Identifies contributing factors to disease

### 💊 Treatment Solutions
- **Organic Treatments**: Eco-friendly solutions using natural methods
  - Neem oil applications
  - Natural predators and beneficial insects
  - Cultural practices
- **Chemical Treatments**: Professional-grade fungicide/pesticide recommendations
  - Specific product recommendations
  - Application instructions
  - Safety precautions
- **Prevention Tips**: Detailed preventive measures
- **Care Instructions**: Plant-specific care guidelines

### 📚 Knowledge Base
- **Featured Articles**: Plant care tips and disease prevention guides
- **Plant Database**: Comprehensive plant information
- **Search Functionality**: Quickly find plants or diseases
- **Educational Content**: Learn about common plant diseases

### 🌿 Garden Management
- **Plant Tracking**: Monitor multiple plants in your garden
- **Health Status**: Visual indicators for plant health (Healthy, Warning, Needs Treatment)
- **Personal Records**: Keep history of analyzed plants
- **Multi-plant Support**: Manage different plant types

---

## 🛠 Tech Stack

### Frontend & UI
- **React Native 0.79.6** - Cross-platform mobile framework
- **Expo 53.0.22** - React Native development platform
- **Expo Router 5.1.5** - File-based navigation (Tabs + Drawer)
- **NativeWind 4.1.23** - Tailwind CSS for React Native
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### State Management & Storage
- **Redux Toolkit 2.8.2** - Modern Redux state management
- **React-Redux 9.2.0** - React bindings for Redux
- **Appwrite** - Backend as a Service (configured in conf.ts)

### APIs & Services
- **Google Gemini 2.0 API** - AI-powered image recognition and analysis
- **Expo Image Picker 16.1.4** - Camera and gallery access
- **Expo File System 18.1.11** - File handling and Base64 encoding

### UI Components & Icons
- **Expo Vector Icons** - Material Design and FontAwesome icons
- **Expo Image 2.4.0** - Optimized image component
- **Expo Blur 14.1.5** - Blur effect component
- **React Navigation** - Advanced navigation setup
  - `@react-navigation/drawer 7.5.7` - Drawer navigation
  - `@react-navigation/bottom-tabs 7.3.10` - Bottom tab navigation
  - `@react-navigation/native 7.1.6` - Core navigation

### Development Tools
- **TypeScript 5.8.3** - Type safety for TypeScript files
- **Babel 7.25.2** - JavaScript transpiler
- **ESLint 9.25.0** - Code quality and linting
- **Metro Bundler** - React Native bundler (via Expo)

### Notifications & System
- **Expo Haptics 14.1.4** - Haptic feedback
- **Expo Status Bar 2.2.3** - Status bar management
- **React Native Safe Area Context 5.4.0** - Safe area handling

---

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- Google Gemini API Key ([Get one here](https://ai.google.dev/))
- Appwrite account (optional, for backend features)

### Step 1: Clone & Install
```bash
# Clone the repository
git clone <your-repo-url>
cd PlantDoctor-AI

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Step 2: Environment Setup
Create a `.env` file in the project root:
```env
EXPO_PUBLIC_API_URL=https://generativelanguage.googleapis.com/v1beta/models
EXPO_PUBLIC_API_Key=YOUR_GEMINI_API_KEY_HERE
EXPO_PUBLIC_APPWRITE_URL=your_appwrite_url
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

### Step 3: Run the App
```bash
# Start Expo development server
npx expo start

# For Android
npx expo run:android
# or press 'a' in the terminal

# For iOS
npx expo run:ios
# or press 'i' in the terminal

# For Web
npx expo start --web
```

---

## 🚀 Development

### Available Scripts

```bash
# Start development server with hot reload
npm start

# Lint code
npm run lint

# Build for Android
npm run android

# Build for iOS
npm run ios

# Build for Web
npm run web

# Production build with EAS
eas build
```

### Hot Reload
The app supports fast refresh during development. Simply save your changes, and they'll reflect in the emulator/device instantly.

### Development Tips
- Use React DevTools for component debugging
- Use Redux DevTools for state inspection
- Use Expo DevTools for network monitoring
- Test on both Android and iOS devices

---

## 📂 Project Structure

```
PlantDoctor-AI/
├── app/                          # Expo Router navigation
│   ├── _layout.tsx              # Root layout wrapper
│   └── (drawer)/                # Drawer navigator
│       ├── _layout.tsx          # Drawer configuration with custom menu
│       └── (tabs)/              # Tab navigator
│           ├── _layout.tsx      # Tab configuration (Home, Doctor)
│           ├── index.jsx        # Home/Dashboard screen
│           └── aiDoctor.jsx     # AI Diagnosis screen
│
├── src/
│   ├── api/
│   │   └── geminiApi.js         # Google Gemini API integration
│   │       • ImageRecognitionWithGemini() - Main API call
│   │       • Base64 encoding
│   │       • Error handling
│   │
│   ├── components/
│   │   ├── customHeader.jsx     # Custom app header component
│   │   └── ui/                  # Reusable UI components
│   │       ├── searchBar.jsx    # Search input with icon
│   │       ├── plantCard.jsx    # Individual plant card
│   │       ├── articleCard.jsx  # Article card component
│   │       ├── featureCard.jsx  # Feature highlight card
│   │       ├── diagnosisResult.jsx  # Diagnosis result display
│   │       ├── treatmentCard.jsx    # Treatment recommendation card
│   │       ├── uploadSection.jsx    # Upload/Camera section UI
│   │       ├── sectionHeader.jsx    # Section header with "See All" link
│   │       ├── customButton.tsx     # Reusable button component
│   │       └── searchBar.jsx        # Search functionality
│   │
│   ├── conf/
│   │   └── conf.ts              # Configuration & environment setup
│   │       • Appwrite URL, Project ID, Database ID
│   │       • Collection configuration
│   │
│   ├── store/
│   │   └── store.ts             # Redux store configuration
│   │       • Toolkit configureStore
│   │       • RootState & AppDispatch types
│   │       • Ready for feature slices
│   │
│   └── utils/
│       └── plantDiseasePrompt.js # Gemini API prompt template
│           • Detailed plant analysis instructions
│           • JSON response structure
│           • Disease classification
│           • Treatment recommendations format
│
├── assets/
│   ├── images/                  # App icons and splash screens
│   │   ├── icon.png             # App icon (1024x1024)
│   │   ├── adaptive-icon.png    # Android adaptive icon
│   │   ├── favicon.png          # Web favicon
│   │   └── splash-icon.png      # Splash screen icon
│   └── fonts/                   # Custom fonts
│       └── SpaceMono-Regular.ttf
│
├── android/                     # Android native configuration
│   ├── build.gradle             # Android build configuration
│   ├── gradle.properties        # Gradle properties
│   └── app/
│       ├── build.gradle
│       ├── debug.keystore       # Debug keystore
│       └── src/main/
│           ├── AndroidManifest.xml
│           └── res/
│
├── ios/                         # iOS native configuration
│   ├── Podfile                  # CocoaPods dependencies
│   ├── AiDoctor/
│   │   ├── AppDelegate.swift    # iOS app delegate
│   │   ├── Info.plist           # iOS configuration
│   │   └── Assets/
│   └── Pods/                    # iOS dependencies
│
├── node_modules/                # Project dependencies (auto-generated)
├── .env                         # Environment variables (not in git)
├── .env.simple                  # Example env file
├── .gitignore                   # Git ignore rules
├── .eslintrc                    # ESLint configuration
├── app.json                     # Expo app configuration
│   • App name: "AiDoctor"
│   • Platform configuration
│   • Icon & splash settings
│   • Plugin configuration
├── package.json                 # Dependencies & scripts
├── package-lock.json            # Lock file for dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
│   • Color scheme
│   • Spacing
│   • Custom utilities
├── babel.config.js              # Babel configuration
├── metro.config.js              # Metro bundler configuration
├── global.css                   # Global Tailwind styles
├── eslint.config.js             # ESLint rules
├── compile.sh                   # Build script
├── expo-env.d.ts                # Expo TypeScript definitions
├── nativewind-env.d.ts          # NativeWind TypeScript definitions
└── README.md                    # This file
```

---

## 🔌 API Integration

### Google Gemini API

The app uses **Google Gemini 2.0 Flash** for plant disease recognition:

**API Endpoint:**
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY
```

**Implementation in `src/api/geminiApi.js`:**
```javascript
export async function ImageRecognitionWithGemini(base64Image, model = "gemini-2.0-flash") {
  const body = {
    contents: [{
      parts: [
        {
          inline_data: {
            mime_type: "image/jpeg",
            data: base64Image,
          },
        },
        {
          text: Plant_ANALYSIS_PROMPT,
        },
      ],
    }],
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=YOUR_API_KEY`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const json = await response.json();
  return json.candidates[0].content.parts[0].text;
}
```

**Features:**
- Base64 image encoding from device files
- Multi-modal input (text prompt + image)
- JSON response parsing
- Error handling for non-plant images
- Confidence scoring

### Response Format

**Successful Response:**
```json
{
  "diagnosis": {
    "confidence": 85,
    "disease": "Powdery Mildew",
    "scientificName": "Erysiphe cichoracearum",
    "plantType": "Rose (Rosa spp.)",
    "severity": "Moderate",
    "description": "Fungal infection causing white powdery coating on leaves. Thrives in warm, dry conditions with poor air circulation."
  },
  "symptoms": [
    "White powder on leaves and stems",
    "Leaf curling and distortion",
    "Stunted growth",
    "Flower buds may be affected"
  ],
  "causes": [
    "Fungal pathogen Erysiphe species",
    "High humidity with cool nights",
    "Poor air circulation",
    "Warm daytime temperatures (60-80°F)",
    "Overhead watering"
  ],
  "treatments": [
    {
      "icon": "leaf",
      "iconType": "material",
      "title": "Organic Treatment",
      "category": "Biological Control",
      "steps": [
        "Apply neem oil spray every 7 days",
        "Use sulfur dust in morning hours",
        "Improve air circulation by pruning",
        "Water only at soil level",
        "Remove affected leaves"
      ]
    },
    {
      "icon": "beaker",
      "iconType": "material",
      "title": "Chemical Treatment",
      "category": "Fungicide",
      "steps": [
        "Use triazole-based fungicides",
        "Apply sulfur or potassium bicarbonate",
        "Follow product label instructions",
        "Repeat every 7-10 days",
        "Wear protective equipment"
      ]
    }
  ],
  "prevention": [
    "Maintain proper plant spacing",
    "Water at soil level only",
    "Ensure good air circulation",
    "Monitor plants regularly",
    "Remove infected leaves immediately"
  ]
}
```

**Error Response (Non-plant image):**
```json
{
  "error": true,
  "message": "I am specialized in detecting plant and leaf diseases only. Please upload a clear image of a plant leaf for accurate diagnosis."
}
```

### API Prompt Structure

The `plantDiseasePrompt.js` contains a detailed instruction prompt that:
1. Validates image contains plant material
2. Analyzes disease presence
3. Identifies specific pathogens
4. Assesses severity
5. Provides treatments
6. Returns structured JSON

---

## 🎨 Styling with NativeWind & Tailwind

The app uses **NativeWind**, a Tailwind CSS wrapper for React Native, enabling Tailwind utility classes in React Native components.

### Example Component Styling
```jsx
import { View, Text, TouchableOpacity } from 'react-native';

export default function DiagnosisScreen() {
  return (
    <View className="flex-1 bg-black">
      <Text className="text-white text-2xl font-bold mb-4 px-4 pt-4">
        Diagnose Your Plant
      </Text>
      <TouchableOpacity className="bg-green-500 rounded-lg mx-4 py-3">
        <Text className="text-white font-semibold text-center">
          Scan Leaf
        </Text>
      </TouchableOpacity>
    </View>
  );
}
```

### Color Scheme
- **Background**: `bg-black` - Dark theme for easy viewing
- **Primary**: `bg-green-500` (#22C55E) - Plant health indicator
- **Text**: `text-white` - High contrast
- **Warning**: `bg-yellow-500` - Needs attention
- **Error**: `bg-red-500` - Treatment needed

### Custom Tailwind Configuration (`tailwind.config.js`)
```javascript
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color definitions
      },
      spacing: {
        // Custom spacing values
      },
    },
  },
  plugins: [],
};
```

### Common Patterns
```jsx
// Flex layouts
<View className="flex-1">...</View>
<View className="flex-row justify-between items-center">...</View>

// Padding & Margin
<View className="p-4 mb-4">...</View>

// Responsive sizing
<Text className="text-sm md:text-lg">...</Text>

// Colors
className="bg-black text-white border-green-500"
```

---

## 🔄 State Management with Redux

Redux Toolkit manages global app state for scalability.

### Current Store Configuration (`src/store/store.ts`)
```typescript
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Add feature slices here as the app grows
    // Example: diagnosis: diagnosisSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

### Redux Setup in App
1. **Store Creation**: Using `configureStore` from Redux Toolkit
2. **Provider Setup**: Redux Provider wraps the app in `_layout.tsx`
3. **Ready for Slices**: Feature slices can be added as:
   - `diagnosisSlice` - Store diagnosis results
   - `gardensSlice` - Manage plant garden
   - `userSlice` - User profile and preferences

### Planned Redux Features
- **Diagnosis Results Cache**: Store recent diagnoses
- **User Plants**: Persist garden data
- **Search History**: Remember past searches
- **Favorites**: Bookmark articles and solutions

---

## 📱 Navigation Structure

### Expo Router Setup

The app uses file-based routing with Expo Router v5+:

```
File Structure → Routes:
app/_layout.tsx → Root layout
app/(drawer)/_layout.tsx → Drawer navigator
app/(drawer)/(tabs)/_layout.tsx → Tabs inside drawer
app/(drawer)/(tabs)/index.jsx → /home (Home screen)
app/(drawer)/(tabs)/aiDoctor.jsx → /doctor (Doctor screen)
```

### Navigation Flow
```
Root (_layout.tsx)
│
├── Stack Navigator
│   └── Drawer (_layout.tsx)
│       └── Tabs (_layout.tsx)
│           ├── Home (index.jsx)
│           │   ├── Search Bar
│           │   ├── Feature Card
│           │   ├── Plant Gallery
│           │   └── Articles
│           │
│           └── AI Doctor (aiDoctor.jsx)
│               ├── Upload Section
│               ├── Camera Access
│               └── Results Display
│
└── Custom Drawer Menu
    ├── User Profile
    ├── Navigation Items
    └── Settings
```

### Tab Navigation
- **Home**: Dashboard with garden and articles
- **Doctor**: AI diagnosis tool

### Drawer Menu
- User profile section
- Navigation to different sections
- Settings and preferences
- Logout option

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Image Permission Issues
```javascript
// Request permissions before accessing camera/gallery
const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (status !== 'granted') {
  Alert.alert('Permission Required', 'Camera permissions are needed');
  return;
}
```

**Solution:**
- Check iOS: `Info.plist` camera/photo permissions
- Check Android: `AndroidManifest.xml` permissions
- Test on real device (simulators may have issues)

#### API Key Issues
- Ensure `EXPO_PUBLIC_API_Key` is set in `.env`
- Verify API key has access to Gemini API
- Check API quotas and billing settings on Google Cloud Console
- Use `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`

**Solution:**
```bash
# Verify env variable is loaded
echo $EXPO_PUBLIC_API_Key

# Check if .env is in gitignore
cat .gitignore
```

#### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Clean Expo cache
npx expo prebuild --clean

# Rebuild for Android
npx expo run:android
```

#### Image Upload Freezing
- Compress image quality (set to 0.8 in picker)
- Limit image dimensions (4:3 aspect ratio)
- Show loading indicator during conversion

### Debug Mode
```bash
# Run with debugging
npx expo start --dev-client

# Check logs
npx expo logs
```

---

## 🚀 Deployment

### Android Deployment

**Generate Keystore:**
```bash
# Create keystore for signing
keytool -genkey -v -keystore key.jks \
  -keyalg RSA -keysize 2048 -validity 10000
```

**Build APK:**
```bash
# Using EAS (Expo Application Services)
eas build --platform android

# Or use Android Studio
npx expo run:android --variant release
```

### iOS Deployment

**Prerequisites:**
- Apple Developer account
- Xcode installed
- Apple certificates

**Build for iOS:**
```bash
# Using EAS (recommended)
eas build --platform ios

# Or use Xcode
npx expo run:ios
```

### Web Deployment

**Build for Web:**
```bash
# Generate static export
npx expo export --platform web

# Deploy to Netlify, Vercel, or GitHub Pages
npm run web
```

### EAS Configuration

Create `eas.json`:
```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": false
      }
    }
  }
}
```

---

## 📊 Performance Optimization

### Image Handling
- **Compression**: Images compressed to 0.8 quality in picker
- **Base64 Encoding**: Efficient data transmission to API
- **Caching**: Expo Image automatically caches downloaded images
- **Lazy Loading**: Load images only when visible

```javascript
// Optimize image loading
const result = await ImagePicker.launchImageLibraryAsync({
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.8, // Compression ratio
});
```

### State Management Optimization
- **Redux DevTools**: Available in development for debugging
- **Memoization**: Use `useMemo` and `useCallback` for expensive operations
- **Selectors**: Memoized selectors prevent unnecessary re-renders
- **Async Thunks**: Handle side effects efficiently

### Bundle Optimization
- **Tree Shaking**: Remove unused code
- **Code Splitting**: Lazy load routes
- **Asset Compression**: Optimize images and fonts
- **Minification**: Enabled in production builds

### Network Optimization
- **Request Debouncing**: Prevent duplicate API calls
- **Error Retry Logic**: Automatic retry on network failure
- **Timeout Handling**: Set appropriate request timeouts
- **Batch Requests**: Combine multiple requests when possible

---

## 🔐 Security & Best Practices

### API Security
- ✅ API keys stored in `.env` (not in code)
- ✅ Environment variables not exposed in bundles
- ✅ HTTPS for all API calls
- ✅ Input validation before API requests
- ✅ Rate limiting awareness
- ✅ Error messages don't reveal sensitive info

### Data Privacy
- ✅ Images processed only for analysis
- ✅ No persistent image storage on device (by default)
- ✅ User data handled securely with Appwrite
- ✅ Clear app cache regularly
- ✅ GDPR compliant data handling

### Code Quality
- ✅ ESLint enforces code standards
- ✅ TypeScript for type safety
- ✅ Modular component architecture
- ✅ Proper error handling throughout
- ✅ Input sanitization
- ✅ Secure authentication patterns

### Authentication (Future)
- Implement JWT tokens
- Secure storage with Keychain (iOS) / Keystore (Android)
- Biometric authentication
- Session timeout handling

---

## 📚 Documentation & Resources

### Official Documentation
- **[Expo Documentation](https://docs.expo.dev/)** - Official Expo guides and API reference
- **[React Native Docs](https://reactnative.dev/)** - React Native reference and best practices
- **[Expo Router Guide](https://expo.github.io/router/docs)** - File-based routing documentation
- **[NativeWind Documentation](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - State management best practices
- **[Google Gemini API](https://ai.google.dev/)** - AI model documentation
- **[React Navigation](https://reactnavigation.org/)** - Advanced navigation patterns

### Learning Resources
- **[Expo Course](https://www.udemy.com/courses/react-native-expo/)** - Complete Expo learning
- **[React Native School](https://www.reactnativeschool.com/)** - React Native tutorials
- **[Tailwind CSS Guide](https://tailwindcss.com/docs)** - CSS utility framework
- **[Redux DevTools](https://github.com/reduxjs/redux-devtools)** - Debugging tools

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style (ESLint enforced)
- Add tests for new features
- Update documentation
- Use meaningful commit messages
- Keep commits atomic and focused

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Author

**Ritesh Chaudhary**
- **Location**:  Uttar Pradesh, India
- **Email**: riteshchaudhary63430@gmail.com
- **GitHub**: [@ritesh-chaudhary](https://github.com/ritesh-chaudhary)
- **LinkedIn**: [Ritesh Chaudhary](https://www.linkedin.com/in/ritesh-chaudhary-055949272/)

---

**Happy Gardening! 🌱🤖**

*Make your garden healthier with AI-powered plant diagnosis.*

Last Updated: November 2024
Version: 1.0.0

