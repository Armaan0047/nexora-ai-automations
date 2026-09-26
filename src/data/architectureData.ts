export interface ArchitectureNode {
  index: string;
  stageName: string;
  headline: string;
  businessExplanation: string;
  technicalCapabilities: string[];
  keyDeliverable: string;
}

export const ARCHITECTURE_PIPELINE: ArchitectureNode[] = [
  {
    index: "01",
    stageName: "Your Business & Goals",
    headline: "Understanding What You Offer & Who You Serve",
    businessExplanation:
      "Every project starts with your real business goals: what services you sell, who your target customers are, and what makes your business unique. We don't push cookie-cutter templates; we build around your specific needs.",
    technicalCapabilities: [
      "Reviewing your core services, target clients, and pricing structure",
      "Identifying how potential customers currently find and contact you",
      "Agreeing on the exact pages, forms, and features required",
    ],
    keyDeliverable: "Clear Project Scope & Deliverables Plan",
  },
  {
    index: "02",
    stageName: "Modern Website",
    headline: "Clean, Fast & Mobile-Friendly Digital Storefront",
    businessExplanation:
      "A fast, modern website that showcases your business with confidence. It loads quickly on phones, looks polished, and clearly explains what you do so visitors feel comfortable buying from you.",
    technicalCapabilities: [
      "Custom layout that looks sharp on mobile phones, tablets, and desktops",
      "Fast page load times with easy-to-read text and clear photos",
      "Simple navigation that guides visitors directly to your services",
    ],
    keyDeliverable: "Completed Business Website or Landing Page",
  },
  {
    index: "03",
    stageName: "AI Chatbot & WhatsApp",
    headline: "Convenient Ways for Visitors to Contact You",
    businessExplanation:
      "We add direct WhatsApp buttons and helpful AI assistants so customers can ask questions and reach out in whatever way is easiest for them—even when you're busy.",
    technicalCapabilities: [
      "One-tap WhatsApp button visible across the website",
      "24/7 AI chatbot that answers common questions instantly",
      "Easy options for customers to request quotes or call your team",
    ],
    keyDeliverable: "Active WhatsApp & AI Assistant Setup",
  },
  {
    index: "04",
    stageName: "Accurate Info & FAQs",
    headline: "Helpful Answers to Frequent Customer Questions",
    businessExplanation:
      "We organize your business information, service details, and FAQs so potential clients find the answers they need right away, saving you from repeating the same answers every day.",
    technicalCapabilities: [
      "Assistant is trained strictly on your verified business details",
      "Clear FAQ sections covering prices, timelines, and policies",
      "Automatic option to connect to a real person whenever needed",
    ],
    keyDeliverable: "Verified Business FAQ & Response Rules",
  },
  {
    index: "05",
    stageName: "Connected Tools",
    headline: "Inquiries Sent Straight to Your Phone or Inbox",
    businessExplanation:
      "When someone submits an inquiry or asks for a quote, the information is automatically routed straight to your WhatsApp, email, or CRM so you can respond quickly without missing a lead.",
    technicalCapabilities: [
      "Instant email and WhatsApp message notifications for new inquiries",
      "Automatic logging of leads into your preferred spreadsheet or CRM",
      "Calendar booking links so clients can schedule calls automatically",
    ],
    keyDeliverable: "Connected Inquiry & Notification Pipeline",
  },
  {
    index: "06",
    stageName: "More Clients & Time Saved",
    headline: "A Website That Actively Helps Your Business Grow",
    businessExplanation:
      "The result is a complete digital solution: more inquiries from interested customers, faster response times, and hours of repetitive manual admin saved every week.",
    technicalCapabilities: [
      "Continuous customer capture even when you are offline or busy",
      "Fewer repetitive customer service phone calls and emails",
      "Clear, organized customer details ready for quick follow-up",
    ],
    keyDeliverable: "A Complete, Client-Generating Website",
  },
];
