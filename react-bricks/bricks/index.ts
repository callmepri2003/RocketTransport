import { types } from "react-bricks/frontend"
import { JumbotronSlideshow, SlideItem } from "./Slideshow"
import { DropdownItem, DropdownNavItem, Navbar, SimpleNavItem } from "./Navigation"
import { ServiceCard, ServicesGrid } from "../ServicesMini"
import { Footer, FooterLink } from "./Footer"
import { TransportEnquiryForm } from "./RequestRate"
import { AboutJumbotron, GalleryImageItem, StatCard } from "./about-us-jumbotron"
import TransportSection from "./about-us-section1"
import TeamPhoneCallSection from "./about-us-phone-call"

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
  TeamPhoneCallSection
]

export default bricks
