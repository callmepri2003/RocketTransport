import React, { useState } from 'react';
import { types, Text, RichText } from 'react-bricks/frontend';

interface CareersApplicationProps {
  submitEndpoint?: string;
}

const CareersApplication: types.Brick<CareersApplicationProps> = ({ submitEndpoint = '/api/careers' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Create FormData for file upload
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('coverLetter', formData.coverLetter);
    if (formData.resume) {
      data.append('resume', formData.resume);
    }

    try {
      const response = await fetch(submitEndpoint, {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Application submitted successfully! We\'ll be in touch soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          resume: null,
          coverLetter: ''
        });
        // Reset file input
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('There was an error submitting your application. Please try again.');
    }
  };

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
                {status === 'success' && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-check-circle fs-4 me-3"></i>
                    <div>{message}</div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-exclamation-triangle fs-4 me-3"></i>
                    <div>{message}</div>
                  </div>
                )}

                <div onSubmit={handleSubmit}>
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
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
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
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
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
                        value={formData.position}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="resume" className="form-label fw-semibold">
                        Resume/CV <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        disabled={status === 'submitting'}
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
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder="Tell us why you'd be a great fit..."
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary btn-lg w-100"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Submit Application
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
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
      label: 'API Endpoint',
      type: types.SideEditPropType.Text,
      validate: (value: string) => value && value.startsWith('/') ? true : 'Must start with /'
    }
  ],

  getDefaultProps: () => ({
    title: 'Join Our Team',
    description: 'We\'re always looking for talented individuals to join our team. Submit your application below.',
    submitEndpoint: '/api/careers'
  })
};

export default CareersApplication;