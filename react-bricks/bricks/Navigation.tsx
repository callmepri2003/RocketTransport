import { types, Text, Repeater, Image } from 'react-bricks/frontend'

interface NavItemProps {
  label: string
  href: string
}

const NavItem: types.Brick = () => {
  return (
    <li className="nav-item">
      <Text
        propName="label"
        placeholder="Link text..."
        renderBlock={({ children }) => (
          <a className="nav-link" href="#">{children}</a>
        )}
      />
    </li>
  )
}

NavItem.schema = {
  name: 'nav-item',
  label: 'Nav Item',
  getDefaultProps: () => ({
    label: 'Home',
  }),
  sideEditProps: [
    {
      name: 'href',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    }
  ],
}

const Navigation: types.Brick = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Image
          propName="logo"
          alt="Logo"
          maxWidth={200}
          imageClassName="navbar-brand-img"
        />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <Repeater propName="navItems" />
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navigation.schema = {
  name: 'navigation',
  label: 'Navigation',
  getDefaultProps: () => ({
    logo: {
      src: 'logo.png',
      alt: 'Rocket Transport',
    },
  }),
  repeaterItems: [
    {
      name: 'navItems',
      items: [
        { type: 'nav-item' }
      ],
      min: 1,
      max: 10,
    }
  ],
}

export { Navigation, NavItem }