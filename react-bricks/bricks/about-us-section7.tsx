import React from 'react'
import { types, Text, RichText, Repeater } from 'react-bricks/frontend'

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
            color: '#1e40af'
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

const FeatureHighlights = ({ background }) => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: background || '#ffffff' }}
    >
      <div className="container">
        <div className="row g-4">
          <Repeater propName="features" />
        </div>
      </div>
    </section>
  )
}

FeatureHighlights.schema = {
  name: 'feature-highlights',
  label: 'Feature Highlights',
  category: 'content',

  getDefaultProps: () => ({
    background: '#ffffff',
    features: [
      {
        icon: 'fas fa-thumbs-up',
        title: 'Reliable Service',
        description: 'Consistent, dependable service you can count on every time.'
      },
      {
        icon: 'fas fa-truck',
        title: 'Fast Transport',
        description: 'Quick and efficient delivery to meet your deadlines.'
      },
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Wide Coverage',
        description: 'Comprehensive metro area coverage for all your distribution needs.'
      }
    ]
  }),

  repeaterItems: [
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

export { FeatureHighlights, FeatureHighlight }
export default FeatureHighlights