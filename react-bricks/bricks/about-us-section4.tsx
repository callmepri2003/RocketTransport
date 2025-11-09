import React from 'react'
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'

const DirectorsSection = ({ background, titleAlign }) => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: background || '#ffffff' }}
    >
      <div className="container">
        <div className="row">
          <div className={`col-12 ${titleAlign === 'center' ? 'text-center' : ''} mb-5`}>
            <Text
              propName="title"
              placeholder="Enter section title..."
              renderBlock={({ children }) => (
                <h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: '2rem',
                    color: '#1e293b',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {children}
                </h2>
              )}
            />
            <div
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: '#3b82f6',
                margin: titleAlign === 'center' ? '0 auto 1.5rem' : '0 0 1.5rem 0'
              }}
            />
            <RichText
              propName="subtitle"
              placeholder="Enter optional subtitle..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
              renderBlock={({ children }) => (
                <div
                  style={{
                    fontSize: '1.1rem',
                    color: '#64748b',
                    lineHeight: '1.6',
                    maxWidth: '700px',
                    margin: titleAlign === 'center' ? '0 auto' : '0'
                  }}
                >
                  {children}
                </div>
              )}
            />
          </div>
        </div>

        <div className="row g-4">
          <Repeater propName="directors" />
        </div>
      </div>
    </section>
  )
}

const DirectorCard = () => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="h-100"
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          cursor: 'default'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Content */}
        <div>
          <Text
            propName="name"
            placeholder="Director Name"
            renderBlock={({ children }) => (
              <h3
                className="mb-2"
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  letterSpacing: '-0.01em'
                }}
              >
                {children}
              </h3>
            )}
          />

          <Text
            propName="role"
            placeholder="Role / Title"
            renderBlock={({ children }) => (
              <div
                className="mb-3"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {children}
              </div>
            )}
          />

          <RichText
            propName="description"
            placeholder="Enter director description..."
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Link,
            ]}
            renderBlock={({ children }) => (
              <div
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#475569'
                }}
              >
                {children}
              </div>
            )}
          />
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid #e2e8f0' }}>
            <RichText
              propName="email"
              placeholder="email@company.com"
              allowedFeatures={[
                types.RichTextFeatures.Link,
              ]}
              renderBlock={({ children }) => (
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: '#3b82f6'
                  }}
                >
                   {children}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

DirectorCard.schema = {
  name: 'director-card',
  label: 'Director',
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    name: 'John Smith',
    role: 'Managing Director',
    description: 'With over 20 years of experience in logistics and freight management, John leads our strategic vision and operational excellence.',
    email: 'john.smith@company.com',
    photo: {
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
      placeholderSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50',
      srcSet: '',
      alt: 'Director photo',
      seoName: 'director'
    }
  }),

  sideEditProps: [
    {
      name: 'photo',
      label: 'Director Photo',
      type: types.SideEditPropType.Image,
      imageOptions: {
        maxWidth: 500,
        aspectRatio: 1
      }
    }
  ]
}

DirectorsSection.schema = {
  name: 'directors-section',
  label: 'Directors Section',
  category: 'team',

  getDefaultProps: () => ({
    title: 'Meet Our Leadership',
    subtitle: 'Our experienced directors bring decades of combined expertise in logistics, operations, and customer service.',
    background: '#ffffff',
    titleAlign: 'left',
    directors: [
      {
        name: 'John Smith',
        role: 'Managing Director',
        description: 'With over 20 years of experience in logistics and freight management, John leads our strategic vision and operational excellence.',
        email: 'john.smith@company.com',
        photo: {
          src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
          placeholderSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50',
          srcSet: '',
          alt: 'Managing Director',
          seoName: 'managing-director'
        }
      },
      {
        name: 'Sarah Johnson',
        role: 'Operations Director',
        description: 'Sarah oversees our nationwide operations, ensuring seamless coordination and timely delivery across all routes.',
        email: 'sarah.johnson@company.com',
        photo: {
          src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
          placeholderSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50',
          srcSet: '',
          alt: 'Operations Director',
          seoName: 'operations-director'
        }
      },
      {
        name: 'Michael Chen',
        role: 'Finance Director',
        description: 'Michael brings financial expertise and strategic planning to drive sustainable growth and operational efficiency.',
        email: 'michael.chen@company.com',
        photo: {
          src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500',
          placeholderSrc: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=50',
          srcSet: '',
          alt: 'Finance Director',
          seoName: 'finance-director'
        }
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'directors',
      itemType: 'director-card',
      itemLabel: 'Director',
      min: 1,
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
    {
      name: 'titleAlign',
      label: 'Title Alignment',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
        ],
      },
    },
  ],
}

export { DirectorsSection, DirectorCard }
export default DirectorsSection