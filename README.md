# 1. Install Node.js (if not installed)
node --version

# 2. Navigate to project
cd SapitalRecruitments

# 3. Install dependencies
npm install

# 4. Install Expo packages
npx expo install expo expo-status-bar react-native-safe-area-context react-native-screens

# 5. Install navigation
npm install @react-navigation/native @react-navigation/bottom-tabs

# 6. Install camera & image features
npx expo install expo-camera expo-image-picker

# 7. Install notifications
npx expo install expo-notifications

# 8. Install document picker
npx expo install expo-document-picker

# 9. Install dev dependencies
npm install --save-dev babel-preset-expo @babel/core

# 10. Clear cache and start
npx expo start --clear

# 11. Scan QR code with Expo Go app
# 12. App should load on your device!
