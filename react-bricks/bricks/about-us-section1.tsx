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
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      lineHeight: '1.3',
                      fontSize: '2rem',
                      color: '#1e40af',
                      letterSpacing: '-0.02em'
                    }}
                  >
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
                  types.RichTextFeatures.Heading2,
                  types.RichTextFeatures.Heading3,
                  types.RichTextFeatures.UnorderedList,
                ]}
                renderBlock={({ children }) => (
                  <div className="content-wrapper">
                    {children}
                  </div>
                )}
                renderH2={({ children }) => (
                  <h3
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: '700',
                      color: '#212529',
                      marginTop: '1.75rem',
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {children}
                  </h3>
                )}
                renderH3={({ children }) => (
                  <h4
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#212529',
                      marginTop: '1.5rem',
                      marginBottom: '0.875rem',
                      lineHeight: '1.4'
                    }}
                  >
                    {children}
                  </h4>
                )}
                renderUL={({ children }) => (
                  <ul
                    style={{
                      paddingLeft: '0',
                      marginBottom: '1.5rem',
                      listStyle: 'none'
                    }}
                  >
                    {children}
                  </ul>
                )}
                renderLI={({ children }) => (
                  <li
                    style={{
                      position: 'relative',
                      paddingLeft: '1.75rem',
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      lineHeight: '1.65',
                      color: '#495057'
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '0.35em',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#1e40af',
                        borderRadius: '50%',
                        content: '""'
                      }}
                    >
                      •
                    </span>
                    {children}
                  </li>
                )}
              />

              <style jsx>{`
                .content-wrapper p {
                  font-size: 1.0625rem;
                  line-height: 1.7;
                  color: #212529;
                  margin-bottom: 1.25rem;
                }
                .content-wrapper p:last-child {
                  margin-bottom: 0;
                }
                .content-wrapper strong {
                  font-weight: 600;
                  color: #212529;
                }
              `}</style>
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
    title: 'Metro Distribution',
    description: `Our metro distribution network specialises in high-security freight handling for time-sensitive deliveries within the metropolitan area. We understand that urban logistics demands precision, speed, and discretion. Our experienced team manages your stock with the utmost care, ensuring secure and efficient transportation for your most valuable shipments.

## Palletised Freight Transport

We handle palletised freight with flexibility to suit your operation:

• **Warehouse to Warehouse** – Direct transfers without booking time requirements, perfect for seamless supply chain operations

• **Warehouse to Distribution Centre** – Scheduled deliveries with coordinated booking times to ensure smooth handover and inventory management

## Taxi Trucks

Need flexible, on-demand transport? Our taxi truck service provides quick access to dedicated vehicles for urgent or irregular freight movements, giving you the flexibility to respond to business demands as they arise.`,
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