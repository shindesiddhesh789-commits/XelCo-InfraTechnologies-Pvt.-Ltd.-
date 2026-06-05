import type { LucideIcon } from "lucide-react";
import {
  BadgeIndianRupee,
  BarChart3,
  Bug,
  Building2,
  BusFront,
  CircleParking,
  Clock3,
  FerrisWheel,
  Footprints,
  GraduationCap,
  HandPlatter,
  Landmark,
  Leaf,
  MapPin,
  PartyPopper,
  Plane,
  Recycle,
  School,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Store,
  TrainFront,
  TrendingDown,
  Trees,
  Users,
  UtensilsCrossed,
  Warehouse,
} from "lucide-react";

import municipalitiesHero from "@/assets/municipalities-hero.jpg";
import municipalitiesProblem from "@/assets/municipalities-problem.jpg";
import municipalitiesSolution from "@/assets/municipalities-solution.jpg";

import universitiesHero from "@/assets/universities-hero.jpg";
import universitiesProblem from "@/assets/universities-problem.jpg";
import universitiesSolution from "@/assets/universities-solution.jpg";

import parksHero from "@/assets/solution-parks.jpg";
import transitHero from "@/assets/solution-transit.jpg";
import airportsHero from "@/assets/solution-airports.jpg";
import amusementHero from "@/assets/solution-amusement.jpg";
import foodHero from "@/assets/solution-food.jpg";
import pestHero from "@/assets/solution-pest.jpg";
import tidierHero from "@/assets/solution-cleaner.jpg";
import recyclingHero from "@/assets/solution-recycling.jpg";
import fewerCollectionsHero from "@/assets/solution-reduced.jpg";
import softwareDashboard from "@/assets/software-dashboard.jpg";

