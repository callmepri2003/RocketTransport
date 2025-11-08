import React from 'react';
import { types, Repeater, Text } from 'react-bricks/frontend';

// ============================================
// FOOTER BRICK
// ============================================

interface FooterProps {
  backgroundImage: types.IImageSource;
  overlayColor: string;
  overlayOpacity: number;
  textColor: string;
  logo: types.IImageSource;
  copyrightText: string;
}

const Footer: types.Brick<FooterProps> = ({
  backgroundImage,
  overlayColor = '#1a1f2e',
  overlayOpacity = 0.95,
  textColor = '#ffffff',
  logo,
  copyrightText = '©2025 Rocket Transport - All Rights Reserved'
}) => {
  return (
    <footer style={{ position: 'relative', color: textColor }}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />
      )}

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="container py-5" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row g-4">
          {/* About Our Company */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3" style={{ color: textColor, fontWeight: '700', textTransform: 'uppercase', fontSize: '1rem' }}>
              About Our Company
            </h5>
            <Text
              propName="companyDescription"
              placeholder="Company description..."
              renderBlock={({ children }) => (
                <p style={{ color: textColor, opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {children}
                </p>
              )}
            />
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3" style={{ color: textColor, fontWeight: '700', textTransform: 'uppercase', fontSize: '1rem' }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <Repeater propName="quickLinks" />
            </ul>
          </div>

          {/* More Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3" style={{ color: textColor, fontWeight: '700', textTransform: 'uppercase', fontSize: '1rem' }}>
              More Links
            </h5>
            <ul className="list-unstyled">
              <Repeater propName="moreLinks" />
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-3" style={{ color: textColor, fontWeight: '700', textTransform: 'uppercase', fontSize: '1rem' }}>
              Contact Info
            </h5>
            <div style={{ color: textColor, opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.8' }}>
              {/* <Text
                propName="contactAddress"
                placeholder="Address..."
                renderBlock={({ children }) => (
                  <p className="mb-2">
                    <strong>Address:</strong> {children}
                  </p>
                )}
              /> */}
              <Text
                propName="contactPhone"
                placeholder="Phone number..."
                renderBlock={({ children }) => (
                  <p className="mb-2">
                    <strong>Phone Number:</strong> {children}
                  </p>
                )}
              />
              <Text
                propName="contactEmail"
                placeholder="Email address..."
                renderBlock={({ children }) => (
                  <p className="mb-0">
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${children}`} className="text-blue-600 hover:underline">
                      {children}
                    </a>
                  </p>
                )}
              />
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="row mt-5 pt-4" style={{ borderTop: `1px solid rgba(255, 255, 255, 0.1)` }}>
          <div className="col-12 text-center">
            <p style={{ color: textColor, opacity: 0.7, margin: 0, fontSize: '0.85rem' }}>
              {copyrightText}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        footer a {
          color: ${textColor};
          text-decoration: none;
          opacity: 0.9;
          transition: opacity 0.3s ease;
          font-size: 0.9rem;
        }
        
        footer a:hover {
          opacity: 1;
        }
        
        footer .list-unstyled li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </footer>
  );
};

// Footer Link
interface FooterLinkProps {
  label: string;
  url: string;
}

const FooterLink: types.Brick<FooterLinkProps> = ({
  label = 'Link',
  url = '#'
}) => {
  return (
    <li>
      <a href={url}>{label}</a>
    </li>
  );
};

FooterLink.schema = {
  name: 'footer-link',
  label: 'Footer Link',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    label: 'Link',
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

Footer.schema = {
  name: 'footer',
  label: 'Footer',
  category: 'layout',
  tags: ['footer', 'layout'],

  getDefaultProps: () => ({
    backgroundImage: {
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=800&fit=crop',
      placeholderSrc: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=200&fit=crop',
      srcSet: '',
      alt: 'Footer background'
    },
    logo: {
      src: 'https://via.placeholder.com/150x40/ffffff/1a237e?text=Logo',
      placeholderSrc: 'https://via.placeholder.com/150x40/ffffff/1a237e?text=Logo',
      srcSet: '',
      alt: 'Company Logo'
    },
    overlayColor: '#1a1f2e',
    overlayOpacity: 0.95,
    textColor: '#ffffff',
    companyDescription: 'Logistic was founded to make a mark in London\'s Clearing and Forwarding industry. Logistic started its operations in all the major cities in Europe with the aim to offer the best in logistics services.',
    contactAddress: 'Global Logistic, London 4-5 Spring St, London',
    contactPhone: '+44 20 8786 7200',
    contactEmail: 'info@rockettransport.com',
    copyrightText: '©2025 Rocket Transport - All Rights Reserved',
    quickLinks: [
      { label: 'Home', url: '/' },
      { label: 'About Us', url: '/about' },
      { label: 'Safety & Compliance', url: '/safety' },
      { label: 'Careers', url: '/careers' }
    ],
    moreLinks: [
      { label: 'Services', url: '/services' },
      { label: 'Contact Us', url: '/contact' },
      { label: 'Request a Rate', url: '/request-rate' }
    ]
  }),

  repeaterItems: [
    {
      name: 'quickLinks',
      itemType: 'footer-link',
      itemLabel: 'Link',
      min: 1,
      max: 10
    },
    {
      name: 'moreLinks',
      itemType: 'footer-link',
      itemLabel: 'Link',
      min: 1,
      max: 10
    }
  ],

  sideEditProps: [
    {
      groupName: 'Background',
      defaultOpen: true,
      props: [
        {
          name: 'backgroundImage',
          label: 'Background Image',
          type: types.SideEditPropType.Image
        },
        {
          name: 'overlayColor',
          label: 'Overlay Color',
          type: types.SideEditPropType.Text
        },
        {
          name: 'overlayOpacity',
          label: 'Overlay Opacity',
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 0,
            max: 1,
            step: 0.05
          }
        }
      ]
    },
    {
      groupName: 'Branding',
      defaultOpen: false,
      props: [
        {
          name: 'logo',
          label: 'Footer Logo',
          type: types.SideEditPropType.Image
        },
        {
          name: 'textColor',
          label: 'Text Color',
          type: types.SideEditPropType.Text
        }
      ]
    },
    {
      groupName: 'Copyright',
      defaultOpen: false,
      props: [
        {
          name: 'copyrightText',
          label: 'Copyright Text',
          type: types.SideEditPropType.Text
        }
      ]
    }
  ]
};

// // ============================================
// // DEFAULT LAYOUT (Page Template)
// // ============================================

// interface DefaultLayoutProps {}

// const DefaultLayout: types.Brick<DefaultLayoutProps> = () => {
//   return (
//     <div className="default-layout">
//       {/* Header */}
//       <header>
//         <Repeater propName="header" renderWrapper={(items) => <>{items}</>} />
//       </header>

//       {/* Main Content */}
//       <main>
//         <Repeater propName="content" renderWrapper={(items) => <>{items}</>} />
//       </main>

//       {/* Footer */}
//       <footer>
//         <Repeater propName="footer" renderWrapper={(items) => <>{items}</>} />
//       </footer>
//     </div>
//   );
// };

// DefaultLayout.schema = {
//   name: 'default-layout',
//   label: 'Default Page Layout',
//   category: 'layout',
//   tags: ['layout', 'page', 'template'],

//   getDefaultProps: () => ({
//     header: [
//       {
//         // Navbar will be added here
//       }
//     ],
//     content: [
//       // Page content bricks will be added here
//     ],
//     footer: [
//       {
//         // Footer will be added here
//       }
//     ]
//   }),

//   repeaterItems: [
//     {
//       name: 'header',
//       itemType: 'navbar',
//       itemLabel: 'Header',
//       min: 1,
//       max: 1
//     },
//     {
//       name: 'content',
//       items: [
//         { type: 'jumbotron-slideshow' },
//         { type: 'services-grid' }
//       ],
//       itemLabel: 'Content Block',
//       min: 0,
//       max: 50
//     },
//     {
//       name: 'footer',
//       itemType: 'footer',
//       itemLabel: 'Footer',
//       min: 1,
//       max: 1
//     }
//   ],

//   sideEditProps: []
// };

export { Footer, FooterLink };