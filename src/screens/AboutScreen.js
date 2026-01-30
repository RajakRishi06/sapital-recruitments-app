import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { COLORS, SPACING, FONT_SIZES } from '../constants/theme';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>About Us</Text>
          <Text style={styles.headerSubtitle}>
            Building bridges between talent and opportunity
          </Text>
        </View>

        {/* Who We Are Section */}
        <View style={styles.section}>
          <SectionHeader title="Who We Are" />
          
          <Card>
            <Text style={styles.bodyText}>
              Sapital Recruitments is a specialized recruitment agency dedicated to connecting exceptional 
              talent with leading organizations in the Information Technology and Healthcare sectors. 
              Founded with a vision to revolutionize the hiring process, we have established ourselves as 
              a trusted partner for both employers and job seekers across India.
            </Text>
            <Text style={styles.bodyText}>
              Operating from major metropolitan areas to emerging business hubs, we leverage our extensive 
              network and industry expertise to facilitate meaningful connections that drive professional 
              growth and organizational success.
            </Text>
          </Card>
        </View>

        {/* Mission Section */}
        <View style={styles.section}>
          <SectionHeader title="Our Mission" />
          
          <Card style={styles.missionCard}>
            <Text style={styles.missionText}>
              To be the most trusted recruitment partner in IT and Healthcare sectors by delivering 
              exceptional talent solutions through transparent processes, personalized service, and 
              unwavering commitment to quality.
            </Text>
          </Card>

          <Card>
            <Text style={styles.bodyText}>
              We strive to create win-win situations where candidates find roles that align with their 
              career aspirations and skills, while employers discover professionals who not only meet 
              technical requirements but also fit seamlessly into their organizational culture.
            </Text>
          </Card>
        </View>

        {/* Vision Section */}
        <View style={styles.section}>
          <SectionHeader title="Our Vision" />
          
          <Card>
            <Text style={styles.bodyText}>
              We envision a future where every professional finds the right opportunity to grow and 
              every organization has access to the talent needed to achieve their goals. By focusing 
              on the IT and Healthcare sectors—two pillars of modern society—we aim to contribute to 
              India's growth as a global leader in technology and healthcare services.
            </Text>
            <Text style={styles.bodyText}>
              Our vision extends beyond placement numbers. We aspire to build a recruitment ecosystem 
              based on trust, transparency, and long-term relationships that benefit all stakeholders.
            </Text>
          </Card>
        </View>

        {/* Recruitment Philosophy Section */}
        <View style={styles.section}>
          <SectionHeader title="Our Recruitment Philosophy" />
          
          <Card>
            <View style={styles.philosophyItem}>
              <Text style={styles.philosophyTitle}>Quality Over Quantity</Text>
              <Text style={styles.bodyText}>
                We believe in presenting carefully screened candidates rather than overwhelming clients 
                with hundreds of irrelevant resumes. Each candidate we recommend has been thoroughly 
                vetted to match not just the technical requirements, but also the cultural and 
                professional expectations of the role.
              </Text>
            </View>

            <View style={styles.philosophyItem}>
              <Text style={styles.philosophyTitle}>Transparency is Key</Text>
              <Text style={styles.bodyText}>
                From the initial consultation to final placement, we maintain complete transparency. 
                There are no hidden fees, no surprises, and no ambiguity in our processes. You always 
                know where you stand and what to expect next.
              </Text>
            </View>

            <View style={styles.philosophyItem}>
              <Text style={styles.philosophyTitle}>Understanding Beyond Resumes</Text>
              <Text style={styles.bodyText}>
                We invest time in understanding both our clients and candidates at a deeper level. 
                For employers, we learn about company culture, team dynamics, and long-term goals. 
                For candidates, we understand career aspirations, skill development interests, and 
                personal circumstances that might affect job decisions.
              </Text>
            </View>

            <View style={styles.philosophyItem}>
              <Text style={styles.philosophyTitle}>Practical Approach</Text>
              <Text style={styles.bodyText}>
                We pride ourselves on being practical and realistic. While we aim high, we ensure 
                expectations are aligned with market realities. This practical approach leads to 
                successful placements and satisfied clients.
              </Text>
            </View>
          </Card>
        </View>

        {/* Focus Areas Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Why IT & Healthcare?" 
            subtitle="Our specialized focus areas"
          />
          
          <Card>
            <View style={styles.focusArea}>
              <Text style={styles.focusTitle}>Information Technology</Text>
              <Text style={styles.bodyText}>
                The IT sector is the backbone of modern business operations and digital transformation. 
                From startups to established enterprises, organizations need skilled technology 
                professionals to innovate, compete, and grow. Our deep understanding of various 
                technology roles—from full-stack developers to AI specialists, from DevOps engineers 
                to IT project managers—enables us to serve this dynamic sector effectively.
              </Text>
              <Text style={styles.bodyText}>
                We stay updated with emerging technologies, industry trends, and skill requirements 
                to ensure we can match candidates with the evolving needs of IT organizations across India.
              </Text>
            </View>

            <View style={styles.focusArea}>
              <Text style={styles.focusTitle}>Healthcare</Text>
              <Text style={styles.bodyText}>
                Healthcare is a fundamental pillar of society, and finding the right medical and 
                healthcare professionals is crucial for delivering quality patient care. We work with 
                hospitals, clinics, diagnostic centers, pharmaceutical companies, and healthcare 
                technology firms to identify and recruit qualified professionals who are committed 
                to healthcare excellence.
              </Text>
              <Text style={styles.bodyText}>
                Our recruitment process for healthcare roles takes into account not just qualifications 
                and experience, but also the compassion, dedication, and professional ethics essential 
                in this field.
              </Text>
            </View>
          </Card>
        </View>

        {/* Pan-India Presence Section */}
        <View style={styles.section}>
          <SectionHeader title="Pan-India Operations" />
          
          <Card>
            <Text style={styles.bodyText}>
              Sapital Recruitments operates across all major cities in India, connecting talent from 
              metropolitan hubs like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, and Kolkata, 
              as well as emerging business centers across the country.
            </Text>
            <Text style={styles.bodyText}>
              This extensive reach allows us to tap into diverse talent pools and serve organizations 
              of all sizes—from ambitious startups to established corporations—regardless of their location.
            </Text>
          </Card>
        </View>

        {/* Core Values Section */}
        <View style={styles.section}>
          <SectionHeader title="Our Core Values" />
          
          <Card>
            <View style={styles.valueItem}>
              <Text style={styles.valueTitle}>🎯 Excellence</Text>
              <Text style={styles.valueText}>
                We pursue excellence in every aspect of our service, from candidate screening to 
                client communication.
              </Text>
            </View>

            <View style={styles.valueItem}>
              <Text style={styles.valueTitle}>🤝 Integrity</Text>
              <Text style={styles.valueText}>
                Honesty and ethical practices guide all our interactions and business decisions.
              </Text>
            </View>

            <View style={styles.valueItem}>
              <Text style={styles.valueTitle}>💡 Innovation</Text>
              <Text style={styles.valueText}>
                We continuously improve our processes and leverage technology to deliver better results.
              </Text>
            </View>

            <View style={styles.valueItem}>
              <Text style={styles.valueTitle}>🌟 Commitment</Text>
              <Text style={styles.valueText}>
                We're dedicated to the success of both our clients and candidates, going the extra mile 
                to ensure satisfaction.
              </Text>
            </View>

            <View style={styles.valueItem}>
              <Text style={styles.valueTitle}>🔍 Transparency</Text>
              <Text style={styles.valueText}>
                Clear, honest communication forms the foundation of our relationships with all stakeholders.
              </Text>
            </View>
          </Card>
        </View>

        {/* Partnership Approach Section */}
        <View style={styles.section}>
          <SectionHeader title="Long-term Partnership Approach" />
          
          <Card>
            <Text style={styles.bodyText}>
              We don't view our clients as one-time transactions. Instead, we focus on building 
              long-term partnerships based on mutual trust and consistent delivery of quality services. 
              Many of our clients return to us for their hiring needs because they've experienced our 
              commitment to understanding their unique requirements and delivering results.
            </Text>
            <Text style={styles.bodyText}>
              Similarly, we maintain relationships with candidates throughout their career journeys, 
              providing guidance and opportunities as they grow professionally. This long-term perspective 
              ensures we create value that extends far beyond individual placements.
            </Text>
          </Card>
        </View>

        {/* Commitment Section */}
        <View style={styles.section}>
          <SectionHeader title="Our Commitment to You" />
          
          <Card style={styles.commitmentCard}>
            <Text style={styles.commitmentTitle}>For Employers</Text>
            <Text style={styles.bodyText}>
              We commit to understanding your organization's culture, requirements, and goals. You'll 
              receive pre-screened candidates who match both technical requirements and cultural fit. 
              We handle the heavy lifting of sourcing, screening, and initial assessments, saving you 
              time and resources while ensuring quality.
            </Text>
          </Card>

          <Card style={styles.commitmentCard}>
            <Text style={styles.commitmentTitle}>For Job Seekers</Text>
            <Text style={styles.bodyText}>
              We commit to representing your interests professionally and connecting you with opportunities 
              that align with your career goals. Your aspirations matter to us, and we work to find roles 
              where you can thrive and grow, not just positions to fill quotas.
            </Text>
          </Card>
        </View>

        {/* Closing Section */}
        <View style={styles.section}>
          <Card style={styles.closingCard}>
            <Text style={styles.closingText}>
              At Sapital Recruitments, we're more than a recruitment agency—we're your partners in 
              building successful careers and strong organizations. Trust, transparency, and quality 
              are not just our values; they're the principles that guide every decision we make.
            </Text>
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
  header: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xl,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xl,
    marginBottom: SPACING.lg,
  },
  headerTitle: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SPACING.sm,
  },
  headerSubtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.white,
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.xl,
  },
  bodyText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  missionCard: {
    backgroundColor: COLORS.primary,
    marginBottom: SPACING.md,
  },
  missionText: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.white,
    lineHeight: 26,
    fontWeight: '500',
  },
  philosophyItem: {
    marginBottom: SPACING.lg,
  },
  philosophyTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  focusArea: {
    marginBottom: SPACING.lg,
  },
  focusTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  valueItem: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  valueTitle: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text,
    width: 140,
  },
  valueText: {
    flex: 1,
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  commitmentCard: {
    marginBottom: SPACING.md,
  },
  commitmentTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  closingCard: {
    backgroundColor: COLORS.cardBg,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
  },
  closingText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  bottomPadding: {
    height: SPACING.xl,
  },
});

export default AboutScreen;
