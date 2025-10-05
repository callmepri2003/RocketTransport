import { types, Text, Repeater } from 'react-bricks/frontend'

interface FooterLinkProps {
  text: string
  href: string
}

const FooterLink: types.Brick<FooterLinkProps> = ({ text, href }) => {
  return (
    <li className="mb-2">
      <a href={href}>{text}</a>
    </li>
  )
}

FooterLink.schema = {
  name: 'footer-link',
  label: 'Footer Link',
  getDefaultProps: () => ({
    text: 'Home',
    href: '#home',
  }),
  sideEditProps: [
    {
      name: 'text',
      label: 'Link Text',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'href',
      label: 'Link URL',
      type: types.SideEditPropType.Text,
    }
  ],
}

interface FooterColumnProps {
  title: string
  columnType: 'about' | 'links' | 'contact'
}

const FooterColumn: types.Brick<FooterColumnProps> = ({ title, columnType }) => {
  const getColumnClass = () => {
    if (columnType === 'about') return 'col-lg-4 mb-4'
    if (columnType === 'links') return 'col-lg-2 col-md-6 mb-4'
    return 'col-lg-3 col-md-6 mb-4'
  }

  return (
    <div className={getColumnClass()}>
      <h5>{title}</h5>
      {columnType === 'about' && (
        <>
          <Text
            propName="description"
            placeholder="Description..."
            renderBlock={({ children }) => <p>{children}</p>}
          />
          <div className="mt-3">
            <a href="#" className="me-3"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="#" className="me-3"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="#" className="me-3"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </>
      )}
      {columnType === 'links' && (
        <ul className="list-unstyled">
          <Repeater propName="links" />
        </ul>
      )}
      {columnType === 'contact' && (
        <ul className="list-unstyled">
          <Repeater propName="contactItems" />
        </ul>
      )}
    </div>
  )
}

FooterColumn.schema = {
  name: 'footer-column',
  label: 'Footer Column',
  getDefaultProps: () => ({
    title: 'Quick Links',
    columnType: 'links',
    description: 'Your trusted logistics partner since 2001.',
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'columnType',
      label: 'Column Type',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'about', label: 'About' },
          { value: 'links', label: 'Links' },
          { value: 'contact', label: 'Contact' },
        ],
      },
    }
  ],
  repeaterItems: [
    {
      name: 'links',
      items: [{ type: 'footer-link' }],
      min: 0,
      max: 10,
    },
    {
      name: 'contactItems',
      items: [{ type: 'footer-contact-item' }],
      min: 0,
      max: 10,
    }
  ],
}

interface FooterContactItemProps {
  icon: string
  text: string
}

const FooterContactItem: types.Brick<FooterContactItemProps> = ({ icon, text }) => {
  return (
    <li className="mb-2">
      <i className={`${icon} me-2`}></i> {text}
    </li>
  )
}

FooterContactItem.schema = {
  name: 'footer-contact-item',
  label: 'Footer Contact Item',
  getDefaultProps: () => ({
    icon: 'fas fa-map-marker-alt',
    text: '123 Transport Ave',
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon Class',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'text',
      label: 'Text',
      type: types.SideEditPropType.Text,
    }
  ],
}

const Footer: types.Brick = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <Repeater propName="columns" />
        </div>
        <div className="footer-bottom">
          <Text
            propName="copyright"
            placeholder="Copyright text..."
            renderBlock={({ children }) => <p>{children}</p>}
          />
        </div>
      </div>
    </footer>
  )
}

Footer.schema = {
  name: 'footer',
  label: 'Footer',
  getDefaultProps: () => ({
    copyright: '© 2025 Rocket Transport. All rights reserved. | Est. 2001',
  }),
  repeaterItems: [
    {
      name: 'columns',
      items: [{ type: 'footer-column' }],
      min: 1,
      max: 6,
    }
  ],
}

export { Footer, FooterColumn, FooterLink, FooterContactItem }