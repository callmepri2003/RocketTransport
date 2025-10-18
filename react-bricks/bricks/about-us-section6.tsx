import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

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
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                width: '100%',
                maxWidth: '100%'
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
                  objectPosition: 'center',
                  width: '100%',
                  height: 'auto',
                  display: 'block'
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
      </div>
    </section>
  )
}

ArticleFeaturesSection.schema = {
  name: 'article-features-section',
  label: 'Article with Features',
  category: 'content',

  getDefaultProps: () => ({
    title: 'Metro Distribution',
    content: 'We specialize in comprehensive metro distribution services, offering flexible solutions for both local and regional transport needs. Our experienced team ensures your cargo arrives safely and on time, with full tracking and support throughout the journey.\n\n**Palletised Freight Transport**\n\nOur palletised freight service provides secure, efficient transportation for large shipments. We handle all aspects of the logistics process, ensuring your goods are protected and delivered on schedule.\n\n**Taxi Trucks**\n\nFor urgent deliveries and smaller loads, our taxi truck service offers rapid response and flexible scheduling. Perfect for time-sensitive shipments that require immediate attention.\n\n• **Warehouse to Warehouse** - Direct transport between warehouse facilities, streamlining your supply chain operations with reliable scheduled services.\n\n• **Warehouse to Distribution Centre** - Efficient delivery from your warehouse to distribution centers, ensuring timely stock replenishment and optimized inventory management.',
    background: '#ffffff',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=1200',
      placeholderSrc: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=200',
      srcSet: '',
      alt: 'Cargo ship with containers',
      seoName: 'cargo-ship'
    }
  }),

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

export default ArticleFeaturesSection