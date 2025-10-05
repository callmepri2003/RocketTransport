import { types } from "react-bricks/frontend"
import { JumbotronSlideshow, SlideItem } from "./Slideshow"
import { DropdownItem, DropdownNavItem, Navbar, SimpleNavItem } from "./Navigation"
import { ServiceCard, ServicesGrid } from "../ServicesMini"
import { Footer, FooterLink } from "./Footer"

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
  FooterLink
]

export default bricks
