import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

const TransportSection = ({ background }) => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: background || '#f8f9fa' }}
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <Image
              propName="image"
              alt="Transport solutions"
              imageClassName="img-fluid w-100 h-100"
              aspectRatio={1.5}
              imageStyle={{ objectFit: 'cover', borderRadius: '4px' }}
            />
          </div>

          <div className="col-lg-6">
            <div className="ps-lg-4">
              <Text
                propName="title"
                placeholder="Enter title..."
                renderBlock={({ children }) => (
                  <h2 className="fw-bold mb-3" style={{ lineHeight: '1.3', fontSize: '1.25rem', color: '#1e40af' }}>
                    {children}
                  </h2>
                )}
              />

              <RichText
                propName="description"
                placeholder="Enter description..."
                allowedFeatures={[
                  types.RichTextFeatures.Bold,
                  types.RichTextFeatures.Italic,
                  types.RichTextFeatures.Link,
                ]}
                renderBlock={({ children }) => (
                  <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#212529', marginBottom: '1em' }}>
                    {children}
                  </p>

                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

TransportSection.schema = {
  name: 'transport-section',
  label: 'Transport Section',
  category: 'content',

  getDefaultProps: () => ({
    title: 'Comprehensive and tailored transport solutions.',
    description: 'As an independent business, we have the flexibility to ensure that the nature of our services suits your specific needs (e.g. we can adopt any method of ordering and POD that you choose).\n\nOn top of that, our usual practice is to handle bookings with distribution centres ourselves, which can reduce administrative costs on your end.',
    background: '#f8f9fa',
    image: {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      placeholderSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=50',
      alt: 'Aerial view of highway with trucks',
    },
  }),

  sideEditProps: [
    {
      name: 'background',
      label: 'Background Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#ffffff', label: 'White' },
          { value: '#f8f9fa', label: 'Light Gray' },
          { value: '#e9ecef', label: 'Gray' },
          { value: '#f0f7ff', label: 'Light Blue' },
        ],
      },
    },
  ],
}

export default TransportSection