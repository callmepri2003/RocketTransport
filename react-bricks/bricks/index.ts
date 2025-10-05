import { types } from "react-bricks/frontend"
import Hero from "./Hero"
import { Services } from "./Services"
import { StatItem, Stats } from "./Stats"
import ServiceItem from "./ServiceItem"
import { Navigation, NavItem } from "./Navigation"
import { About, AboutFeature } from "./About"
import { CTA, CTAItem } from "./CTA"
import { Footer, FooterColumn, FooterContactItem, FooterLink } from "./Footer"

const bricks: types.Brick[] = [
  Hero,
  Services,
  Stats,
  StatItem,
  ServiceItem,
  Navigation,
  NavItem,
  About,
  AboutFeature,
  CTA,
  CTAItem,
  Footer,
  FooterColumn,
  FooterLink,
  FooterContactItem,
]

export default bricks
