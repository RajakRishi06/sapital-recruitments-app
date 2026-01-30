import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.logo}>Sapital Recruitments</Text>
          <Text style={styles.heroTitle}>The Future of Hiring</Text>
          <Text style={styles.heroSubtitle}>
            Connecting exceptional talent with leading organizations across India
          </Text>
        </View>

        {/* Introduction Card */}
        <Card style={styles.introCard}>
          <Text style={styles.introTitle}>Specialized IT & Healthcare Recruitment</Text>
          <Text style={styles.introText}>
            Sapital Recruitments is a premier recruitment agency specializing in IT and Healthcare sectors. 
            We bridge the gap between talented professionals and organizations seeking excellence, operating 
            across all major cities in India.
          </Text>
        </Card>

        {/* Key Industries Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Our Expertise" 
            subtitle="Specialized recruitment in two critical sectors"
          />
          
          <Card>
            <View style={styles.industryCard}>
              <View style={styles.industryHeader}>
                <Text style={styles.industryIcon}>💻</Text>
                <Text style={styles.industryTitle}>Information Technology</Text>
              </View>
              <Text style={styles.industryDescription}>
                From software developers to IT architects, data scientists to cybersecurity experts, 
                we connect top-tier technology talent with innovative companies driving digital transformation.
              </Text>
              <View style={styles.rolesList}>
                <Text style={styles.roleItem}>• Software Engineers & Developers</Text>
                <Text style={styles.roleItem}>• Data Scientists & Analysts</Text>
                <Text style={styles.roleItem}>• DevOps & Cloud Specialists</Text>
                <Text style={styles.roleItem}>• Cybersecurity Professionals</Text>
                <Text style={styles.roleItem}>• IT Project Managers</Text>
              </View>
            </View>
          </Card>

          <Card>
            <View style={styles.industryCard}>
              <View style={styles.industryHeader}>
                <Text style={styles.industryIcon}>⚕️</Text>
                <Text style={styles.industryTitle}>Healthcare</Text>
              </View>
              <Text style={styles.industryDescription}>
                Matching qualified healthcare professionals with hospitals, clinics, and medical facilities 
                committed to providing exceptional patient care across India.
              </Text>
              <View style={styles.rolesList}>
                <Text style={styles.roleItem}>• Doctors & Specialists</Text>
                <Text style={styles.roleItem}>• Nursing Staff</Text>
                <Text style={styles.roleItem}>• Healthcare Administrators</Text>
                <Text style={styles.roleItem}>• Medical Technicians</Text>
                <Text style={styles.roleItem}>• Pharmaceutical Professionals</Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Why Choose Us Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Why Choose Sapital Recruitments" 
            subtitle="Our commitment to excellence in recruitment"
          />
          
          <InfoCard 
            icon="🎯"
            title="Specialized Focus"
            description="Deep expertise in IT and Healthcare sectors ensures we understand your unique requirements and industry dynamics."
          />

          <InfoCard 
            icon="🇮🇳"
            title="India-Wide Reach"
            description="Operating across all major Indian cities, we connect talent from metros to emerging tech hubs nationwide."
          />

          <InfoCard 
            icon="✨"
            title="Quality Over Quantity"
            description="We believe in presenting carefully vetted candidates who truly match your requirements, not flooding you with resumes."
          />

          <InfoCard 
            icon="🤝"
            title="Transparent Process"
            description="Clear communication at every step. No hidden fees, no surprises. Just honest, professional recruitment service."
          />

          <InfoCard 
            icon="⚡"
            title="Fast Turnaround"
            description="Our streamlined process and extensive network enable us to fill positions quickly without compromising on quality."
          />

          <InfoCard 
            icon="💼"
            title="Long-term Partnerships"
            description="We focus on building lasting relationships, ensuring cultural fit and sustainable placements for both parties."
          />
        </View>

        {/* Our Approach Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Our Recruitment Philosophy" 
          />
          
          <Card>
            <Text style={styles.approachText}>
              At Sapital Recruitments, we believe recruitment is more than matching skills to job descriptions. 
              It's about understanding aspirations, company culture, growth trajectories, and creating meaningful 
              connections that benefit both candidates and employers.
            </Text>
            <Text style={styles.approachText}>
              Our practical, transparent approach ensures that every placement is a win-win situation, fostering 
              professional growth and organizational success.
            </Text>
          </Card>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Card style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Ready to Find Your Perfect Match?</Text>
            <Text style={styles.ctaText}>
              Whether you're seeking exceptional talent or your next career opportunity, 
              we're here to help you succeed.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Get Started</Text>
            </TouchableOpacity>
          </Card>
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
  scrollView: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xxl,
    marginBottom: SPACING.lg,
  },
  logo: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.white,
    fontWeight: '600',
    marginBottom: SPACING.md,
  },
  heroTitle: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.sm,
  },
  heroSubtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.white,
    opacity: 0.9,
    lineHeight: 22,
  },
  introCard: {
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  introTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  introText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 24,
  },
  section: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  industryCard: {
    padding: SPACING.sm,
  },
  industryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  industryIcon: {
    fontSize: 32,
    marginRight: SPACING.sm,
  },
  industryTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    flex: 1,
  },
  industryDescription: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 22,
    marginBottom: SPACING.md,
  },
  rolesList: {
    paddingLeft: SPACING.sm,
  },
  roleItem: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    lineHeight: 24,
  },
  approachText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  ctaSection: {
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.lg,
  },
  ctaCard: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  ctaText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.lg,
  },
  ctaButtonText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomPadding: {
    height: SPACING.xl,
  },
});

export default HomeScreen;
