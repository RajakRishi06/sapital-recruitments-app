import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as notificationService from '../services/notificationService';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

const ContactScreen = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Office details from the image
  const officeAddress = "A-16, 4th Floor, Rajiv Lochan Society, Kachna,\nRaipur, Chhattisgarh - 492012\nIndia";
  const officeEmail = "info@sapitalrecruitments.com";
  const officeHours = "Monday - Saturday: 10:00 AM - 7:00 PM\nSunday: Closed";

  const services = [
    'Recruitment Solutions',
    'Talent Acquisition',
    'Executive Search',
    'HR Consulting',
    'Contract Staffing',
    'Other Services'
  ];

  const validateForm = () => {
    if (!fullName.trim()) {
      Alert.alert('Validation Error', 'Please enter your full name');
      return false;
    }
    if (!businessEmail.trim()) {
      Alert.alert('Validation Error', 'Please enter your business email');
      return false;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return false;
    }
    if (!phoneNumber.trim()) {
      Alert.alert('Validation Error', 'Please enter your phone number');
      return false;
    }
    if (!serviceInterest) {
      Alert.alert('Validation Error', 'Please select a service interest');
      return false;
    }
    return true;
  };

  const handleSubmitInquiry = () => {
    if (!validateForm()) {
      return;
    }

    // Show success alert without tick mark
    Alert.alert(
      'Inquiry Submitted Successfully',
      `Thank you, ${fullName}! We have received your inquiry and will respond within 2-4 business hours.`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Clear form
            setFullName('');
            setCompanyName('');
            setBusinessEmail('');
            setPhoneNumber('');
            setServiceInterest('');
            setAdditionalInfo('');
          }
        }
      ]
    );

    // Send notification
    notificationService.sendNotification(
      'Inquiry Submitted',
      `Your inquiry has been sent successfully! We'll respond within 2-4 business hours.`
    );
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${officeEmail}`);
  };

  const handleGetDirections = () => {
    const address = encodeURIComponent('A-16, 4th Floor, Rajiv Lochan Society, Kachna, Raipur, Chhattisgarh 492012, India');
    Linking.openURL(`https://maps.google.com/?q=${address}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Badge */}
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>💬</Text>
            <Text style={styles.badgeText}>Contact Our Team</Text>
          </View>
        </View>

        {/* Main Title and Description */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Get in Touch</Text>
          <Text style={styles.description}>
            We welcome your inquiries and look forward to discussing how our recruitment solutions can benefit your organization.
          </Text>
        </View>

        {/* Contact Form */}
        <View style={styles.formCard}>
          {/* Full Name */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputIcon}>👤</Text>
              <Text style={styles.label}>Full Name</Text>
            </View>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Company Name */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputIcon}>🏢</Text>
              <Text style={styles.label}>Company Name</Text>
            </View>
            <TextInput
              style={styles.input}
              value={companyName}
              onChangeText={setCompanyName}
              placeholder="Enter your company name"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Business Email */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputIcon}>✉️</Text>
              <Text style={styles.label}>Business Email</Text>
              <Text style={styles.required}> *</Text>
            </View>
            <TextInput
              style={styles.input}
              value={businessEmail}
              onChangeText={setBusinessEmail}
              placeholder="your.email@company.com"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Phone Number */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputIcon}>📞</Text>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.required}> *</Text>
            </View>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="+91 98765 43210"
              keyboardType="phone-pad"
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          {/* Service Interest */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputIcon}>⚙️</Text>
              <Text style={styles.label}>Service Interest</Text>
            </View>
            <View style={styles.selectWrapper}>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.serviceScroll}
              >
                {services.map((service, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.serviceChip,
                      serviceInterest === service && styles.serviceChipSelected
                    ]}
                    onPress={() => setServiceInterest(service)}
                  >
                    <Text
                      style={[
                        styles.serviceChipText,
                        serviceInterest === service && styles.serviceChipTextSelected
                      ]}
                    >
                      {service}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Additional Information */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Text style={styles.inputIcon}>📝</Text>
              <Text style={styles.label}>Additional Information</Text>
              <Text style={styles.required}> *</Text>
            </View>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={additionalInfo}
              onChangeText={setAdditionalInfo}
              placeholder="Please provide details about your requirements..."
              placeholderTextColor={COLORS.textLight}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
            <Text style={styles.charCounter}>{additionalInfo.length}/500 characters</Text>
          </View>

          {/* Privacy Policy Agreement */}
          <View style={styles.privacyContainer}>
            <Text style={styles.privacyIcon}>🔒</Text>
            <Text style={styles.privacyText}>
              By submitting this form, you agree to our privacy policy and terms of service.
            </Text>
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmitInquiry}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Submit Inquiry</Text>
            <Text style={styles.submitButtonIcon}>→</Text>
          </TouchableOpacity>

          {/* Response Time */}
          <View style={styles.responseTimeContainer}>
            <Text style={styles.responseTimeIcon}>⏱️</Text>
            <Text style={styles.responseTimeText}>
              Typical response time: 2-4 business hours
            </Text>
          </View>
        </View>

        {/* Office Information Section */}
        <View style={styles.officeSection}>
          <View style={styles.officeTitleContainer}>
            <Text style={styles.officeTitleIcon}>🏢</Text>
            <Text style={styles.sectionTitle}>Office Information</Text>
          </View>
          
          {/* Corporate Office */}
          <View style={styles.officeCard}>
            <View style={styles.officeIconContainer}>
              <Text style={styles.officeIcon}>📍</Text>
            </View>
            <View style={styles.officeInfo}>
              <Text style={styles.officeLabel}>Corporate Office</Text>
              <Text style={styles.officeValue}>{officeAddress}</Text>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={handleGetDirections}
              >
                <Text style={styles.actionButtonText}>Get Directions</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Email */}
          <View style={styles.officeCard}>
            <View style={styles.officeIconContainer}>
              <Text style={styles.officeIcon}>✉️</Text>
            </View>
            <View style={styles.officeInfo}>
              <Text style={styles.officeLabel}>Email</Text>
              <Text style={[styles.officeValue, styles.emailText]}>{officeEmail}</Text>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={handleEmail}
              >
                <Text style={styles.actionButtonText}>Send Email</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Business Hours */}
          <View style={styles.officeCard}>
            <View style={styles.officeIconContainer}>
              <Text style={styles.officeIcon}>🕐</Text>
            </View>
            <View style={styles.officeInfo}>
              <Text style={styles.officeLabel}>Business Hours</Text>
              <Text style={styles.officeValue}>{officeHours}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SPACING.lg,
    paddingBottom: 0,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary + '15',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
  },
  badgeIcon: {
    fontSize: 16,
    marginRight: SPACING.xs,
  },
  badgeText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  titleSection: {
    padding: SPACING.lg,
    paddingTop: SPACING.md,
  },
  mainTitle: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textLight,
    lineHeight: 24,
  },
  formCard: {
    backgroundColor: COLORS.white,
    margin: SPACING.lg,
    marginTop: SPACING.md,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: SPACING.lg,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: SPACING.xs,
  },
  label: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text,
    fontWeight: '600',
  },
  required: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.error || '#EF4444',
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
  textArea: {
    minHeight: 120,
    paddingTop: SPACING.md,
  },
  charCounter: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    textAlign: 'right',
    marginTop: SPACING.xs,
  },
  selectWrapper: {
    backgroundColor: COLORS.cardBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
  },
  serviceScroll: {
    flexDirection: 'row',
  },
  serviceChip: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.sm,
  },
  serviceChipSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  serviceChipText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text,
    fontWeight: '500',
  },
  serviceChipTextSelected: {
    color: COLORS.white,
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.lg,
  },
  privacyIcon: {
    fontSize: 16,
    marginRight: SPACING.sm,
  },
  privacyText: {
    flex: 1,
    fontSize: FONT_SIZES.xs,
    color: COLORS.textLight,
    lineHeight: 18,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  submitButtonText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.white,
    marginRight: SPACING.sm,
  },
  submitButtonIcon: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  responseTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.md,
    padding: SPACING.sm,
    backgroundColor: COLORS.cardBg,
    borderRadius: BORDER_RADIUS.md,
  },
  responseTimeIcon: {
    fontSize: 16,
    marginRight: SPACING.xs,
  },
  responseTimeText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
  },
  officeSection: {
    padding: SPACING.lg,
  },
  officeTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  officeTitleIcon: {
    fontSize: 24,
    marginRight: SPACING.sm,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  officeCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    marginBottom: SPACING.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  officeIconContainer: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  officeIcon: {
    fontSize: 24,
  },
  officeInfo: {
    flex: 1,
  },
  officeLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  officeValue: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 22,
    marginBottom: SPACING.sm,
  },
  emailText: {
    color: COLORS.primary,
  },
  actionButton: {
    alignSelf: 'flex-start',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.primary + '15',
    borderRadius: BORDER_RADIUS.md,
    marginTop: SPACING.xs,
  },
  actionButtonText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },
  bottomPadding: {
    height: SPACING.xl,
  },
});

export default ContactScreen;
