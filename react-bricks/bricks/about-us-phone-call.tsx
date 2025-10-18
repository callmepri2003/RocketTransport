import React from 'react'
import { types, Text, RichText } from 'react-bricks/frontend'

const TeamPhoneCallSection = ({ background }) => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: background || '#e9ecef' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <div className="mb-3">
              <Text
                propName="title"
                placeholder="Enter title..."
                renderBlock={({ children }) => (
                  <h2 className="fw-bold mb-3" style={{ fontSize: '1.25rem', color: '#1e40af' }}>
                    {children}
                  </h2>
                )}
              />
              <div
                style={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#1e40af',
                  marginBottom: '1.5rem'
                }}
              />
            </div>

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
    </section>
  )
}

TeamPhoneCallSection.schema = {
  name: 'team-phone-call-section',
  label: 'Team Phone Call Section',
  category: 'content',

  getDefaultProps: () => ({
    title: 'OUR TEAM IS ONLY ONE PHONE CALL AWAY',
    description: "In today's fast-paced and dynamic business environment, we recognise the importance of maintaining seamless communication across all aspects of your supply chain.\n\nAt Rocket Transport, our team is only one phone call away. This means that we can quickly fulfil specific customer requests and efficiently resolve any problems as they arise.",
    background: '#e9ecef',
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

export default TeamPhoneCallSection