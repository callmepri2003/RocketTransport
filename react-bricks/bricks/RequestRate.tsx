import React, { useState } from 'react';
import { types, Text } from 'react-bricks/frontend';

interface TransportEnquiryFormProps {
  backgroundColor: string;
  accentColor: string;
}

const TransportEnquiryForm: types.Brick<TransportEnquiryFormProps> = ({
  backgroundColor = '#f8f9fa',
  accentColor = '#1a237e'
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Form submitted');
    alert('Form submitted! Check console for details.');
  };

  return (
    <section style={{ backgroundColor, padding: '80px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              padding: '48px',
              marginBottom: '32px'
            }}>
              {/* Progress Steps */}
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '5%',
                    right: '5%',
                    height: '2px',
                    backgroundColor: '#e0e0e0',
                    zIndex: 0
                  }}>
                    <div style={{
                      height: '100%',
                      backgroundColor: accentColor,
                      width: `${((currentStep - 1) / 3) * 100}%`,
                      transition: 'width 0.3s ease'
                    }} />
                  </div>

                  {['About', 'Enquiry Details', 'Transport Details', 'Customer Details'].map((label, index) => (
                    <div key={index} style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: currentStep > index + 1 ? accentColor : currentStep === index + 1 ? accentColor : '#ffffff',
                        border: `2px solid ${currentStep >= index + 1 ? accentColor : '#e0e0e0'}`,
                        color: currentStep >= index + 1 ? '#ffffff' : '#9e9e9e',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '600',
                        margin: '0 auto 12px',
                        transition: 'all 0.3s ease'
                      }}>
                        {index + 1}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: currentStep === index + 1 ? accentColor : '#757575',
                        fontWeight: currentStep === index + 1 ? '600' : '400'
                      }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 1: About */}
              {currentStep === 1 && (
                <div>
                  <Text
                    propName="step1Heading"
                    placeholder="About Our Transport Services"
                    renderBlock={({ children }) => (
                      <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '32px', color: '#212529' }}>
                        {children}
                      </h2>
                    )}
                  />

                  <div style={{ color: '#495057', lineHeight: '1.8', marginBottom: '24px' }}>
                    <Text
                      propName="step1Para1"
                      placeholder="Description paragraph 1..."
                      renderBlock={({ children }) => <p>{children}</p>}
                    />
                    <Text
                      propName="step1Para2"
                      placeholder="Description paragraph 2..."
                      renderBlock={({ children }) => <p>{children}</p>}
                    />
                    <Text
                      propName="step1Para3"
                      placeholder="Description paragraph 3..."
                      renderBlock={({ children }) => <p>{children}</p>}
                    />
                    <Text
                      propName="step1Para4"
                      placeholder="Description paragraph 4..."
                      renderBlock={({ children }) => <p>{children}</p>}
                    />
                    <Text
                      propName="step1Para5"
                      placeholder="Click NEXT to continue..."
                      renderBlock={({ children }) => <p style={{ fontWeight: '500' }}>{children}</p>}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Enquiry Details */}
              {currentStep === 2 && (
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '32px', color: '#212529' }}>
                    Enquiry Details
                  </h2>

                  <div className="mb-4">
                    <label className="form-label">Are you an existing Rocket Transport customer?</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="existingCustomer" />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="existingCustomer" defaultChecked />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Frequency of activity</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="frequency" />
                        <label className="form-check-label">Regular</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="frequency" defaultChecked />
                        <label className="form-check-label">Once only</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Number of items</label>
                    <input type="number" className="form-control" placeholder="Enter number of items" />
                    <div className="form-text">Please enter the number of items being moved.</div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Brief description of the goods <span style={{ color: '#dc3545' }}>*</span></label>
                    <textarea className="form-control" rows={3}></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Nature of goods <span style={{ color: '#dc3545' }}>*</span></label>
                    <div>
                      {['Dangerous Goods', 'Perishable / Food Grade', 'Fragile', 'Valuable'].map(nature => (
                        <div className="form-check" key={nature}>
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">{nature}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Type of goods</label>
                    <div>
                      {['Plain Pallet', 'Chep Pallet', 'Loscam Pallet', 'Skid', 'Crate', 'IBC', 'Other'].map(type => (
                        <div className="form-check" key={type}>
                          <input className="form-check-input" type="radio" name="goodsType" />
                          <label className="form-check-label">{type}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Comments / Details</label>
                    <textarea className="form-control" rows={3}></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Attach files</label>
                    <input type="file" className="form-control" multiple />
                    <div className="form-text">or drag files here.</div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Weight (kg)</label>
                      <input type="text" className="form-control" placeholder="Enter weight" />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Dimensions (L x W x H)</label>
                      <input type="text" className="form-control" placeholder="e.g., 1.2 x 1.2 x 2.4" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Transport Details */}
              {currentStep === 3 && (
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '32px', color: '#212529' }}>
                    Transport Details
                  </h2>

                  <h5 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '24px', color: '#495057' }}>
                    Origin Details
                  </h5>

                  <div className="row mb-4">
                    <div className="col-md-3 mb-3">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">State / Province</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Postal / Zip Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Country</label>
                      <select className="form-select">
                        <option>Australia</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Loading facilities available?</label>
                    <div className="row">
                      {['Forklift', 'Tailgate', 'Crane', 'Hand load', 'Dock load', 'Other'].map(facility => (
                        <div className="col-md-4 col-6" key={facility}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">{facility}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Loading support required?</label>
                    <div className="row">
                      {['Forklift', 'Tailgate', 'Crane', 'Hand load', 'Dock load', 'Off dock'].map(support => (
                        <div className="col-md-4 col-6" key={support}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">{support}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="form-label">Special instruction for pick up</label>
                    <textarea className="form-control" rows={3}></textarea>
                  </div>

                  <h5 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '24px', color: '#495057', borderTop: '1px solid #dee2e6', paddingTop: '32px' }}>
                    Destination Details
                  </h5>

                  <div className="row mb-4">
                    <div className="col-md-3 mb-3">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">State / Province</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Postal / Zip Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label className="form-label">Country</label>
                      <select className="form-select">
                        <option>Australia</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Unloading facilities available?</label>
                    <div className="row">
                      {['Forklift', 'Tailgate', 'Crane', 'Hand load', 'Dock load', 'Other'].map(facility => (
                        <div className="col-md-4 col-6" key={facility}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">{facility}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Unloading support required?</label>
                    <div className="row">
                      {['Forklift', 'Tailgate', 'Crane', 'Hand load', 'Dock load', 'Off dock'].map(support => (
                        <div className="col-md-4 col-6" key={support}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">{support}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Special instruction for delivery</label>
                    <textarea className="form-control" rows={3}></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Customer Details */}
              {currentStep === 4 && (
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '32px', color: '#212529' }}>
                    Customer Details
                  </h2>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Company Name <span style={{ color: '#dc3545' }}>*</span></label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Your Name <span style={{ color: '#dc3545' }}>*</span></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Phone <span style={{ color: '#dc3545' }}>*</span></label>
                      <input type="tel" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Email <span style={{ color: '#dc3545' }}>*</span></label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Preferred Contact</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="preferredContact" defaultChecked />
                        <label className="form-check-label">Phone</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="preferredContact" />
                        <label className="form-check-label">Email</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Are you interested in any other services?</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherServices" />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherServices" defaultChecked />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">How did you find us?</label>
                    <div>
                      {['Advertisement', 'Search Engine', 'Referral (word of mouth)', 'Industry Association', 'Other'].map(option => (
                        <div className="form-check" key={option}>
                          <input className="form-check-input" type="radio" name="findUs" />
                          <label className="form-check-label">{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid #dee2e6'
              }}>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-outline-secondary"
                    style={{ padding: '12px 32px', fontWeight: '500' }}
                  >
                    Back
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn"
                    style={{
                      backgroundColor: accentColor,
                      color: '#ffffff',
                      padding: '12px 32px',
                      fontWeight: '500',
                      marginLeft: 'auto',
                      border: 'none'
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn"
                    style={{
                      backgroundColor: accentColor,
                      color: '#ffffff',
                      padding: '12px 32px',
                      fontWeight: '500',
                      marginLeft: 'auto',
                      border: 'none'
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>

              <div style={{ textAlign: 'right', marginTop: '16px', color: '#9e9e9e', fontSize: '0.875rem' }}>
                Page {currentStep} of 4
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-label {
          font-weight: 500;
          color: #495057;
          margin-bottom: 8px;
        }
        
        .form-control, .form-select {
          border: 1px solid #dee2e6;
          border-radius: 4px;
          padding: 10px 14px;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: ${accentColor};
          box-shadow: 0 0 0 3px ${accentColor}20;
          outline: none;
        }
        
        .form-check-input {
          border: 1px solid #dee2e6;
          margin-top: 4px;
        }
        
        .form-check-input:checked {
          background-color: ${accentColor};
          border-color: ${accentColor};
        }
        
        .form-check-input:focus {
          box-shadow: 0 0 0 3px ${accentColor}20;
          border-color: ${accentColor};
        }
        
        .form-text {
          color: #6c757d;
          font-size: 0.875rem;
          margin-top: 4px;
        }
        
        .btn:hover {
          opacity: 0.9;
        }
        
        .btn-outline-secondary {
          border: 1px solid #dee2e6;
          color: #495057;
        }
        
        .btn-outline-secondary:hover {
          background-color: #f8f9fa;
          border-color: #dee2e6;
          color: #495057;
        }
      `}</style>
    </section>
  );
};

TransportEnquiryForm.schema = {
  name: 'transport-enquiry-form',
  label: 'Transport Enquiry Form',
  category: 'forms',
  tags: ['form', 'enquiry', 'transport'],

  getDefaultProps: () => ({
    backgroundColor: '#f8f9fa',
    accentColor: '#1a237e',
    step1Heading: 'About Our Transport Services',
    step1Para1: 'We provide efficient, secure transport services for a wide range of palletised freight – from fast moving consumer goods to dangerous goods – for one-off or regular deliveries.',
    step1Para2: 'We offer freight services for palletised freight within Australia. Standard pallets used in Australia measure 1.2 metres × 1.2 metres. The maximum height for a loaded pallet is 2.4 metres. The maximum consignment weight for a single pallet is 1000 kilograms.',
    step1Para3: 'We also offer transport services for palletised freight across Australia. We can handle all sanctioned ISO pallet sizes used around the world (ISO Standard 6780:2003).',
    step1Para4: 'Please note: While some restrictions exist for transporting dangerous and hazardous materials, we are capable of moving classes 2, 3, 4, 5, 6, 8 and 9.',
    step1Para5: 'Click NEXT to make your enquiry'
  }),

  sideEditProps: [
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

export { TransportEnquiryForm };