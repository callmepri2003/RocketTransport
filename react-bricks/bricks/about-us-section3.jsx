import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

const MissionVisionSection = ({ backgroundImage, overlayOpacity }) => {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        minHeight: '400px',
        background: '#1e40af'
      }}
    >
      {/* Parallax Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          zIndex: 0
        }}
      >
        <Image
          propName="backgroundImage"
          alt="Background"
          maxWidth={2000}
          renderWrapper={({ children }) => (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            >
              {children}
            </div>
          )}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: `rgba(30, 64, 175, ${overlayOpacity})`,
            zIndex: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row py-5">
          {/* Mission Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="pe-md-4">
              <Text
                propName="missionTitle"
                placeholder="MISSION"
                renderBlock={({ children }) => (
                  <h2
                    className="text-white fw-bold mb-3"
                    style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}
                  >
                    {children}
                  </h2>
                )}
              />
              <div
                style={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#3b82f6',
                  marginBottom: '1.5rem'
                }}
              />
              <RichText
                propName="missionContent"
                placeholder="Enter mission statement..."
                allowedFeatures={[
                  types.RichTextFeatures.Bold,
                  types.RichTextFeatures.Italic,
                ]}
                renderBlock={({ children }) => (
                  <div
                    className="text-white"
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      opacity: 0.95
                    }}
                  >
                    {children}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Vision Column */}
          <div className="col-md-6">
            <div className="ps-md-4">
              <Text
                propName="visionTitle"
                placeholder="VISION"
                renderBlock={({ children }) => (
                  <h2
                    className="text-white fw-bold mb-3"
                    style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}
                  >
                    {children}
                  </h2>
                )}
              />
              <div
                style={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#3b82f6',
                  marginBottom: '1.5rem'
                }}
              />
              <RichText
                propName="visionContent"
                placeholder="Enter vision statement..."
                allowedFeatures={[
                  types.RichTextFeatures.Bold,
                  types.RichTextFeatures.Italic,
                ]}
                renderBlock={({ children }) => (
                  <div
                    className="text-white"
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      opacity: 0.95
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
    </section>
  )
}

MissionVisionSection.schema = {
  name: 'mission-vision-section',
  label: 'Mission & Vision Section',
  category: 'content',

  getDefaultProps: () => ({
    missionTitle: 'MISSION',
    missionContent:
      'To deliver freight safely, reliably, and on time while building lasting partnerships with our customers. We achieve this through exceptional service, transparent communication, and an unwavering commitment to their success.',
    visionTitle: 'VISION',
    visionContent:
      'To be the most trusted name in freight transportation, recognised for operational excellence, customer satisfaction, and innovative solutions that keep Australia\'s supply chain moving forward.',
    backgroundImage: {
      src: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=2000',
      placeholderSrc: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=200',
      srcSet: '',
      alt: 'Shipping port aerial view',
      seoName: 'shipping-port'
    },
    overlayOpacity: 0.75
  }),

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
}

export default MissionVisionSection