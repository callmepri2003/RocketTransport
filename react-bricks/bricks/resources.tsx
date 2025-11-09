import React from 'react';
import { types, Text, RichText, Repeater } from 'react-bricks/frontend';

interface FileResourceProps {
  resourceName?: string;
  description?: string;
  driveLink?: string;
  fileName?: string;
  fileSize?: string;
}

// Nested brick for individual file resource
const FileResource: types.Brick<FileResourceProps> = ({
  resourceName,
  description,
  driveLink,
  fileName,
  fileSize
}) => {
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
            {(fileName || fileSize) && (
              <div className="mt-2">
                {fileName && (
                  <span className="badge bg-light text-dark border">
                    <i className="bi bi-paperclip me-1"></i>
                    {fileName}
                  </span>
                )}
                {fileSize && (
                  <span className="badge bg-light text-dark border ms-1">
                    {fileSize}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="col-auto">
            {driveLink ? (
              <a
                href={driveLink}
                target="_blank"
                rel="noopener noreferrer"
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
                <i className="bi bi-link-45deg me-2"></i>
                No Link
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
      name: 'driveLink',
      label: 'Google Drive Link',
      type: types.SideEditPropType.Text,
      validate: (value: string) => {
        if (!value) return 'Google Drive link is required';
        if (!value.includes('drive.google.com')) {
          return 'Please enter a valid Google Drive link';
        }
        return true;
      }
    },
    {
      name: 'fileName',
      label: 'File Name (optional)',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'fileSize',
      label: 'File Size (optional)',
      type: types.SideEditPropType.Text,
      helperText: 'e.g., "2.5 MB" or "500 KB"'
    }
  ],

  getDefaultProps: () => ({
    resourceName: 'Untitled Resource',
    description: 'Click to add a description',
    driveLink: '',
    fileName: '',
    fileSize: ''
  })
};

interface FileUploadBrickProps {
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
  resources?: any[];
}

// Main container brick
const FileUploadBrick: types.Brick<FileUploadBrickProps> = ({
  title,
  subtitle,
  emptyMessage,
  resources = []
}) => {
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