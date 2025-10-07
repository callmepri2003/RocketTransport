import React from 'react'
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'

const ArticleFeaturesSection = ({ background }) => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: background || '#ffffff' }}
    >
      <div className="container">
        {/* Hero Image */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}
            >
              <Image
                propName="heroImage"
                alt="Article hero image"
                maxWidth={1200}
                aspectRatio={2.5}
                imageClassName="w-100"
                imageStyle={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>

        {/* Article Header */}
        <div className="row mb-4">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <Text
              propName="title"
              placeholder="Enter article title..."
              renderBlock={({ children }) => (
                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: '2.5rem',
                    color: '#1e293b',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}
                >
                  {children}
                </h1>
              )}
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="row mb-5">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <RichText
              propName="content"
              placeholder="Enter article content..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Link,
                types.RichTextFeatures.Highlight,
              ]}
              renderBlock={({ children }) => (
                <div
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#475569'
                  }}
                >
                  {children}
                </div>
              )}
            />
          </div>
        </div>

        {/* Image Gallery Grid */}
        <div className="row g-4 mb-5">
          <Repeater propName="galleryImages" />
        </div>

        {/* Feature Highlights */}
        <div className="row g-4">
          <Repeater propName="features" />
        </div>
      </div>
    </section>
  )
}

const GalleryImage = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="h-100"
        style={{
          borderRadius: '0.75rem',
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '250px',
            overflow: 'hidden',
            flexShrink: 0
          }}
        >
          <Image
            propName="image"
            alt="Gallery image"
            maxWidth={600}
            imageClassName="w-100 h-100"
            imageStyle={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
        <div className="p-3" style={{ flexGrow: 1 }}>
          <Text
            propName="caption"
            placeholder="Image caption (optional)"
            renderBlock={({ children }) => (
              children && children.toString().trim() ? (
                <p
                  className="mb-0"
                  style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: '1.5'
                  }}
                >
                  {children}
                </p>
              ) : null
            )}
          />
        </div>
      </div>
    </div>
  )
}

const FeatureHighlight = ({ icon }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="text-center p-4 h-100"
        style={{
          backgroundColor: '#f8fafc',
          borderRadius: '0.75rem',
          border: '1px solid #e2e8f0',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#f1f5f9'
          e.currentTarget.style.borderColor = '#cbd5e1'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f8fafc'
          e.currentTarget.style.borderColor = '#e2e8f0'
        }}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center mb-3"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#dbeafe',
            color: '#3b82f6'
          }}
        >
          <i className={icon || 'fas fa-star'} style={{ fontSize: '1.75rem' }} />
        </div>

        <Text
          propName="title"
          placeholder="Feature Title"
          renderBlock={({ children }) => (
            <h3
              className="mb-2"
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#1e293b'
              }}
            >
              {children}
            </h3>
          )}
        />

        <RichText
          propName="description"
          placeholder="Feature description..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
          ]}
          renderBlock={({ children }) => (
            <div
              style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#64748b'
              }}
            >
              {children}
            </div>
          )}
        />
      </div>
    </div>
  )
}

GalleryImage.schema = {
  name: 'gallery-image',
  label: 'Gallery Image',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    image: {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
      placeholderSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=50',
      srcSet: '',
      alt: 'Gallery image',
      seoName: 'gallery-image'
    },
    caption: ''
  }),

  sideEditProps: [
    {
      name: 'image',
      label: 'Image',
      type: types.SideEditPropType.Image,
      imageOptions: {
        maxWidth: 600
      }
    }
  ]
}

FeatureHighlight.schema = {
  name: 'feature-highlight',
  label: 'Feature',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    icon: 'fas fa-thumbs-up',
    title: 'Reliable Service',
    description: 'Consistent, dependable service you can count on.'
  }),

  sideEditProps: [
    {
      name: 'icon',
      label: 'Font Awesome Icon',
      type: types.SideEditPropType.Text,
    }
  ]
}

ArticleFeaturesSection.schema = {
  name: 'article-features-section',
  label: 'Article with Features',
  category: 'content',

  getDefaultProps: () => ({
    title: 'Sea Freight: Reliable Global Shipping Solutions',
    content: 'We specialize in comprehensive sea freight services, offering flexible solutions for both local and international shipping needs. Our experienced team ensures your cargo arrives safely and on time, with full tracking and support throughout the journey.\n\nWith decades of expertise in maritime logistics, we handle everything from small parcels to full container loads, providing cost-effective solutions tailored to your business requirements.',
    background: '#ffffff',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=1200',
      placeholderSrc: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=200',
      srcSet: '',
      alt: 'Cargo ship with containers',
      seoName: 'cargo-ship'
    },
    galleryImages: [
      {
        image: {
          src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600',
          placeholderSrc: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=50',
          alt: 'Shipping containers',
          seoName: 'shipping-containers'
        },
        caption: 'Modern container facilities'
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
          placeholderSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=50',
          alt: 'Port operations',
          seoName: 'port-operations'
        },
        caption: 'Efficient port operations'
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=600',
          placeholderSrc: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=50',
          alt: 'Cargo handling',
          seoName: 'cargo-handling'
        },
        caption: 'Professional cargo handling'
      }
    ],
    features: [
      {
        icon: 'fas fa-thumbs-up',
        title: 'Reliable Service',
        description: 'Consistent, dependable service you can count on every time.'
      },
      {
        icon: 'fas fa-ship',
        title: 'Transport Carriers',
        description: 'Access to a global network of trusted shipping carriers.'
      },
      {
        icon: 'fas fa-globe',
        title: 'Worldwide Destination',
        description: 'Ship to any destination across the globe with ease.'
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'galleryImages',
      itemType: 'gallery-image',
      itemLabel: 'Gallery Image',
      min: 0,
      max: 12
    },
    {
      name: 'features',
      itemType: 'feature-highlight',
      itemLabel: 'Feature',
      min: 0,
      max: 6
    }
  ],

  sideEditProps: [
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: types.SideEditPropType.Image,
      imageOptions: {
        maxWidth: 1200,
        aspectRatio: 2.5
      }
    },
    {
      name: 'background',
      label: 'Background Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: '#f8f9fa', label: 'Light Gray' },
          { value: '#f9fafb', label: 'Off White' },
          { value: '#f0f7ff', label: 'Light Blue' },
        ],
      },
    },
  ],
}

export { ArticleFeaturesSection, GalleryImage, FeatureHighlight }
export default ArticleFeaturesSection