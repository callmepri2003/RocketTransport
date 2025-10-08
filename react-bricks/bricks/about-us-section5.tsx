import React from 'react'
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'

const ServicesFeaturesSection = ({ backgroundImage, overlayOpacity, overlayColor }) => {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        minHeight: '600px',
        background: overlayColor || 'rgb(30, 64, 175)'
      }}
    >
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      >
        <Image
          propName="backgroundImage"
          alt="Background"
          maxWidth={2000}
          imageClassName="w-100 h-100"
          imageStyle={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          renderWrapper={({ children }) => (
            <div style={{ width: '100%', height: '100%' }}>
              {children}
            </div>
          )}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: `linear-gradient(135deg, ${overlayColor || '#0a1628'} 0%, rgba(10, 22, 40, ${overlayOpacity}) 100%)`,
            zIndex: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="row mb-5">
          <div className="col-lg-10 col-xl-8 mx-auto text-center">
            <Text
              propName="title"
              placeholder="Enter main title..."
              renderBlock={({ children }) => (
                <h2
                  className="text-white fw-bold mb-3"
                  style={{
                    fontSize: '2.5rem',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}
                >
                  {children}
                </h2>
              )}
            />
            <Text
              propName="subtitle"
              placeholder="With ......"
              renderBlock={({ children }) => (
                <div
                  style={{
                    fontSize: '1.4rem',
                    color: '#22d3ee',
                    fontWeight: '300',
                    letterSpacing: '0.02em'
                  }}
                >
                  {children}
                </div>
              )}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          <Repeater propName="features" />
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="col-lg-6">
      <div
        className="text-center p-4 h-100"
        style={{
          background: isHovered
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered
            ? '0 20px 60px rgba(0, 0, 0, 0.4)'
            : '0 4px 20px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        <div
          className="mx-auto mb-4"
          style={{
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isHovered
              ? '#1e40af'
              : 'rgba(59, 130, 246, 0.15)',
            borderRadius: '50%',
            border: '2px solid #1e40af',
            borderColor: isHovered ? 'transparent' : 'rgba(59, 130, 246, 0.3)',
            transition: 'all 0.4s ease',
            transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0) scale(1)'
          }}
        >
          <i
            className={icon || 'fas fa-truck'}
            style={{
              fontSize: '2rem',
              color: '#ffffff'
            }}
          />
        </div>

        {/* Title */}
        <Text
          propName="title"
          placeholder="Feature Title"
          renderBlock={({ children }) => (
            <h3
              className="text-white mb-3"
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                letterSpacing: '-0.01em'
              }}
            >
              {children}
            </h3>
          )}
        />

        {/* Description */}
        <RichText
          propName="description"
          placeholder="Enter feature description..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
          ]}
          renderBlock={({ children }) => (
            <div
              className="mb-4"
              style={{
                fontSize: '1rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
            >
              {children}
            </div>
          )}
        />

        {/* Button */}
        <Text
          propName="buttonText"
          placeholder="Button Text"
          renderBlock={({ children }) => (
            children && children.toString().trim() ? (
              <Text
                propName="buttonLink"
                placeholder="/link"
                renderBlock={({ children: link }) => (
                  <a
                    href='/services'
                    className="btn"
                    style={{
                      backgroundColor: isHovered ? '#1e40af' : 'transparent',
                      color: '#ffffff',
                      border: '1px solid rgba(59, 130, 246, 0.5)',
                      padding: '0.625rem 2rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    {children}
                  </a>
                )}
              />
            ) : null
          )}
        />
      </div>
    </div>
  )
}

FeatureCard.schema = {
  name: 'feature-card',
  label: 'Feature',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    icon: 'fas fa-truck-fast',
    title: 'Fast and Secure',
    description: 'We ensure that stock is delivered on-time and in perfect condition.',
    buttonText: 'SEE MORE',
    buttonLink: '#'
  }),

  sideEditProps: [
    {
      name: 'icon',
      label: 'Font Awesome Icon',
      type: types.SideEditPropType.Text,
    }
  ]
}

ServicesFeaturesSection.schema = {
  name: 'services-features-section',
  label: 'Services Features Section',
  category: 'services',

  getDefaultProps: () => ({
    title: 'A RELIABLE TRANSPORT COMPANY',
    subtitle: 'With .......',
    overlayColor: '#0a1628',
    overlayOpacity: 0.85,
    backgroundImage: {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2000',
      placeholderSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200',
      srcSet: '',
      alt: 'Transport background',
      seoName: 'transport-background'
    },
    features: [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Ship Local or Interstate',
        description: 'We specialise in local deliveries with the capability to accommodate interstate requests.',
        buttonText: 'SEE MORE',
        buttonLink: '/services/'
      },
      {
        icon: 'fas fa-truck-fast',
        title: 'Fast and Secure',
        description: 'We ensure that stock is delivered on-time and in perfect condition.',
        buttonText: 'SEE MORE',
        buttonLink: '/services/'
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'features',
      itemType: 'feature-card',
      itemLabel: 'Feature',
      min: 1,
      max: 6
    }
  ],

  sideEditProps: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: types.SideEditPropType.Image,
      imageOptions: {
        maxWidth: 2000
      }
    },
    {
      name: 'overlayColor',
      label: 'Overlay Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#0a1628', label: 'Dark Blue' },
          { value: '#1e293b', label: 'Slate' },
          { value: '#0f172a', label: 'Navy' },
          { value: '#18181b', label: 'Dark Gray' },
        ],
      },
    },
    {
      name: 'overlayOpacity',
      label: 'Overlay Opacity',
      type: types.SideEditPropType.Range,
      rangeOptions: {
        min: 0.5,
        max: 1,
        step: 0.05
      }
    }
  ],
}

export { ServicesFeaturesSection, FeatureCard }
export default ServicesFeaturesSection