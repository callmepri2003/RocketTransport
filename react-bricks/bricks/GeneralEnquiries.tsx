import React from 'react';
import { types, Text, RichText } from 'react-bricks/frontend';

interface GeneralEnquiriesFormProps {
  backgroundColor: string;
  accentColor: string;
  submitEndpoint?: string;
}

const GeneralEnquiriesForm: types.Brick<GeneralEnquiriesFormProps> = ({
  backgroundColor = '#f8f9fa',
  accentColor = '#1a237e',
  submitEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'
}) => {
  const [showThankYou, setShowThankYou] = React.useState(false);

  // Check for success redirect from Formspree
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('generalSuccess') === 'true') {
      setShowThankYou(true);
    }
  }, []);

  return (
    <section style={{ backgroundColor, padding: '80px 0' }} id="generalEnquiriesForm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            {showThankYou ? (
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                padding: '64px 48px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: `${accentColor}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '16px', color: '#212529' }}>
                  Message Sent Successfully!
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#495057', marginBottom: '32px', lineHeight: '1.6' }}>
                  Thank you for reaching out to us. We've received your message and appreciate you taking the time to contact us. We'll be in touch within 24 hours to assist with your enquiry.
                </p>
                <button
                  onClick={() => {
                    setShowThankYou(false);
                    window.history.replaceState({}, '', window.location.pathname);
                  }}
                  className="btn"
                  style={{
                    backgroundColor: accentColor,
                    color: '#ffffff',
                    padding: '12px 32px',
                    fontWeight: '500',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-5">
                  <Text
                    propName="heading"
                    placeholder="Get In Touch"
                    renderBlock={({ children }) => (
                      <h2 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '16px', color: '#212529' }}>
                        {children}
                      </h2>
                    )}
                  />
                  <RichText
                    propName="description"
                    placeholder="Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible."
                    renderBlock={({ children }) => (
                      <p style={{ fontSize: '1.125rem', color: '#495057', lineHeight: '1.6' }}>
                        {children}
                      </p>
                    )}
                    allowedFeatures={[
                      types.RichTextFeatures.Bold,
                      types.RichTextFeatures.Italic,
                    ]}
                  />
                </div>

                <form
                  action={submitEndpoint}
                  method="POST"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                    padding: '48px'
                  }}
                >
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="name" className="form-label" style={{ fontWeight: '500', color: '#495057' }}>
                        Name <span style={{ color: '#dc3545' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                        style={{
                          border: '1px solid #dee2e6',
                          borderRadius: '4px',
                          padding: '12px 16px',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="phone" className="form-label" style={{ fontWeight: '500', color: '#495057' }}>
                        Phone Number <span style={{ color: '#dc3545' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        required
                        style={{
                          border: '1px solid #dee2e6',
                          borderRadius: '4px',
                          padding: '12px 16px',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label" style={{ fontWeight: '500', color: '#495057' }}>
                      Email <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                      style={{
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        padding: '12px 16px',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label" style={{ fontWeight: '500', color: '#495057' }}>
                      Message <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows={6}
                      required
                      placeholder="Tell us how we can help..."
                      style={{
                        border: '1px solid #dee2e6',
                        borderRadius: '4px',
                        padding: '12px 16px',
                        fontSize: '0.95rem'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      backgroundColor: accentColor,
                      color: '#ffffff',
                      padding: '14px 32px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      border: 'none',
                      borderRadius: '4px',
                      transition: 'opacity 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    Send Message
                  </button>
                </form>

                <div className="text-center mt-4">
                  <small style={{ color: '#6c757d' }}>
                    We typically respond within 24 hours
                  </small>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-control:focus {
          border-color: ${accentColor};
          box-shadow: 0 0 0 3px ${accentColor}20;
          outline: none;
        }
      `}</style>
    </section>
  );
};

GeneralEnquiriesForm.schema = {
  name: 'general-enquiries-form',
  label: 'General Enquiries Form',
  category: 'forms',
  tags: ['form', 'enquiry', 'contact'],

  getDefaultProps: () => ({
    backgroundColor: '#f8f9fa',
    accentColor: '#1a237e',
    submitEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    heading: 'Get In Touch',
    description: 'Have a question or need assistance? Fill out the form below and we\'ll get back to you as soon as possible.'
  }),

  sideEditProps: [
    {
      groupName: 'Form Settings',
      defaultOpen: false,
      props: [
        {
          name: 'submitEndpoint',
          label: 'Formspree Endpoint',
          type: types.SideEditPropType.Text
        }
      ]
    },
    {
      groupName: 'Styling',
      defaultOpen: true,
      props: [
        {
          name: 'backgroundColor',
          label: 'Background Color',
          type: types.SideEditPropType.Text
        },
        {
          name: 'accentColor',
          label: 'Accent Color',
          type: types.SideEditPropType.Text
        }
      ]
    }
  ]
};

export { GeneralEnquiriesForm };