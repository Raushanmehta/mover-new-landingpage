import siteData from "./site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type MoverNewSchema = typeof siteData.MoverNew;
export type MoverNewSections = MoverNewSchema["sections"];
export type MoverNewTemplateComponents = MoverNewSchema["templateComponents"];

// Schema aliases
export type ServicesSchema = MoverNewSchema;
export type ServicesSections = MoverNewSections;

// SectionProps interface
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// Data models
export type MoverNewTopbarData = MoverNewSections["topbar"]["variants"]["MoverNewTopbar1"];
export type MoverNewNavbarData = MoverNewSections["navbar"]["variants"]["MoverNewNavbar1"];
export type MoverNewNavItemsData = MoverNewNavbarData["navItems"];
export type MoverNewFooterData = MoverNewSections["footer"]["variants"]["MoverNewFooter1"];
export type MoverNewHeroData = MoverNewSections["hero"]["variants"]["MoverNewHero1"];
export type MoverNewAboutData = MoverNewSections["about"]["variants"]["MoverNewAbout1"];
export type MoverNewServicesData = MoverNewSections["services"]["variants"]["MoverNewServices1"];
export type MoverNewTeamData = MoverNewSections["team"]["variants"]["MoverNewTeam1"];
export type MoverNewWhyChooseUsData = MoverNewSections["whyChooseUs"]["variants"]["MoverNewWhyChooseUs1"];
export type MoverNewTestimonialData = MoverNewSections["testimonials"]["variants"]["MoverNewTestimonials1"];
export type MoverNewTestimonialsData = MoverNewTestimonialData;
export type MoverNewNotFoundData = MoverNewSections["notFound"]["variants"]["MoverNewNotFound1"];
export type MoverNewFaqsData = MoverNewSections["faqs"]["variants"]["MoverNewFaqs1"];
export type MoverNewContactModalData = MoverNewSections["contactModal"]["variants"]["MoverNewContactModal1"];

// Optional item types
export type NavItem = MoverNewNavbarData["navItems"][number];
export type ServiceItem = MoverNewServicesData["servicesList"][number];
export type TeamMember = MoverNewTeamData["members"][number];
export type WhyChooseUsItem = MoverNewWhyChooseUsData["features"][number];
export type TestimonialItem = MoverNewTestimonialsData["testimonials"][number];

// Site map
const sec = siteData.MoverNew.sections;

export const siteMap = {
  // Compatibility section shortcuts
  topbar: sec.topbar.variants.MoverNewTopbar1,
  navbar: sec.navbar.variants.MoverNewNavbar1,
  navItems: sec.navbar.variants.MoverNewNavbar1.navItems,
  footer: sec.footer.variants.MoverNewFooter1,
  hero: sec.hero.variants.MoverNewHero1,
  about: sec.about.variants.MoverNewAbout1,
  services: sec.services.variants.MoverNewServices1,
  team: sec.team.variants.MoverNewTeam1,
  whyChooseUs: sec.whyChooseUs.variants.MoverNewWhyChooseUs1,
  testimonial: sec.testimonials.variants.MoverNewTestimonials1,
  testimonials: sec.testimonials.variants.MoverNewTestimonials1,
  notFound: sec.notFound.variants.MoverNewNotFound1,
  faqs: sec.faqs.variants.MoverNewFaqs1,
  contactModal: sec.contactModal.variants.MoverNewContactModal1,

  // Compatibility section shortcuts
  topbarData: sec.topbar.variants.MoverNewTopbar1,
  navbarData: sec.navbar.variants.MoverNewNavbar1,
  footerData: sec.footer.variants.MoverNewFooter1,
  heroData: sec.hero.variants.MoverNewHero1,
  aboutData: sec.about.variants.MoverNewAbout1,
  servicesData: sec.services.variants.MoverNewServices1,
  teamData: sec.team.variants.MoverNewTeam1,
  whyChooseUsData: sec.whyChooseUs.variants.MoverNewWhyChooseUs1,
  testimonialData: sec.testimonials.variants.MoverNewTestimonials1,
  testimonialsData: sec.testimonials.variants.MoverNewTestimonials1,
  notFoundData: sec.notFound.variants.MoverNewNotFound1,
  faqsData: sec.faqs.variants.MoverNewFaqs1,
  contactModalData: sec.contactModal.variants.MoverNewContactModal1,

  // Root Tree
  MoverNew: siteData.MoverNew,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;
