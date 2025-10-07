import React from 'react';
import { types, Repeater, Text } from 'react-bricks/frontend';

interface NavbarProps {
  logo: types.IImageSource;
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
}

const Navbar: types.Brick<NavbarProps> = ({
  logo,
  backgroundColor = '#ffffff',
  textColor = '#000000',
  hoverColor = '#1a237e'
}) => {
  const navbarId = React.useId();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor,
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            {logo && (
              <img
                src={logo.src}
                alt={logo.alt || 'Logo'}
                height="40"
                className="d-inline-block align-text-top"
              />
            )}
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${navbarId}`}
            aria-controls={navbarId}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse" id={navbarId}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Repeater propName="navItems" />
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
        .navbar-nav .nav-link {
          color: ${textColor} !important;
          font-weight: 500;
          padding: 0.5rem 1rem !important;
          transition: color 0.3s ease;
        }
        
        .navbar-nav .nav-link:hover {
          color: ${hoverColor} !important;
        }
        
        .navbar-nav .dropdown-menu {
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .navbar-nav .dropdown-item {
          padding: 0.5rem 1.5rem;
          transition: background-color 0.3s ease;
        }
        
        .navbar-nav .dropdown-item:hover {
          background-color: ${hoverColor};
          color: white;
        }
      `}</style>
    </>
  );
};

// Simple Nav Item (no dropdown)
interface SimpleNavItemProps {
  label: string;
  url: string;
}

const SimpleNavItem: types.Brick<SimpleNavItemProps> = ({
  label = 'Nav Item',
  url = '#'
}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={url}>
        {label}
      </a>
    </li>
  );
};

SimpleNavItem.schema = {
  name: 'simple-nav-item',
  label: 'Simple Link',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    label: 'Nav Item',
    url: '#'
  }),
  sideEditProps: [
    {
      name: 'label',
      label: 'Link Text',
      type: types.SideEditPropType.Text
    },
    {
      name: 'url',
      label: 'URL',
      type: types.SideEditPropType.Text
    }
  ]
};

// Dropdown Nav Item
interface DropdownNavItemProps {
  label: string;
  isClickable: boolean;
  url: string;
}

const DropdownNavItem: types.Brick<DropdownNavItemProps> = ({
  label = 'Dropdown',
  isClickable = false,
  url = '#'
}) => {
  return (
    <li className="nav-item dropdown">
      {isClickable ? (
        <a className="nav-link dropdown-toggle" href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {label}
        </a>
      ) : (
        <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
          {label}
        </span>
      )}
      <ul className="dropdown-menu">
        <Repeater propName="dropdownItems" />
      </ul>
    </li>
  );
};

DropdownNavItem.schema = {
  name: 'dropdown-nav-item',
  label: 'Dropdown Menu',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    label: 'Company',
    isClickable: false,
    url: '#',
    dropdownItems: [
      {
        label: 'About',
        url: '\about-us'
      },
      {
        label: 'Safety and Compliance',
        url: '/safety-and-compliance'
      },
      {
        label: 'Careers',
        url: '/careers'
      }
    ]
  }),
  repeaterItems: [
    {
      name: 'dropdownItems',
      itemType: 'dropdown-item',
      itemLabel: 'Dropdown Item',
      min: 1,
      max: 10
    }
  ],
  sideEditProps: [
    {
      name: 'label',
      label: 'Dropdown Label',
      type: types.SideEditPropType.Text
    },
    {
      name: 'isClickable',
      label: 'Make Label Clickable',
      type: types.SideEditPropType.Boolean
    },
    {
      name: 'url',
      label: 'URL (if clickable)',
      type: types.SideEditPropType.Text,
      show: (props) => props.isClickable
    }
  ]
};

// Dropdown Item
interface DropdownItemProps {
  label: string;
  url: string;
}

const DropdownItem: types.Brick<DropdownItemProps> = ({
  label = 'Dropdown Item',
  url = '#'
}) => {
  return (
    <li>
      <a className="dropdown-item" href={url}>
        {label}
      </a>
    </li>
  );
};

DropdownItem.schema = {
  name: 'dropdown-item',
  label: 'Dropdown Item',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    label: 'Dropdown Item',
    url: '#'
  }),
  sideEditProps: [
    {
      name: 'label',
      label: 'Item Text',
      type: types.SideEditPropType.Text
    },
    {
      name: 'url',
      label: 'URL',
      type: types.SideEditPropType.Text
    }
  ]
};

Navbar.schema = {
  name: 'navbar',
  label: 'Navigation Bar',
  category: 'layout',
  tags: ['navbar', 'navigation', 'header', 'menu'],

  getDefaultProps: () => ({
    logo: {
      src: 'https://via.placeholder.com/150x40/0d6efd/ffffff?text=Logo',
      placeholderSrc: 'https://via.placeholder.com/150x40/0d6efd/ffffff?text=Logo',
      srcSet: '',
      alt: 'Company Logo'
    },
    backgroundColor: '#ffffff',
    textColor: '#000000',
    hoverColor: '#1a237e !important',
    navItems: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Company',
        isClickable: false,
        dropdownItems: [
          { label: 'About Us', url: '/about-us' },
          { label: 'Safety & Compliance', url: '/safety' }
        ]
      },
      {
        label: 'Services',
        url: '/services'
      },
      {
        label: 'Contact',
        url: '/contact'
      },
      {
        label: 'Request a Rate',
        url: '/request-rate'
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'navItems',
      items: [
        { type: 'simple-nav-item' },
        { type: 'dropdown-nav-item' }
      ],
      min: 1,
      max: 10
    }
  ],

  sideEditProps: [
    {
      groupName: 'Logo',
      defaultOpen: true,
      props: [
        {
          name: 'logo',
          label: 'Logo Image',
          type: types.SideEditPropType.Image
        }
      ]
    },
    {
      groupName: 'Colors',
      defaultOpen: false,
      props: [
        {
          name: 'backgroundColor',
          label: 'Background Color',
          type: types.SideEditPropType.Text
        },
        {
          name: 'textColor',
          label: 'Text Color',
          type: types.SideEditPropType.Text
        },
        {
          name: 'hoverColor',
          label: 'Hover Color',
          type: types.SideEditPropType.Text
        }
      ]
    }
  ]
};

export { Navbar, SimpleNavItem, DropdownNavItem, DropdownItem };