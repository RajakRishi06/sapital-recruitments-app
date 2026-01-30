import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as notificationService from '../services/notificationService';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('male');
  const [birthDate, setBirthDate] = useState('1');
  const [birthMonth, setBirthMonth] = useState('January');
  const [birthYear, setBirthYear] = useState('1990');
  const [resume, setResume] = useState(null);
  
  // Modal states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 80 }, (_, i) => (new Date().getFullYear() - i).toString());
  
  // Generate dates based on selected month and year
  const getDaysInMonth = () => {
    const monthIndex = months.indexOf(birthMonth);
    const year = parseInt(birthYear);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Profile Photo',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: takePhoto,
        },
        {
          text: 'Choose from Gallery',
          onPress: pickImage,
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Camera permission is needed');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      notificationService.sendNotification(
        '✅ Profile Photo Updated',
        'Your profile photo has been updated successfully!'
      );
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Gallery permission is needed');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      notificationService.sendNotification(
        '✅ Profile Photo Updated',
        'Your profile photo has been updated successfully!'
      );
    }
  };

  const pickResume = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        setResume(result.assets[0]);
        notificationService.sendNotification(
          '📄 Resume Uploaded',
          `${result.assets[0].name} has been uploaded successfully!`
        );
        Alert.alert('Success', 'Resume uploaded successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick document');
    }
  };

  const handleSave = () => {
    notificationService.sendNotification(
      '💾 Profile Saved',
      'Your profile details have been saved successfully!'
    );
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const selectDate = (date) => {
    setBirthDate(date);
    setShowDatePicker(false);
  };

  const selectMonth = (month) => {
    setBirthMonth(month);
    setShowMonthPicker(false);
    // Adjust date if current date is greater than days in new month
    const daysInNewMonth = new Date(parseInt(birthYear), months.indexOf(month) + 1, 0).getDate();
    if (parseInt(birthDate) > daysInNewMonth) {
      setBirthDate(daysInNewMonth.toString());
    }
  };

  const selectYear = (year) => {
    setBirthYear(year);
    setShowYearPicker(false);
    // Adjust date if current date is greater than days in new month/year combo
    const daysInNewMonth = new Date(parseInt(year), months.indexOf(birthMonth) + 1, 0).getDate();
    if (parseInt(birthDate) > daysInNewMonth) {
      setBirthDate(daysInNewMonth.toString());
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Profile Photo and Name */}
        <View style={styles.profileHeader}>
          <View style={styles.photoContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profilePhoto} />
            ) : (
              <View style={styles.profilePhotoPlaceholder}>
                <Text style={styles.profilePhotoIcon}>👤</Text>
              </View>
            )}
            <TouchableOpacity style={styles.cameraButton} onPress={handleImagePicker}>
              <Text style={styles.cameraIcon}>📷</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{fullName}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Registered Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Registered Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Phone Number */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Gender */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[styles.genderOption, selectedGender === 'male' && styles.genderSelected]}
                onPress={() => setSelectedGender('male')}
              >
                <View style={[styles.radio, selectedGender === 'male' && styles.radioSelected]}>
                  {selectedGender === 'male' && <View style={styles.radioDot} />}
                </View>
                <Text style={[styles.genderText, selectedGender === 'male' && styles.genderTextSelected]}>
                  Male
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.genderOption, selectedGender === 'female' && styles.genderSelected]}
                onPress={() => setSelectedGender('female')}
              >
                <View style={[styles.radio, selectedGender === 'female' && styles.radioSelected]}>
                  {selectedGender === 'female' && <View style={styles.radioDot} />}
                </View>
                <Text style={[styles.genderText, selectedGender === 'female' && styles.genderTextSelected]}>
                  Female
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.genderOption, selectedGender === 'other' && styles.genderSelected]}
                onPress={() => setSelectedGender('other')}
              >
                <View style={[styles.radio, selectedGender === 'other' && styles.radioSelected]}>
                  {selectedGender === 'other' && <View style={styles.radioDot} />}
                </View>
                <Text style={[styles.genderText, selectedGender === 'other' && styles.genderTextSelected]}>
                  Others
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Date of Birth with Date, Month, Year */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <View style={styles.dobContainer}>
              <View style={styles.dobPicker}>
                <Text style={styles.dobLabel}>Date</Text>
                <TouchableOpacity 
                  style={styles.pickerContainer}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Text style={styles.pickerValue}>{birthDate}</Text>
                  <Text style={styles.pickerArrow}>▼</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dobPicker}>
                <Text style={styles.dobLabel}>Month</Text>
                <TouchableOpacity 
                  style={styles.pickerContainer}
                  onPress={() => setShowMonthPicker(true)}
                >
                  <Text style={styles.pickerValue}>{birthMonth}</Text>
                  <Text style={styles.pickerArrow}>▼</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.dobPicker}>
                <Text style={styles.dobLabel}>Year</Text>
                <TouchableOpacity 
                  style={styles.pickerContainer}
                  onPress={() => setShowYearPicker(true)}
                >
                  <Text style={styles.pickerValue}>{birthYear}</Text>
                  <Text style={styles.pickerArrow}>▼</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Resume Upload */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Resume</Text>
            <TouchableOpacity style={styles.resumeButton} onPress={pickResume}>
              <Text style={styles.resumeIcon}>📄</Text>
              <View style={styles.resumeTextContainer}>
                <Text style={styles.resumeButtonText}>
                  {resume ? resume.name : 'Upload Resume'}
                </Text>
                {resume && resume.size && (
                  <Text style={styles.resumeSize}>
                    {(resume.size / 1024).toFixed(2)} KB
                  </Text>
                )}
              </View>
              <Text style={styles.uploadIcon}>⬆️</Text>
            </TouchableOpacity>
            <Text style={styles.resumeHint}>
              Supported formats: PDF, DOC, DOCX
            </Text>
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Date Picker Modal */}
      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Date</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={getDaysInMonth()}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.pickerItem, birthDate === item && styles.pickerItemSelected]}
                  onPress={() => selectDate(item)}
                >
                  <Text style={[styles.pickerItemText, birthDate === item && styles.pickerItemTextSelected]}>
                    {item}
                  </Text>
                  {birthDate === item && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Month Picker Modal */}
      <Modal
        visible={showMonthPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowMonthPicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Month</Text>
              <TouchableOpacity onPress={() => setShowMonthPicker(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={months}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.pickerItem, birthMonth === item && styles.pickerItemSelected]}
                  onPress={() => selectMonth(item)}
                >
                  <Text style={[styles.pickerItemText, birthMonth === item && styles.pickerItemTextSelected]}>
                    {item}
                  </Text>
                  {birthMonth === item && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Year Picker Modal */}
      <Modal
        visible={showYearPicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowYearPicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Year</Text>
              <TouchableOpacity onPress={() => setShowYearPicker(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={years}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.pickerItem, birthYear === item && styles.pickerItemSelected]}
                  onPress={() => selectYear(item)}
                >
                  <Text style={[styles.pickerItemText, birthYear === item && styles.pickerItemTextSelected]}>
                    {item}
                  </Text>
                  {birthYear === item && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileHeader: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    paddingBottom: SPACING.xxl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoContainer: {
    position: 'relative',
    marginRight: SPACING.md,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  profilePhotoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhotoIcon: {
    fontSize: 40,
  },
  cameraButton: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  cameraIcon: {
    fontSize: 14,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: FONT_SIZES.md,
    color: COLORS.white,
    opacity: 0.9,
  },
  formSection: {
    padding: SPACING.md,
    marginTop: -SPACING.lg,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
  },
  inputGroup: {
    marginBottom: SPACING.lg,
  },
  label: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    marginBottom: SPACING.xs,
    fontWeight: '500',
  },
  input: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
  },
  genderContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
  },
  genderOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
  },
  genderSelected: {
    backgroundColor: COLORS.primary + '10',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.border,
    marginRight: SPACING.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: COLORS.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  genderText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textLight,
  },
  genderTextSelected: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  dobContainer: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  dobPicker: {
    flex: 1,
  },
  dobLabel: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    marginBottom: SPACING.xs,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
  },
  pickerValue: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    fontWeight: '500',
  },
  pickerArrow: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
  },
  resumeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
  },
  resumeIcon: {
    fontSize: 24,
    marginRight: SPACING.sm,
  },
  resumeTextContainer: {
    flex: 1,
  },
  resumeButtonText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    fontWeight: '500',
  },
  resumeSize: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    marginTop: 2,
  },
  uploadIcon: {
    fontSize: 20,
    color: COLORS.primary,
  },
  resumeHint: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    marginTop: SPACING.xs,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  saveButtonText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  bottomPadding: {
    height: SPACING.xl,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: BORDER_RADIUS.xl,
    borderTopRightRadius: BORDER_RADIUS.xl,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  modalClose: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.textLight,
    padding: SPACING.sm,
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  pickerItemSelected: {
    backgroundColor: COLORS.primary + '10',
  },
  pickerItemText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
  },
  pickerItemTextSelected: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  checkmark: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
