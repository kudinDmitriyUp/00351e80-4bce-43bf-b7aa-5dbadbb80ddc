"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metric/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { AlertTriangle, Award, BookOpen, Brain, Building, HelpCircle, MessageCircle, Scale, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Enterprise", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="StaffToday.AI"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="The Only 360 AI Recruitment Agency"
          description="Hand our AI recruiters a job description; they'll source, contact, & phone-screen candidates. Just like a human recruiter. No ATS. No integrations. StaffToday isn't automation, it's placements."
          tag="Specializing in AU Construction"
          tagIcon={Zap}
          buttons={[
            { text: "Claim Your Free Search", href: "contact" },
            { text: "Login to Dashboard", href: "https://dashboard.stafftoday.ai" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457469875-b06ertlc.jpg",
              imageAlt: "AI recruitment technology"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457470583-q1ykzkd9.jpg",
              imageAlt: "Construction workers team"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457471274-gvkrf977.jpg",
              imageAlt: "Hiring dashboard interface"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457471982-9cxuf5bu.jpg",
              imageAlt: "Candidate profiles"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457472451-a9mmfssx.jpg",
              imageAlt: "Construction project"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Why StaffToday.AI"
          description="Save 75% of your time, reduce costs by 60%, and achieve 95% accuracy in candidate matching — all while eliminating the hassle of traditional recruitment. Built for delivery teams who need reliable talent fast."
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="AI-Powered Recruitment Features"
          description="Advanced technology meets human expertise to deliver unmatched recruitment results"
          tag="Technology"
          tagIcon={Brain}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: "1",
              title: "GPT-4 Powered Role Parsing",
              description: "Upload job briefs or project needs for instant sourcing plans with 95% accuracy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457473078-zzktgurc.jpg",
              imageAlt: "AI role parsing technology"
            },
            {
              id: "2",
              title: "Multi-Platform Candidate Sourcing",
              description: "AI searches millions of profiles across LinkedIn and private networks with 250M+ profiles",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457473897-itj351jg.jpg",
              imageAlt: "Candidate sourcing platforms"
            },
            {
              id: "3",
              title: "AI-Powered Candidate ML Analysis",
              description: "AI analyzes work history for perfect role and candidate matching with machine learning",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457474397-fj8jxahq.jpg",
              imageAlt: "Machine learning analysis"
            },
            {
              id: "4",
              title: "Real-Time Hiring Dashboard",
              description: "Everything you need in one place. No spreadsheets. No guesswork. Complete visibility.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457474903-il9oracw.jpg",
              imageAlt: "Hiring dashboard interface"
            },
            {
              id: "5",
              title: "Automated Verification Reports",
              description: "Automated, verified reports with reference outcomes and engagement insights",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457475691-gbd86k3k.jpg",
              imageAlt: "Verification and reporting system"
            },
            {
              id: "6",
              title: "24/7 Ongoing Support",
              description: "Continuous support throughout the hiring process with dedicated AI assistance",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457476423-6vwrx7xt.jpg",
              imageAlt: "24/7 automated support system"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="StaffToday.AI Specializes In"
          description="Build, Property Development, and more — we deliver the right talent for your projects"
          tag="Specializations"
          tagIcon={Building}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "executive",
              name: "Executive & Leadership",
              price: "Director Level",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457479929-l3265s0q.jpg",
              imageAlt: "Executive leadership roles"
            },
            {
              id: "site-delivery",
              name: "Site & Delivery",
              price: "Management",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457478133-bs0xscik.jpg",
              imageAlt: "Site delivery management"
            },
            {
              id: "engineering",
              name: "Engineering",
              price: "All Disciplines",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457479276-symzmc87.jpg",
              imageAlt: "Engineering roles"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Traditional vs StaffToday.AI"
          description="See how we revolutionize the hiring process compared to traditional methods"
          tag="Comparison"
          tagIcon={Scale}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "traditional",
              badge: "Old Way",
              badgeIcon: AlertTriangle,
              price: "Slow & Expensive",
              subtitle: "Traditional hiring approach",
              features: [
                "Job boards & recruiters",
                "Manual cold outreach",
                "CV overload",
                "Phone-tag references",
                "Post-hire silence",
                "Reactive hiring"
              ]
            },
            {
              id: "stafftoday",
              badge: "AI-Powered",
              badgeIcon: Sparkles,
              price: "Fast & Accurate",
              subtitle: "StaffToday.AI approach",
              features: [
                "Direct, AI-powered search",
                "Automated, personalised messaging",
                "Curated, engaged shortlists",
                "Automated, verified reports",
                "Ongoing staff support",
                "Proactive talent pipeline"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Proven Results That Matter"
          description="Real metrics from our AI recruitment platform showing the impact on your hiring process"
          tag="Performance"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "75%",
              description: "Time Saved on Recruitment"
            },
            {
              id: "2",
              value: "60%",
              description: "Cost Reduction Achieved"
            },
            {
              id: "3",
              value: "95%",
              description: "Candidate Matching Accuracy"
            },
            {
              id: "4",
              value: "250M+",
              description: "Candidate Profiles Searched"
            }
          ]}
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTwo
          title="Success Stories"
          description="Real candidates placed through our AI recruitment platform"
          tag="Placements"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Senior PM",
              description: "Placed within 3 days. AI Score: 92% match rate. Now leading major infrastructure project.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457477136-x94a5rbd.jpg",
              imageAlt: "Sarah Mitchell - Senior Project Manager"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Construction Manager",
              description: "Phone screened and verified. AI Score: 87%. Successfully managing multi-site operations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457478133-bs0xscik.jpg",
              imageAlt: "James Rodriguez - Construction Manager"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Site Engineer",
              description: "Quick engagement and placement. AI Score: 84%. Excelling in complex engineering projects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457479276-symzmc87.jpg",
              imageAlt: "Emma Thompson - Site Engineer"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from construction companies using StaffToday.AI"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Construction Director",
              testimonial: "StaffToday.AI transformed our hiring process. We went from months of searching to having qualified candidates in days. The AI matching is incredibly accurate.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457479929-l3265s0q.jpg",
              imageAlt: "Michael Chen - Construction Director"
            },
            {
              id: "2",
              name: "Lisa Parker",
              role: "Project Manager",
              testimonial: "The real-time dashboard gives us complete visibility. No more spreadsheets, no more guesswork. Everything is automated and verified.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457480611-ra64lx2c.jpg",
              imageAlt: "Lisa Parker - Project Manager"
            },
            {
              id: "3",
              name: "David Wilson",
              role: "Operations Manager",
              testimonial: "95% accuracy isn't just a number - it's real. Every candidate they've sent has been a perfect fit for our construction projects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457481125-bvk29kft.jpg",
              imageAlt: "David Wilson - Operations Manager"
            },
            {
              id: "4",
              name: "Rachel Foster",
              role: "HR Director",
              testimonial: "The automated verification and reference checking saves us so much time. The quality of candidates is consistently high.",
              icon: "UserCheck"
            },
            {
              id: "5",
              name: "Tom Anderson",
              role: "Site Supervisor",
              testimonial: "Being able to hire for future projects with stage-based timelines is game-changing for our construction schedules.",
              icon: "Calendar"
            },
            {
              id: "6",
              name: "Sophie Martinez",
              role: "Recruitment Lead",
              testimonial: "The proactive sourcing means we're never scrambling for talent. StaffToday.AI keeps our pipeline full of qualified candidates.",
              icon: "Search"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Construction Companies"
          description="Join hundreds of construction companies that trust StaffToday.AI for their recruitment needs"
          tag="Trusted Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457481859-8m36xpbd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457482346-hx499y84.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457483246-55ro70g4.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457483816-6x2et2a0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457484900-ulgq7zys.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457485735-rrhvfzbd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457486415-pr4b182j.jpg"
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about StaffToday.AI recruitment platform"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you post job ads or wait for candidates to apply?",
              content: "No. We use AI to proactively search and directly engage top-matching candidates. No job boards. No waiting. No third-party recruiters."
            },
            {
              id: "2",
              title: "How fast can I expect candidates?",
              content: "Initial outreach starts within 24–48 hours. You'll receive a shortlist of verified, engaged candidates in 3–5 business days, depending on the role."
            },
            {
              id: "3",
              title: "Can I hire for future projects or stage-based timelines?",
              content: "Yes. You can upload roles with future start dates. We'll build and maintain talent pipelines that align with your project schedules."
            },
            {
              id: "4",
              title: "How accurate is the AI candidate matching?",
              content: "Our AI achieves 95% accuracy in candidate matching by analyzing work history, skills, and role requirements using advanced machine learning algorithms."
            },
            {
              id: "5",
              title: "What's included in the verification process?",
              content: "We provide automated reference checking, work history verification, and detailed engagement insights all compiled in exportable audit trails and reports."
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Insights"
          description="Stay updated with the latest trends in AI recruitment and construction hiring"
          tag="Resources"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="opacity"
          blogs={[
            {
              id: "1",
              category: "AI Technology",
              title: "The Future of AI in Construction Recruitment",
              excerpt: "How artificial intelligence is revolutionizing the way construction companies find and hire top talent",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457487188-cwb0teus.jpg",
              imageAlt: "AI recruitment technology",
              authorName: "Alice Johnson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457489131-w8pgvf9g.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Industry Trends",
              title: "Construction Hiring Trends for 2025",
              excerpt: "Key insights and predictions for construction recruitment in the coming year",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457487716-q9muxq5v.jpg",
              imageAlt: "Construction industry trends",
              authorName: "Bob Smith",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457489728-xyjdg4o1.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Best Practices",
              title: "Effective Hiring Strategies for Construction Teams",
              excerpt: "Proven methods to build stronger construction teams and reduce turnover",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457488386-eajal2vl.jpg",
              imageAlt: "Hiring best practices",
              authorName: "Carol Davis",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763457490402-6i27nwmp.jpg",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Started with a Free Search"
          description="You build the future — we'll find the people. AI-Powered recruitment with 24/7 support and verified talent. Get started in 5 minutes."
          buttonText="Start Free Search"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Work Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{ name: "requirements", placeholder: "Tell us about your hiring needs and project requirements...", rows: 4, required: false }}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="StaffToday.AI"
          copyrightText="Copyright © 2025 StaffToday.AI. All rights reserved."
          columns={[
            {
              title: "Support",
              items: [
                { label: "Contact Support", href: "mailto:support@stafftoday.ai" },
                { label: "Help Center", href: "faq" },
                { label: "Dashboard Login", href: "https://dashboard.stafftoday.ai" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "https://stafftoday.ai/terms" },
                { label: "Privacy Policy", href: "https://stafftoday.ai/privacy" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Enterprise", href: "enterprise" },
                { label: "Pricing", href: "pricing" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}