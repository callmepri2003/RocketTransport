import React from 'react';
import { types, Text, RichText } from 'react-bricks/frontend';

interface CareersApplicationProps {
  submitEndpoint?: string;
}

const CareersApplication: types.Brick<CareersApplicationProps> = ({ submitEndpoint = 'https://formspree.io/f/mrbyalzk' }) => {
  const [showThankYou, setShowThankYou] = React.useState(false);

  // Check for success redirect from Formspree
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowThankYou(true);
    }
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {showThankYou ? (
              <div className="card shadow-sm">
                <div className="card-body p-5 text-center">
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#1e40af20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h2 className="display-6 fw-bold mb-3">Application Received!</h2>
                  <p className="lead text-muted mb-4">
                    Thank you for your interest in joining our team. We've successfully received your application and will carefully review your details. We'll be in touch soon regarding your application.
                  </p>
                  <button
                    onClick={() => {
                      setShowThankYou(false);
                      window.history.replaceState({}, '', window.location.pathname);
                    }}
                    className="btn btn-primary btn-lg"
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    Back to Careers
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-5">
                  <Text
                    propName="title"
                    placeholder="Join Our Team"
                    renderBlock={({ children }) => (
                      <h2 className="display-5 fw-bold mb-3">{children}</h2>
                    )}
                  />
                  <RichText
                    propName="description"
                    placeholder="We're always looking for talented individuals to join our team. Submit your application below."
                    renderBlock={({ children }) => (
                      <p className="lead text-muted">{children}</p>
                    )}
                    allowedFeatures={[
                      types.RichTextFeatures.Bold,
                      types.RichTextFeatures.Italic,
                    ]}
                  />
                </div>

                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <form
                      action={submitEndpoint}
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="fullName" className="form-label fw-semibold">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label fw-semibold">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label fw-semibold">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label htmlFor="position" className="form-label fw-semibold">
                            Position Applying For <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="position"
                            name="position"
                            required
                          />
                        </div>

                        <div className="col-12">
                          <label htmlFor="upload" className="form-label fw-semibold">
                            Resume/CV <span className="text-danger">*</span>
                          </label>
                          <input
                            type="file"
                            className="form-control"
                            id="upload"
                            name="upload"
                            accept=".pdf,.doc,.docx"
                          />
                          <small className="form-text text-muted">
                            Accepted formats: PDF, DOC, DOCX (Max 5MB)
                          </small>
                        </div>

                        <div className="col-12">
                          <label htmlFor="coverLetter" className="form-label fw-semibold">
                            Cover Letter
                          </label>
                          <textarea
                            className="form-control"
                            id="coverLetter"
                            name="coverLetter"
                            rows={6}
                            placeholder="Tell us why you'd be a great fit..."
                          />
                        </div>

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg w-100"
                            style={{ backgroundColor: "#1e40af" }}
                          >
                            <i className="bi bi-send me-2"></i>
                            Submit Application
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

CareersApplication.schema = {
  name: 'careers-application',
  label: 'Careers Application',
  category: 'forms',

  sideEditProps: [
    {
      name: 'submitEndpoint',
      label: 'Formspree Endpoint',
      type: types.SideEditPropType.Text,
      validate: (value: string) => value && value.startsWith('https://formspree.io/') ? true : 'Must be a valid Formspree URL'
    }
  ],

  getDefaultProps: () => ({
    title: 'Join Our Team',
    description: 'We\'re always looking for talented individuals to join our team. Submit your application below.',
    submitEndpoint: 'https://formspree.io/f/mrbyalzk'
  })
};

export default CareersApplication;