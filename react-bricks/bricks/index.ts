import { types } from "react-bricks/frontend"
import { JumbotronSlideshow, SlideItem } from "./Slideshow"
import { DropdownItem, DropdownNavItem, Navbar, SimpleNavItem } from "./Navigation"
import { ServiceCard, ServicesGrid } from "../ServicesMini"
import { Footer, FooterLink } from "./Footer"
import { TransportEnquiryForm } from "./RequestRate"
import { AboutJumbotron, GalleryImageItem, StatCard } from "./about-us-jumbotron"
import TransportSection from "./about-us-section1"
import TeamPhoneCallSection from "./about-us-phone-call"
import MissionVisionSection from './about-us-section3'
import DirectorsSection, { DirectorCard } from "./about-us-section4"
import ServicesFeaturesSection, { FeatureCard } from "./about-us-section5"
import ArticleFeaturesSection, { FeatureHighlight, GalleryImage } from "./about-us-section6"
import { FileResource, FileUploadBrick } from "./resources"
import CareersApplication from "./careers"
import { GeneralEnquiriesForm } from "./GeneralEnquiries"

const bricks: types.Brick[] = [
  JumbotronSlideshow,
  SlideItem,
  Navbar,
  SimpleNavItem,
  DropdownItem,
  DropdownNavItem,
  ServicesGrid,
  ServiceCard,
  Footer,
  FooterLink,
  TransportEnquiryForm,
  AboutJumbotron,
  GalleryImageItem,
  StatCard,
  TransportSection,
  TeamPhoneCallSection,
  MissionVisionSection,
  DirectorsSection,
  DirectorCard,
  ServicesFeaturesSection,
  FeatureCard,
  ArticleFeaturesSection,
  GalleryImage,
  FeatureHighlight,
  FileUploadBrick,
  FileResource,
  CareersApplication,
  GeneralEnquiriesForm
]

export default bricks
