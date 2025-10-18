import React from 'react';
import { types, Text, RichText } from 'react-bricks/frontend';

// Simple Title + Paragraph brick
interface SimpleTextBrickProps {
  title?: string;
  paragraph?: string;
}

const SimpleTextBrick: types.Brick<SimpleTextBrickProps> = ({ title, paragraph }) => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <Text
              propName="title"
              placeholder="Your Title Here"
              renderBlock={({ children }) => (
                <h2 className="display-6 fw-bold mb-3">{children}</h2>
              )}
            />
            <RichText
              propName="paragraph"
              placeholder="Add your paragraph here..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
                types.RichTextFeatures.Link,
              ]}
              renderBlock={({ children }) => (
                <p
                  className="lead text-muted"
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#212529',
                  }}
                >
                  {children}
                  <style jsx>{`
                    a {
                      color: #1e40af; /* brand color */
                      text-decoration: none;
                      font-weight: 500;
                      transition: color 0.2s;
                    }
                    a:hover {
                      text-decoration: underline;
                    }
                  `}</style>
                </p>
              )}
            />


          </div>
        </div>
      </div>
    </section>
  );
};

SimpleTextBrick.schema = {
  name: 'simple-text',
  label: 'Title + Paragraph',
  category: 'content',

  getDefaultProps: () => ({
    title: 'Your Title Here',
    paragraph: 'Add your paragraph here...',
  }),
};

export { SimpleTextBrick };
