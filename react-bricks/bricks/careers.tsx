import React from 'react';
import { types, Text, RichText } from 'react-bricks/frontend';

interface CareersApplicationProps {
  submitEndpoint?: string;
}

const CareersApplication: types.Brick<CareersApplicationProps> = ({ submitEndpoint = 'https://formspree.io/f/mrbyalzk' }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
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

            <div className="text-center mt-4">
              <small className="text-muted">
                By submitting this application, you agree to our privacy policy and terms of service.
              </small>
            </div>
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