export type SolutionPageBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SolutionPageUseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type SolutionPage = {
  slug: string;
  path: string;
  label: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroAlt: string;
  problemTitle: string;
  problemDescription: string;
  problemPoints: string[];
  problemImage: string;
  problemAlt: string;
  solutionTitle: string;
  solutionDescription: string;
  solutionFeatures: string[];
  solutionImage: string;
  solutionAlt: string;
  benefitsHeading: string;
  benefits: SolutionPageBenefit[];
  useCasesHeading: string;
  useCases: SolutionPageUseCase[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
  cardDescription: string;
  seoTitle: string;
  seoDescription: string;
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "municipalities",
    path: "/municipalities",
    label: "Municipalities",
    tagline: "Smart Cities, Cleaner Wards",
    heroTitle: "Smarter Waste Management for Indian Municipalities",
    heroSubtitle:
      "From nagar panchayats to major city corporations, Meshion helps local bodies run cleaner streets with IoT-enabled smart bins and route intelligence.",
    heroImage: municipalitiesHero,
    heroAlt: "Smart waste bins deployed on an Indian city street",
    problemTitle: "Urban Growth Is Outpacing Traditional Waste Operations",
    problemDescription:
      "Rapid expansion and mixed land use make fixed collection schedules expensive and unreliable for municipal teams.",
    problemPoints: [
      "Overflowing bins in markets and residential clusters",
      "No live visibility across wards and collection points",
      "High fleet costs from fixed route planning",
      "Low source segregation compliance in public areas",
    ],
    problemImage: municipalitiesProblem,
    problemAlt: "Waste management pressure in an Indian municipality",
    solutionTitle: "A Connected Bin Network Designed for Indian Streets",
    solutionDescription:
      "Meshion combines enclosed bins, sensor monitoring, and cloud controls so sanitation teams collect at the right time with fewer trips.",
    solutionFeatures: [
      "IoT fill-level tracking",
      "Solar-powered compaction",
      "Route alerts and dashboard analytics",
      "Wet, dry, and recyclable stream support",
      "Tamper-resistant and weather-ready hardware",
      "Custom municipal branding options",
    ],
    solutionImage: municipalitiesSolution,
    solutionAlt: "Solar smart bin and dashboard-driven collection workflow",
    benefitsHeading: "Why Municipalities Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Public Streets", description: "Enclosed bins prevent spillover and visible waste in high-footfall corridors." },
      { icon: TrendingDown, title: "Fewer Collection Trips", description: "Smart alerts reduce unnecessary rounds and optimize manpower planning." },
      { icon: Leaf, title: "Lower Emissions", description: "Route efficiency reduces fleet movement and fuel use." },
      { icon: ShieldCheck, title: "Better Public Hygiene", description: "Sealed containment reduces pest access and sanitation complaints." },
      { icon: Recycle, title: "Higher Segregation Compliance", description: "Clearly marked streams make source-level sorting easier." },
      { icon: BarChart3, title: "Operational Visibility", description: "City teams track hotspots and service quality in real time." },
    ],
    useCasesHeading: "Where Municipal Deployments Deliver Fastest",
    useCases: [
      { icon: Landmark, title: "Town Centers", description: "Manage mixed commercial and civic waste without visual clutter." },
      { icon: Store, title: "Market Streets", description: "Control waste spikes during peak trade hours." },
      { icon: Building2, title: "Residential Wards", description: "Improve neighborhood cleanliness with data-led service." },
      { icon: MapPin, title: "Tourism Corridors", description: "Maintain cleaner public areas in visitor-heavy zones." },
    ],
    ctaTitle: "Deploy Smart Bin Solution Across Your City",
    ctaDescription:
      "Book a consultation to design a ward-wise rollout plan aligned to your operational and budget goals.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Data-driven bin networks that help municipalities reduce overflow, optimize collection, and improve urban cleanliness outcomes.",
    seoTitle: "Municipal Smart Waste Management | Meshion India",
    seoDescription:
      "Upgrade municipal waste operations with Meshion smart bins, live fill monitoring, and optimized collection routes for cleaner Indian cities.",
  },
  {
    slug: "parks",
    path: "/parks",
    label: "Parks",
    tagline: "Litter-Free Green Spaces",
    heroTitle: "Smart Waste Management for Indian Parks",
    heroSubtitle:
      "Keep gardens, lakefronts, and recreation zones cleaner with enclosed smart bins built for high visitor movement and outdoor conditions.",
    heroImage: parksHero,
    heroAlt: "Smart bin in an Indian public park",
    problemTitle: "Parks Need Cleanliness Without Constant Manual Patrols",
    problemDescription:
      "Picnic waste, weekend crowds, and dispersed pathways make sanitation inconsistent when teams rely only on fixed rounds.",
    problemPoints: [
      "Overflow near entrances, benches, and play areas",
      "Windblown litter across lawns and walking tracks",
      "Food waste attracting stray animals and pests",
      "Limited zone-level waste visibility",
    ],
    problemImage: parksHero,
    problemAlt: "Litter pressure in a high-footfall urban park in India",
    solutionTitle: "Outdoor-Ready Smart Bins With Real-Time Monitoring",
    solutionDescription:
      "Meshion bins seal waste, compact volume, and send live status alerts so park teams maintain cleaner environments without over-deploying staff.",
    solutionFeatures: [
      "Fill alerts for distributed park zones",
      "Solar-assisted compaction for longer uptime",
      "Enclosed design to control odour and litter",
      "Multiple stream options for recyclable waste",
      "Weather-resistant body for monsoon and heat",
      "Central dashboard for contractor supervision",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Smart waste monitoring dashboard for park operations",
    benefitsHeading: "Why Park Authorities Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Visitor Experience", description: "Maintain cleaner lawns, pathways, and seating zones all day." },
      { icon: TrendingDown, title: "Lower Collection Load", description: "Service bins when needed, not by rigid schedules." },
      { icon: ShieldCheck, title: "Improved Hygiene Control", description: "Sealed bins reduce exposed waste in family zones." },
      { icon: Leaf, title: "Greener Park Operations", description: "Reduced pickup trips support low-emission maintenance." },
      { icon: Recycle, title: "Better Public Recycling", description: "Clear stream signage helps visitors sort responsibly." },
      { icon: BarChart3, title: "Zone-Level Insights", description: "Track hotspots and optimize placement over time." },
    ],
    useCasesHeading: "Ideal Deployment Zones in Parks",
    useCases: [
      { icon: Trees, title: "Gardens and Green Lawns", description: "Prevent litter spread in landscaped and picnic-friendly areas." },
      { icon: Footprints, title: "Walking and Jogging Tracks", description: "Support on-the-go disposal without overflow incidents." },
      { icon: PartyPopper, title: "Event Lawns", description: "Handle waste spikes during community events and weekends." },
      { icon: CircleParking, title: "Entry Gates and Parking", description: "Keep first-impression areas clean at high turnover." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Your Park Network",
    ctaDescription:
      "Create cleaner public parks with a deployment model tuned to visitor flow and seasonal demand.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Keep parks clean and welcoming with enclosed bins that prevent litter spread and reduce unnecessary collection rounds.",
    seoTitle: "Smart Waste Bins for Parks | Meshion India",
    seoDescription:
      "Improve litter control in Indian parks with Meshion smart bins, real-time fill alerts, and efficient outdoor waste operations.",
  },
  {
    slug: "transit",
    path: "/transit",
    label: "Transit",
    tagline: "Clean Hubs, Smooth Commutes",
    heroTitle: "Smart Waste Solutions for Transit Networks",
    heroSubtitle:
      "From bus terminals to metro interchanges, Meshion helps transit agencies maintain cleaner passenger spaces while reducing collection disruption.",
    heroImage: transitHero,
    heroAlt: "Smart bins installed in an Indian transit hub",
    problemTitle: "High Passenger Turnover Creates Continuous Waste Pressure",
    problemDescription:
      "Transit locations face fast-moving footfall and uneven waste surges, especially during rush hours and service transitions.",
    problemPoints: [
      "Bins fill quickly near ticketing and waiting areas",
      "Manual rounds interrupt passenger movement",
      "Overflow drives complaints and cleaning escalations",
      "No central visibility across multi-station networks",
    ],
    problemImage: transitHero,
    problemAlt: "Waste accumulation risk in busy Indian transit facilities",
    solutionTitle: "Real-Time Waste Intelligence for Transport Operations",
    solutionDescription:
      "Meshion integrates smart bins and cloud dashboards so station teams receive timely alerts, prioritize high-load points, and reduce unnecessary pickups.",
    solutionFeatures: [
      "Fill-level telemetry for each station zone",
      "Compaction to extend capacity during rush periods",
      "Alert-based collections to reduce platform disruptions",
      "Unified command dashboard across locations",
      "Durable bins for heavy daily usage",
      "Recycling stream support for public sustainability goals",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Control dashboard used by transit waste operations team",
    benefitsHeading: "Why Transit Authorities Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Passenger Touchpoints", description: "Maintain cleaner stations, shelters, and queue areas." },
      { icon: Clock3, title: "Less Service Disruption", description: "Schedule pickups around operations instead of reactive rounds." },
      { icon: TrendingDown, title: "Lower Operating Cost", description: "Reduce repeat collections and improve staff productivity." },
      { icon: ShieldCheck, title: "Improved Hygiene Standards", description: "Contain waste and odour in enclosed systems." },
      { icon: Recycle, title: "Stronger Segregation Outcomes", description: "Deploy stream-based bins for better recovery rates." },
      { icon: BarChart3, title: "Network-Wide Visibility", description: "Track trends by station to optimize staffing and routes." },
    ],
    useCasesHeading: "Best-Fit Transit Deployment Scenarios",
    useCases: [
      { icon: BusFront, title: "Bus Stands and Depots", description: "Handle queue-side waste during arrival and departure waves." },
      { icon: TrainFront, title: "Railway Stations", description: "Maintain cleaner concourses and waiting halls." },
      { icon: Building2, title: "Metro Interchanges", description: "Control waste in transfer corridors with tight cleanup windows." },
      { icon: MapPin, title: "Last-Mile Terminals", description: "Improve cleanliness at shared mobility and feeder points." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Transit Facilities",
    ctaDescription:
      "Build a cleaner commuter experience with waste systems designed for continuous movement and high throughput.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Optimize bus, rail, and metro waste workflows with smart bins that reduce overflow and collection disruption.",
    seoTitle: "Transit Waste Management Solutions | Meshion India",
    seoDescription:
      "Deploy IoT smart bins across bus stands, railway stations, and metro hubs to improve cleanliness and reduce transit waste costs.",
  },
  {
    slug: "universities",
    path: "/universities",
    label: "Universities",
    tagline: "Sustainable Campuses at Scale",
    heroTitle: "Smart Waste Management for Indian Universities",
    heroSubtitle:
      "Meshion helps institutions deliver cleaner campuses, stronger recycling performance, and measurable sustainability outcomes for students and staff.",
    heroImage: universitiesHero,
    heroAlt: "Smart bins deployed across an Indian university campus",
    problemTitle: "Campus Waste Volumes Shift Constantly Across Zones",
    problemDescription:
      "Hostels, canteens, lecture blocks, and events each produce different waste patterns, making one-size collection models inefficient.",
    problemPoints: [
      "Overflow around hostels and food courts during peak hours",
      "Low segregation compliance in open campus spaces",
      "Manual rounds consuming housekeeping bandwidth",
      "Difficulty measuring sustainability initiatives with real data",
    ],
    problemImage: universitiesProblem,
    problemAlt: "Waste pressure around busy university areas",
    solutionTitle: "Connected Bins for Data-Led Campus Operations",
    solutionDescription:
      "Meshion enables facility teams to monitor bin health in real time, optimize pickups, and run cleaner, lower-effort operations across large campuses.",
    solutionFeatures: [
      "Live bin status across hostels and academic zones",
      "Compaction for high-waste meal and event periods",
      "Segregated streams for wet, dry, and recyclables",
      "Cloud dashboard for facility and admin teams",
      "Durable outdoor-ready hardware for campus conditions",
      "Messaging surfaces for student sustainability campaigns",
    ],
    solutionImage: universitiesSolution,
    solutionAlt: "Campus smart bin solution integrated with dashboard analytics",
    benefitsHeading: "Why Universities Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Campus Experience", description: "Improve daily cleanliness across pathways, hostels, and common areas." },
      { icon: TrendingDown, title: "Reduced Housekeeping Burden", description: "Alert-based service lowers repetitive collection rounds." },
      { icon: Recycle, title: "Better Recycling Performance", description: "Stream-based bins improve source-level segregation." },
      { icon: ShieldCheck, title: "Improved Hygiene and Safety", description: "Closed containment helps reduce pest activity and odour." },
      { icon: Users, title: "Student Engagement", description: "Visible infrastructure reinforces green campus culture." },
      { icon: BarChart3, title: "Evidence-Based Reporting", description: "Track cleanliness and diversion metrics for audits." },
    ],
    useCasesHeading: "High-Impact Campus Deployment Zones",
    useCases: [
      { icon: Building2, title: "Hostels and Residences", description: "Manage dense daily waste loads with fewer overflow incidents." },
      { icon: UtensilsCrossed, title: "Canteens and Food Courts", description: "Handle organic and mixed waste surges during meal windows." },
      { icon: School, title: "Academic Blocks", description: "Maintain cleaner learning environments with structured bin placement." },
      { icon: PartyPopper, title: "Events and Festivals", description: "Scale waste control for fests, sports meets, and convocations." },
    ],
    ctaTitle: "Deploy Smart Bin Solution Across Your Campus",
    ctaDescription:
      "Build a cleaner and more sustainable university environment with a phased smart-waste rollout plan.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Elevate campus cleanliness and sustainability with IoT-enabled bins built for hostels, canteens, and student life.",
    seoTitle: "University Waste Management Solutions | Meshion India",
    seoDescription:
      "Improve campus cleanliness and recycling with Meshion smart bins for hostels, canteens, and academic blocks across Indian universities.",
  },
  {
    slug: "airports",
    path: "/airports",
    label: "Airports",
    tagline: "High-Flow Waste Control",
    heroTitle: "Smart Waste Systems for Indian Airports",
    heroSubtitle:
      "Deliver cleaner terminals and faster operations with smart bins designed for round-the-clock passenger flow and strict service standards.",
    heroImage: airportsHero,
    heroAlt: "Smart waste bins in an Indian airport passenger zone",
    problemTitle: "Airport Waste Demands Speed, Precision, and Reliability",
    problemDescription:
      "Passenger peaks, security constraints, and multiple service zones make airport waste management complex and time-sensitive.",
    problemPoints: [
      "Rapid fill-up near check-in, boarding, and food zones",
      "Collection activity interfering with passenger movement",
      "High service expectations from domestic and international travelers",
      "Need for visibility across large terminal footprints",
    ],
    problemImage: airportsHero,
    problemAlt: "High-footfall airport environment requiring efficient waste systems",
    solutionTitle: "Smart Bin Operations Built for Aviation Throughput",
    solutionDescription:
      "Meshion helps airport teams monitor waste in real time, coordinate discreet collections, and keep terminals cleaner without overloading staff.",
    solutionFeatures: [
      "Live alerts for critical terminal hotspots",
      "Compaction to handle heavy waste inflow",
      "Sealed bins for hygiene and odor control",
      "Dashboard visibility across terminal zones",
      "Collection planning by peak and off-peak windows",
      "Recycling-ready stream configuration",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Airport operations dashboard monitoring smart waste assets",
    benefitsHeading: "Why Airport Operators Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Stronger Passenger Experience", description: "Maintain cleaner public areas aligned with premium service expectations." },
      { icon: Clock3, title: "Faster Housekeeping Response", description: "Prioritize high-risk bins before overflow impacts terminal movement." },
      { icon: TrendingDown, title: "Lower Waste Service Overhead", description: "Reduce unnecessary rounds with demand-based collection logic." },
      { icon: ShieldAlert, title: "Better Operational Control", description: "Track bin status continuously in high-security environments." },
      { icon: Recycle, title: "Improved Sustainability Metrics", description: "Support airport ESG goals with better segregation compliance." },
      { icon: BarChart3, title: "Terminal-Wide Analytics", description: "Use data to improve placement, staffing, and service quality." },
    ],
    useCasesHeading: "Airport Zones Where Smart Bins Add Immediate Value",
    useCases: [
      { icon: Plane, title: "Check-In and Departure Halls", description: "Control waste in high-throughput pre-security environments." },
      { icon: UtensilsCrossed, title: "Food Courts and Lounges", description: "Manage packaging and food waste during peak travel windows." },
      { icon: Users, title: "Arrival Corridors", description: "Maintain cleaner exit and baggage zones with minimal disruption." },
      { icon: CircleParking, title: "Forecourt and Parking Zones", description: "Keep curbside and shuttle areas cleaner under continuous turnover." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Airport Operations",
    ctaDescription:
      "Design an airport-ready waste strategy that balances passenger experience, hygiene standards, and operational efficiency.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Handle airport waste at scale with live alerts, cleaner terminals, and efficient collections for high-footfall passenger zones.",
    seoTitle: "Airport Waste Management Solutions | Meshion India",
    seoDescription:
      "Deploy smart bins in airport terminals to reduce overflow, improve housekeeping efficiency, and enhance passenger experience.",
  },
  {
    slug: "amusement-parks-zoos",
    path: "/amusement-parks-zoos",
    label: "Amusement Parks & Zoos",
    tagline: "Family-Friendly Clean Zones",
    heroTitle: "Smart Waste Solutions for Parks and Zoos",
    heroSubtitle:
      "Meshion helps entertainment venues and zoological parks manage heavy visitor waste while maintaining cleaner, safer public environments.",
    heroImage: amusementHero,
    heroAlt: "Smart bins in an Indian amusement or zoo environment",
    problemTitle: "Recreation Venues Face Intense, Seasonal Waste Spikes",
    problemDescription:
      "Holiday surges, food consumption, and dispersed attractions make waste control difficult without real-time operational signals.",
    problemPoints: [
      "Overflow near rides, enclosures, and snack kiosks",
      "Litter degrading guest satisfaction and site aesthetics",
      "Food scraps attracting animals and pest activity",
      "Manual teams stretched during peak days",
    ],
    problemImage: amusementHero,
    problemAlt: "High-footfall recreational zone with waste management needs",
    solutionTitle: "Smart Bin Coverage for Crowd-Driven Environments",
    solutionDescription:
      "Meshion delivers enclosed smart bins and live monitoring so teams maintain cleanliness around attractions, dining zones, and event corridors.",
    solutionFeatures: [
      "High-capacity compaction for peak attendance days",
      "Real-time fill alerts across distributed attractions",
      "Odour and litter containment in family spaces",
      "Flexible bin formats for rides, trails, and courts",
      "Weather-ready units for outdoor deployment",
      "Dashboard oversight for contractor and in-house teams",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Waste operations dashboard for amusement and zoo management",
    benefitsHeading: "Why Parks and Zoos Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Guest Experience", description: "Keep ride queues, pathways, and viewing points visually clean." },
      { icon: TrendingDown, title: "Reduced Collection Pressure", description: "Handle peak crowds with fewer emergency clearances." },
      { icon: ShieldCheck, title: "Safer Public Hygiene", description: "Contain waste securely in child- and family-heavy spaces." },
      { icon: Bug, title: "Lower Pest Attraction", description: "Limit exposed food waste around public and animal-facing areas." },
      { icon: Leaf, title: "Cleaner Green Landscapes", description: "Protect gardens and habitat-adjacent spaces from litter spread." },
      { icon: BarChart3, title: "Peak-Day Intelligence", description: "Use crowd-linked waste data to plan staffing and service windows." },
    ],
    useCasesHeading: "Priority Deployment Zones in Recreation Venues",
    useCases: [
      { icon: FerrisWheel, title: "Ride and Queue Zones", description: "Reduce waste pileups where visitor dwell times are longest." },
      { icon: UtensilsCrossed, title: "Snack Courts", description: "Manage packaging waste near high-frequency vendor clusters." },
      { icon: Trees, title: "Landscaped Visitor Paths", description: "Preserve scenic corridors with better litter containment." },
      { icon: PartyPopper, title: "Festival and Event Areas", description: "Scale rapidly for holiday programs and special attractions." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Your Visitor Destination",
    ctaDescription:
      "Build a cleaner and more efficient waste strategy for crowd-intensive recreation environments.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Control high visitor waste volumes in amusement parks and zoos with enclosed bins and smart collection planning.",
    seoTitle: "Waste Solutions for Amusement Parks and Zoos | Meshion India",
    seoDescription:
      "Manage crowd-driven waste in amusement parks and zoos with Meshion smart bins, compaction, and real-time monitoring.",
  },
  {
    slug: "food-service",
    path: "/food-service",
    label: "Food Service",
    tagline: "Cleaner Dining Operations",
    heroTitle: "Smart Waste Management for Food Service Environments",
    heroSubtitle:
      "From food courts to large dining venues, Meshion helps operators handle organic and packaging waste with less disruption to guest service.",
    heroImage: foodHero,
    heroAlt: "Smart bins near an Indian food service area",
    problemTitle: "Dining Zones Generate Fast, Continuous Waste Loads",
    problemDescription:
      "Meal-time surges create sharp waste spikes that overwhelm conventional bins and pull staff away from core guest operations.",
    problemPoints: [
      "Frequent overflow in high-turnover dining areas",
      "Odour and hygiene concerns around exposed food waste",
      "Staff diverted to repeated manual waste rounds",
      "Limited segregation quality for recoverable materials",
    ],
    problemImage: foodHero,
    problemAlt: "Food service waste pressure in a busy dining area",
    solutionTitle: "High-Uptime Smart Bins for Dining and Service Teams",
    solutionDescription:
      "Meshion combines sealed containment, compaction, and live status alerts to improve hygiene and keep food service teams focused on customers.",
    solutionFeatures: [
      "Compaction for high-volume food waste streams",
      "Real-time alerts to prevent service-area overflow",
      "Enclosed bins for better odor control",
      "Segregation-ready layouts for mixed dining waste",
      "Central dashboard for multi-outlet oversight",
      "Flexible formats for front-of-house and back-of-house",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Smart waste analytics dashboard for food service operations",
    benefitsHeading: "Why Food Service Operators Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Guest Areas", description: "Maintain cleaner dining zones during peak meal cycles." },
      { icon: Clock3, title: "Less Staff Interruption", description: "Free service teams from repetitive manual disposal trips." },
      { icon: ShieldCheck, title: "Improved Hygiene Control", description: "Contain wet waste and reduce odour spread in customer-facing spaces." },
      { icon: TrendingDown, title: "Lower Waste Handling Cost", description: "Reduce avoidable rounds and improve labor utilization." },
      { icon: Recycle, title: "Better Segregation Practices", description: "Stream-specific bin setups improve recyclable recovery." },
      { icon: BarChart3, title: "Outlet-Level Waste Insights", description: "Monitor generation trends across food courts and kitchens." },
    ],
    useCasesHeading: "Best-Fit Food Service Deployment Areas",
    useCases: [
      { icon: HandPlatter, title: "Food Courts", description: "Handle sustained mixed-waste traffic from large seating clusters." },
      { icon: UtensilsCrossed, title: "Institutional Canteens", description: "Improve hygiene and consistency in campuses and corporate kitchens." },
      { icon: Store, title: "QSR and Retail Dining", description: "Support cleaner front-of-house service in compact layouts." },
      { icon: Warehouse, title: "Back-of-House Staging", description: "Coordinate transfer points with data-backed pickup timing." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Food Service Sites",
    ctaDescription:
      "Improve guest experience and hygiene outcomes with smart waste infrastructure designed for fast meal cycles.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Reduce dining-area disruption with smart bins that manage high food waste volumes and improve hygiene compliance.",
    seoTitle: "Food Service Waste Management Solutions | Meshion India",
    seoDescription:
      "Deploy Meshion smart bins in food courts, canteens, and dining venues for cleaner operations and efficient waste handling.",
  },
  {
    slug: "pest-rodent-control",
    path: "/pest-rodent-control",
    label: "Pest & Rodent Control",
    tagline: "Seal Waste, Reduce Infestation",
    heroTitle: "Pest and Rodent Control Through Smarter Waste Systems",
    heroSubtitle:
      "Meshion helps cities and facilities reduce pest pressure by removing open-access food waste sources in public environments.",
    heroImage: pestHero,
    heroAlt: "Enclosed smart bin deployed for pest-sensitive public area",
    problemTitle: "Open Waste Is a Major Driver of Rodent and Pest Activity",
    problemDescription:
      "Unsealed bins and irregular clearing create predictable food access points that increase infestations and repeat sanitation incidents.",
    problemPoints: [
      "Rats and pests gathering around open or overflowing bins",
      "Recurring complaints from residents and businesses",
      "Public health risk in dense market and food corridors",
      "High recurring spend on reactive control measures",
    ],
    problemImage: pestHero,
    problemAlt: "Urban waste-related pest control challenge",
    solutionTitle: "Enclosed Smart Bins as a Frontline Pest Mitigation Layer",
    solutionDescription:
      "By sealing waste and improving pickup timing with live alerts, Meshion reduces exposure windows that pests typically exploit.",
    solutionFeatures: [
      "Fully enclosed bin architecture",
      "Timed and alert-based collection workflows",
      "Compaction to reduce spill and exposure frequency",
      "Odour containment to reduce attractants",
      "Dashboard visibility for hotspot monitoring",
      "Support for integrated public health programs",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Dashboard used to monitor pest-risk waste hotspots",
    benefitsHeading: "Why Teams Focused on Pest Control Choose Meshion",
    benefits: [
      { icon: ShieldAlert, title: "Reduced Waste Exposure", description: "Seal waste at source to limit access for rats and pests." },
      { icon: Bug, title: "Lower Pest Pressure", description: "Target recurring hotspots with data-led deployment and service." },
      { icon: ShieldCheck, title: "Stronger Public Hygiene", description: "Support cleaner, safer conditions in community-sensitive areas." },
      { icon: TrendingDown, title: "Reduced Reactive Workload", description: "Prevent recurring incidents that demand urgent intervention." },
      { icon: BarChart3, title: "Actionable Hotspot Data", description: "Track high-risk locations and optimize mitigation strategy." },
      { icon: Leaf, title: "Healthier Urban Environments", description: "Improve neighborhood livability through better containment." },
    ],
    useCasesHeading: "High-Impact Pest-Control Deployment Areas",
    useCases: [
      { icon: Store, title: "Street Food Corridors", description: "Reduce exposed food waste near dense vendor activity." },
      { icon: Landmark, title: "Municipal Markets", description: "Contain wet and mixed waste where pest pressure is highest." },
      { icon: Building2, title: "Dense Residential Blocks", description: "Improve hygiene in mixed-use neighborhoods with repeated complaints." },
      { icon: Warehouse, title: "Transfer and Staging Points", description: "Minimize pest access at temporary holding locations." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Pest-Sensitive Zones",
    ctaDescription:
      "Use enclosed smart bins as a practical, scalable layer in your pest and rodent reduction strategy.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Limit rodent and pest activity by removing exposed waste sources with enclosed, sensor-enabled smart bins.",
    seoTitle: "Pest and Rodent Waste Control Solutions | Meshion India",
    seoDescription:
      "Reduce pest and rodent risk in Indian public spaces with enclosed smart bins and data-driven waste collection workflows.",
  },
  {
    slug: "tidier-spaces",
    path: "/tidier-spaces",
    label: "Tidier Spaces",
    tagline: "Visible Cleanliness, Better Places",
    heroTitle: "Build Tidier Public Spaces With Smart Waste Infrastructure",
    heroSubtitle:
      "Meshion helps cities, campuses, and commercial districts maintain cleaner public environments that residents and visitors notice immediately.",
    heroImage: tidierHero,
    heroAlt: "Neat and clean public area supported by smart bins",
    problemTitle: "Visible Waste Quickly Undermines Public Confidence",
    problemDescription:
      "Overflow, litter spread, and irregular servicing create a perception of neglect even when teams are working hard behind the scenes.",
    problemPoints: [
      "Open bins making waste visible in prime public areas",
      "Litter drift affecting streets, plazas, and walkways",
      "Inconsistent cleanup standards between zones",
      "Public complaints rising despite high manual effort",
    ],
    problemImage: tidierHero,
    problemAlt: "Public realm cleanliness challenge in urban India",
    solutionTitle: "A Cleaner-by-Design Waste System for Public Realm Teams",
    solutionDescription:
      "Meshion combines containment, compaction, and live monitoring to keep spaces cleaner for longer and reduce visible sanitation breakdowns.",
    solutionFeatures: [
      "Enclosed bins that hide and contain waste",
      "Fill-level alerts for timely servicing",
      "Compaction to reduce overflow frequency",
      "Uniform design language across locations",
      "Dashboard tracking for service accountability",
      "Flexible deployment for mixed-use public areas",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Smart city dashboard for keeping public spaces tidy",
    benefitsHeading: "Why Teams Focused on Tidier Spaces Choose Meshion",
    benefits: [
      { icon: Sparkles, title: "Cleaner Visual Environment", description: "Keep public spaces visibly neat with enclosed modern bins." },
      { icon: Footprints, title: "Better Visitor Experience", description: "Improve perceived safety and comfort in pedestrian zones." },
      { icon: TrendingDown, title: "Higher Service Efficiency", description: "Use data to prioritize bins that actually need collection." },
      { icon: ShieldCheck, title: "Consistent Cleanliness", description: "Maintain uniform outcomes across multiple zones." },
      { icon: Leaf, title: "Improved Urban Livability", description: "Support greener and cleaner neighborhood conditions." },
      { icon: BarChart3, title: "Measured Public Realm Performance", description: "Track service quality with live operational indicators." },
    ],
    useCasesHeading: "Best-Fit Areas for Tidier Space Deployment",
    useCases: [
      { icon: Landmark, title: "Commercial Districts", description: "Keep high-visibility business zones cleaner throughout the day." },
      { icon: Trees, title: "Promenades and Waterfronts", description: "Control windblown litter in open visitor-centric spaces." },
      { icon: School, title: "Institutional Precincts", description: "Improve upkeep in hospital, campus, and civic zones." },
      { icon: MapPin, title: "Public Plazas", description: "Support cleaner event and gathering areas with fewer disruptions." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Cleaner Public Spaces",
    ctaDescription:
      "Create a visible step-change in cleanliness with smart bins designed for modern public realm expectations.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Deliver tidier streets and public environments with enclosed bins and smarter collection timing.",
    seoTitle: "Tidier Public Spaces Waste Solutions | Meshion India",
    seoDescription:
      "Improve public space cleanliness in Indian cities with smart bins that reduce litter, overflow, and inconsistent service outcomes.",
  },
  {
    slug: "public-space-recycling",
    path: "/public-space-recycling",
    label: "Public Space Recycling",
    tagline: "Segregate Better, Recover More",
    heroTitle: "Smart Public Space Recycling for Indian Cities",
    heroSubtitle:
      "Meshion helps agencies improve source segregation in open environments with clear stream design, smart monitoring, and better operational visibility.",
    heroImage: recyclingHero,
    heroAlt: "Recycling-focused smart bins in an Indian public area",
    problemTitle: "Public Recycling Breaks Down Without Consistency",
    problemDescription:
      "Mixed disposal behavior and irregular servicing contaminate recyclable streams, reducing recovery rates and increasing processing costs.",
    problemPoints: [
      "Dry and recyclable streams frequently mixed in shared bins",
      "Inconsistent signage and placement across public areas",
      "Overflow forcing mixed collection and contamination",
      "Limited data on stream-specific performance",
    ],
    problemImage: recyclingHero,
    problemAlt: "Public recycling challenge in mixed-use urban zone",
    solutionTitle: "Smart Segregation Infrastructure for Open Environments",
    solutionDescription:
      "Meshion enables cleaner stream separation through structured bin systems and real-time service intelligence that protects recyclable value.",
    solutionFeatures: [
      "Clearly marked multi-stream bin setups",
      "Sensor alerts to preserve stream integrity",
      "Compaction options for high-volume dry waste",
      "Placement strategy by waste-type generation zones",
      "Central dashboard for contamination-prone hotspots",
      "Performance insights for sustainability teams",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Recycling performance dashboard for public waste streams",
    benefitsHeading: "Why Recycling Programs Choose Meshion",
    benefits: [
      { icon: Recycle, title: "Higher Stream Purity", description: "Reduce contamination with clearer public segregation infrastructure." },
      { icon: Sparkles, title: "Cleaner Collection Points", description: "Avoid overflow-related mixing at high-use recycling locations." },
      { icon: TrendingDown, title: "Lower Handling Losses", description: "Protect recoverable material value through timely servicing." },
      { icon: Leaf, title: "Stronger Sustainability Outcomes", description: "Increase diversion rates and support circular economy targets." },
      { icon: Users, title: "Improved Public Participation", description: "Make sorting easier with consistent bin design and signage." },
      { icon: BarChart3, title: "Data-Led Program Improvement", description: "Track stream-level performance and optimize placement." },
    ],
    useCasesHeading: "Public Recycling Deployment Priorities",
    useCases: [
      { icon: Trees, title: "Parks and Promenades", description: "Enable visible, visitor-friendly segregation in open environments." },
      { icon: TrainFront, title: "Transit Corridors", description: "Improve recyclable recovery in daily commuter zones." },
      { icon: GraduationCap, title: "Campus Areas", description: "Support education-led sustainability behavior at scale." },
      { icon: Landmark, title: "Commercial Districts", description: "Build standardized recycling points for mixed user groups." },
    ],
    ctaTitle: "Deploy Smart Bin Solution for Public Recycling Programs",
    ctaDescription:
      "Improve segregation quality and recycling recovery with smarter stream design and real-time waste intelligence.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Increase recycling performance in public spaces with multi-stream smart bins and cleaner stream management.",
    seoTitle: "Public Space Recycling Solutions | Meshion India",
    seoDescription:
      "Improve source segregation and recycling outcomes in Indian public spaces with Meshion smart bin systems and analytics.",
  },
  {
    slug: "fewer-collections",
    path: "/fewer-collections",
    label: "Fewer Collections",
    tagline: "Collect Only When Needed",
    heroTitle: "Reduce Waste Collection Trips With Smart Bin Intelligence",
    heroSubtitle:
      "Meshion helps organizations cut collection frequency while maintaining cleanliness through compaction, live alerts, and route optimization.",
    heroImage: fewerCollectionsHero,
    heroAlt: "Smart waste collection optimization in an Indian urban setting",
    problemTitle: "Fixed Schedules Drive High Cost and Low Efficiency",
    problemDescription:
      "Traditional route plans trigger unnecessary pickups, excess fuel use, and avoidable labor cost even when bins are underfilled.",
    problemPoints: [
      "Collection vehicles visiting half-empty bins",
      "High diesel usage from repetitive route cycles",
      "Overtime pressure on sanitation and fleet teams",
      "No live signal for true pickup priority",
    ],
    problemImage: fewerCollectionsHero,
    problemAlt: "Inefficient waste collection route challenge",
    solutionTitle: "Demand-Based Collections Powered by IoT and Compaction",
    solutionDescription:
      "Meshion bins compact waste and report fill status continuously, enabling route teams to service bins based on need instead of assumptions.",
    solutionFeatures: [
      "Real-time fill alerts by asset and zone",
      "Compaction for significantly higher effective capacity",
      "Priority-based route planning workflows",
      "Monitoring dashboard for collection teams",
      "Service logs for accountability and audits",
      "Performance analytics for long-term optimization",
    ],
    solutionImage: softwareDashboard,
    solutionAlt: "Operational dashboard for reducing collection frequency",
    benefitsHeading: "Why Operations Teams Choose Meshion",
    benefits: [
      { icon: TrendingDown, title: "Fewer Collection Rounds", description: "Cut unnecessary visits and service only bins that need pickup." },
      { icon: BadgeIndianRupee, title: "Lower Operating Cost", description: "Reduce fuel and labor spend through route optimization." },
      { icon: Leaf, title: "Reduced Fleet Emissions", description: "Fewer vehicle kilometers support low-carbon operations." },
      { icon: Clock3, title: "Better Team Productivity", description: "Allocate crews to high-priority tasks with better schedule confidence." },
      { icon: ShieldCheck, title: "Stable Service Quality", description: "Maintain cleanliness while reducing operational intensity." },
      { icon: BarChart3, title: "Continuous Improvement Insights", description: "Track route efficiency and optimize over time." },
    ],
    useCasesHeading: "Where Fewer-Collection Strategies Work Best",
    useCases: [
      { icon: Landmark, title: "Municipal Ward Networks", description: "Reduce route mileage while preserving service quality standards." },
      { icon: GraduationCap, title: "Large Campuses", description: "Lower housekeeping rounds across distributed educational zones." },
      { icon: Plane, title: "Airport Precincts", description: "Minimize cleaning movement in operationally sensitive terminals." },
      { icon: Warehouse, title: "Business Parks", description: "Improve pickup planning in multi-block commercial environments." },
    ],
    ctaTitle: "Deploy Smart Bin Solution to Reduce Collection Load",
    ctaDescription:
      "Run cleaner operations with fewer trips by shifting from schedule-based to demand-based waste collection.",
    ctaButtonLabel: "Deploy Smart Bin Solution",
    cardDescription:
      "Cut waste collection frequency and route cost with compaction-enabled smart bins and live fill-level signals.",
    seoTitle: "Fewer Waste Collections With Smart Bins | Meshion India",
    seoDescription:
      "Reduce collection trips and fuel costs using Meshion smart bins with compaction and real-time fill monitoring.",
  },
];

export const solutionPagesBySlug = Object.fromEntries(
  solutionPages.map((page) => [page.slug, page]),
) as Record<string, SolutionPage>;

export const publicWasteSolutionLinks = solutionPages.map((page) => ({
  label: page.label,
  href: page.path,
}));
