import React from 'react';
import { types, Text, RichText, Repeater } from 'react-bricks/frontend';

interface FileData {
  name: string;
  size: number;
  type: string;
  url: string;
  file: File;
}

interface FileResourceProps {
  fileData?: FileData;
}

// Nested brick for individual file resource
const FileResource: types.Brick<FileResourceProps> = ({ fileData }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="bg-primary bg-opacity-10 rounded p-3">
              <i className="bi bi-file-earmark-arrow-down fs-2 text-primary"></i>
            </div>
          </div>
          <div className="col">
            <Text
              propName="resourceName"
              placeholder="Resource name..."
              renderBlock={({ children }) => (
                <h5 className="mb-2 fw-bold">{children}</h5>
              )}
            />
            <RichText
              propName="description"
              placeholder="Add a description for this resource..."
              renderBlock={({ children }) => (
                <div className="text-muted mb-0">{children}</div>
              )}
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Link,
              ]}
            />
            {fileData && (
              <div className="mt-2">
                <span className="badge bg-light text-dark border">
                  <i className="bi bi-paperclip me-1"></i>
                  {fileData.name}
                </span>
                <span className="badge bg-light text-dark border ms-1">
                  {(fileData.size / 1024).toFixed(0)} KB
                </span>
              </div>
            )}
          </div>
          <div className="col-auto">
            {fileData && fileData.url ? (
              <a
                href={fileData.url}
                download={fileData.name}
                className="btn btn-primary btn-lg"
                style={{
                  backgroundColor: "#1e40af"
                }}
              >
                <i className="bi bi-download me-2"></i>
                Download
              </a>
            ) : (
              <button className="btn btn-outline-secondary btn-lg" disabled>
                <i className="bi bi-upload me-2"></i>
                No File
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FileResource.schema = {
  name: 'file-resource',
  label: 'File Resource',
  category: 'content',
  hideFromAddMenu: true,

  sideEditProps: [
    {
      name: 'fileData',
      label: 'Upload File',
      type: types.SideEditPropType.Custom,
      component: ({ value, onChange }: { value: FileData, onChange: (file: FileData | null) => void }) => {
        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (!e.target.files || e.target.files.length === 0) return;

          const file = e.target.files[0];
          const fileData: FileData = {
            name: file.name,
            size: file.size,
            type: file.type,
            url: URL.createObjectURL(file),
            file: file
          };

          onChange(fileData);
        };

        const handleRemove = () => {
          if (value?.url) {
            URL.revokeObjectURL(value.url);
          }
          onChange(null);
        };

        return (
          <div className="p-3">
            <div className="mb-3">
              <input
                type="file"
                onChange={handleFileChange}
                className="form-control form-control-sm"
                accept="*/*"
              />
              <small className="form-text text-muted mt-1 d-block">
                Upload a file for this resource
              </small>
            </div>

            {value && (
              <div className="alert alert-success p-2 d-flex justify-content-between align-items-center">
                <div style={{ minWidth: 0 }}>
                  <div className="fw-bold text-truncate small">{value.name}</div>
                  <small className="text-muted">
                    {(value.size / 1024).toFixed(2)} KB
                  </small>
                </div>
                <button
                  onClick={handleRemove}
                  className="btn btn-sm btn-danger ms-2"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        );
      }
    }
  ],

  getDefaultProps: () => ({
    resourceName: 'Untitled Resource',
    description: 'Click to add a description',
    fileData: null
  })
};

interface FileUploadBrickProps {
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
  resources?: any[];
}

// Main container brick
const FileUploadBrick: types.Brick<FileUploadBrickProps> = ({ title, subtitle, emptyMessage, resources = [] }) => {
  const hasResources = resources && resources.length > 0;

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <Text
              propName="title"
              placeholder="Downloads"
              renderBlock={({ children }) => (
                <h2 className="display-6 fw-bold mb-3">{children}</h2>
              )}
            />
            <RichText
              propName="subtitle"
              placeholder="Browse and download available resources"
              renderBlock={({ children }) => (
                <p className="lead text-muted">{children}</p>
              )}
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />
          </div>
        </div>

        {!hasResources && (
          <RichText
            propName="emptyMessage"
            placeholder="No resources available at this time. Check back soon!"
            renderBlock={({ children }) => (
              <div className="alert alert-info d-flex align-items-center py-4" role="alert">
                <i className="bi bi-info-circle fs-4 me-3"></i>
                <div>{children}</div>
              </div>
            )}
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
            ]}
            renderPlaceholder={({ children }) => (
              <div className="alert alert-info d-flex align-items-center py-4" role="alert">
                <i className="bi bi-info-circle fs-4 me-3"></i>
                <div>{children}</div>
              </div>
            )}
          />
        )}

        <Repeater propName="resources" />
      </div>
    </section>
  );
};

FileUploadBrick.schema = {
  name: 'file-upload',
  label: 'File Downloads',
  category: 'content',

  getDefaultProps: () => ({
    title: 'Downloads',
    subtitle: 'Browse and download available resources',
    emptyMessage: 'No resources available at this time. Check back soon!',
    resources: []
  }),

  repeaterItems: [
    {
      name: 'resources',
      itemType: 'file-resource',
      itemLabel: 'Resource',
      min: 0,
      max: 50
    }
  ]
};

export { FileUploadBrick, FileResource };