import React from 'react';
import { types, Repeater, Text } from 'react-bricks/frontend';

// ============================================
// SERVICES GRID CONTAINER
// ============================================

interface ServicesGridProps {
  columns: number;
  gap: number;
  backgroundColor: string;
  paddingY: number;
}

const ServicesGrid: types.Brick<ServicesGridProps> = ({
  columns = 4,
  gap = 24,
  backgroundColor = '#ffffff',
  paddingY = 80
}) => {
  return (
    <section style={{ backgroundColor, padding: `${paddingY}px 0` }}>
      <div className="container">
        <div
          className="row g-0"
          style={{
            gap: `${gap}px`,
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`
          }}
        >
          <Repeater propName="serviceCards" />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .row {
            grid-template-columns: repeat(${Math.min(columns, 2)}, 1fr) !important;
          }
        }
        
        @media (min-width: 992px) {
          .row {
            grid-template-columns: repeat(${Math.min(columns, 3)}, 1fr) !important;
          }
        }
        
        @media (min-width: 1200px) {
          .row {
            grid-template-columns: repeat(${columns}, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

ServicesGrid.schema = {
  name: 'services-grid',
  label: 'Services Grid',
  category: 'content',
  tags: ['services', 'grid', 'cards'],

  getDefaultProps: () => ({
    columns: 4,
    gap: 24,
    backgroundColor: '#ffffff',
    paddingY: 80,
    serviceCards: [
      {
        image: {
          src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop',
          alt: 'Air Freight Forwarding'
        },
        title: 'Air Freight Forwarding',
        buttonText: 'Learn More',
        buttonUrl: '/services/air-freight',
        overlayColor: '#1a237e',
        overlayOpacity: 0.5
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=250&fit=crop',
          alt: 'Ocean Freight Forwarding'
        },
        title: 'Ocean Freight Forwarding',
        buttonText: 'Learn More',
        buttonUrl: '/services/ocean-freight',
        overlayColor: '#3f51b5',
        overlayOpacity: 0.5
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop',
          alt: 'Ground Shipping'
        },
        title: 'Ground Shipping',
        buttonText: 'Learn More',
        buttonUrl: '/services/ground-shipping',
        overlayColor: '#455a64',
        overlayOpacity: 0.5
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=500&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=250&fit=crop',
          alt: 'International Transport'
        },
        title: 'International Transport',
        buttonText: 'Learn More',
        buttonUrl: '/services/international',
        overlayColor: '#00897b',
        overlayOpacity: 0.5
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'serviceCards',
      itemType: 'service-card',
      itemLabel: 'Service Card',
      min: 1,
      max: 12
    }
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'columns',
          label: 'Columns (Desktop)',
          type: types.SideEditPropType.Number,
          validate: (value) => value >= 1 && value <= 6 || 'Between 1 and 6'
        },
        {
          name: 'gap',
          label: 'Gap (px)',
          type: types.SideEditPropType.Number
        },
        {
          name: 'paddingY',
          label: 'Vertical Padding (px)',
          type: types.SideEditPropType.Number
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
        }
      ]
    }
  ]
};

// ============================================
// SERVICE CARD
// ============================================

interface ServiceCardProps {
  image: types.IImageSource;
  overlayColor: string;
  overlayOpacity: number;
  buttonText: string;
  buttonUrl: string;
  buttonStyle: 'solid' | 'outline';
}

const ServiceCard: types.Brick<ServiceCardProps> = ({
  image,
  overlayColor = '#1a237e',
  overlayOpacity = 0.7,
  buttonText = 'Learn More',
  buttonUrl = '#',
  buttonStyle = 'outline'
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        height: '400px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: image ? `url(${image.src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.6s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />

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
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <Text
          propName="title"
          placeholder="Service Title"
          renderBlock={({ children }) => (
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                lineHeight: '1.3',
                color: '#ffffff',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              {children}
            </h3>
          )}
        />

        <a
          href={buttonUrl}
          className={`btn btn-${buttonStyle === 'solid' ? 'light' : 'outline-light'}`}
          style={{
            padding: '0.625rem 2rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            opacity: isHovered ? 1 : 0.95
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

ServiceCard.schema = {
  name: 'service-card',
  label: 'Service Card',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    image: {
      src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop',
      placeholderSrc: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop',
      alt: 'Service'
    },
    title: 'Service Title',
    overlayColor: '#1a237e',
    overlayOpacity: 0.5,
    buttonText: 'Learn More',
    buttonUrl: '#',
    buttonStyle: 'outline'
  }),

  sideEditProps: [
    {
      groupName: 'Image',
      defaultOpen: true,
      props: [
        {
          name: 'image',
          label: 'Background Image',
          type: types.SideEditPropType.Image
        }
      ]
    },
    {
      groupName: 'Overlay',
      defaultOpen: false,
      props: [
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
            step: 0.1
          }
        }
      ]
    },
    {
      groupName: 'Button',
      defaultOpen: false,
      props: [
        {
          name: 'buttonText',
          label: 'Button Text',
          type: types.SideEditPropType.Text
        },
        {
          name: 'buttonUrl',
          label: 'Button URL',
          type: types.SideEditPropType.Text
        },
        {
          name: 'buttonStyle',
          label: 'Button Style',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'outline', label: 'Outline' },
              { value: 'solid', label: 'Solid' }
            ]
          }
        }
      ]
    }
  ]
};

export { ServicesGrid, ServiceCard };