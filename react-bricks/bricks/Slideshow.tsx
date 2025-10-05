import React from 'react';
import { types, Text, Repeater } from 'react-bricks/frontend';

interface JumbotronSlideshowProps {
  autoPlaySpeed: number;
  showControls: boolean;
  showIndicators: boolean;
}

const JumbotronSlideshow: types.Brick<JumbotronSlideshowProps> = ({
  autoPlaySpeed = 5000,
  showControls = true,
  showIndicators = true
}) => {
  const carouselId = React.useId();

  return (
    <>
      <div
        id={carouselId}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={autoPlaySpeed}
      >
        {showIndicators && (
          <div className="carousel-indicators">
            <Repeater
              propName="slides"
              renderItemWrapper={(item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                />
              )}
            />
          </div>
        )}

        <div className="carousel-inner">
          <Repeater propName="slides" />
        </div>

        {showControls && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}

        <style>{`
          .carousel-item {
            height: 600px;
          }
          
          .jumbotron-subtitle {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 1rem;
            opacity: 0.9;
          }
          
          .jumbotron-title {
            font-family: 'Raleway', sans-serif;
            font-size: 4rem;
            font-weight: 700;
            line-height: 1.2;
            margin: 0;
          }
          
          @media (max-width: 768px) {
            .jumbotron-title {
              font-size: 2.5rem !important;
            }
            .jumbotron-subtitle {
              font-size: 0.9rem !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

// Slide Item Brick
interface SlideItemProps {
  backgroundImage: types.IImageSource;
  overlayOpacity: number;
}

const SlideItem: types.Brick<SlideItemProps> = ({
  backgroundImage,
  overlayOpacity = 0.4
}) => {
  return (
    <div className="carousel-item active position-relative">
      {backgroundImage && (
        <img
          src={backgroundImage.src}
          alt={backgroundImage.alt || ''}
          className="d-block w-100 h-100 position-absolute top-0 start-0"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="d-flex align-items-center justify-content-center h-100 position-relative">
        <div className="text-center text-white px-4" style={{ maxWidth: '900px' }}>
          <Text
            propName="subtitle"
            placeholder="Subtitle text..."
            renderBlock={({ children }) => (
              <div className="jumbotron-subtitle">
                {children}
              </div>
            )}
          />
          <Text
            propName="title"
            placeholder="Main title..."
            renderBlock={({ children }) => (
              <h1 className="jumbotron-title">
                {children}
              </h1>
            )}
          />
        </div>
      </div>
    </div>
  );
};

SlideItem.schema = {
  name: 'slide-item',
  label: 'Slide',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    backgroundImage: {
      src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=900&fit=crop',
      placeholderSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=225&fit=crop',
      srcSet: '',
      alt: 'Background image'
    },
    overlayOpacity: 0.4,
    subtitle: 'Welcome to Our World',
    title: 'Creating Amazing Experiences'
  }),
  sideEditProps: [
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: types.SideEditPropType.Image
    },
    {
      name: 'overlayOpacity',
      label: 'Dark Overlay Opacity',
      type: types.SideEditPropType.Range,
      rangeOptions: {
        min: 0,
        max: 0.9,
        step: 0.1
      }
    }
  ]
};

JumbotronSlideshow.schema = {
  name: 'jumbotron-slideshow',
  label: 'Jumbotron Slideshow',
  category: 'hero sections',
  tags: ['slideshow', 'hero', 'jumbotron', 'carousel'],

  getDefaultProps: () => ({
    autoPlaySpeed: 5000,
    showControls: true,
    showIndicators: true,
    slides: [
      {
        backgroundImage: {
          src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&h=900&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=225&fit=crop',
          srcSet: '',
          alt: 'Background image'
        },
        overlayOpacity: 0.4,
        subtitle: 'Welcome to Our World',
        title: 'Creating Amazing Experiences'
      },
      {
        backgroundImage: {
          src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=225&fit=crop',
          srcSet: '',
          alt: 'Background image'
        },
        overlayOpacity: 0.4,
        subtitle: 'Innovation Meets Design',
        title: 'Build Something Beautiful'
      },
      {
        backgroundImage: {
          src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=225&fit=crop',
          srcSet: '',
          alt: 'Background image'
        },
        overlayOpacity: 0.4,
        subtitle: 'Your Success Story',
        title: 'Starts Right Here'
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'slides',
      itemType: 'slide-item',
      itemLabel: 'Slide',
      min: 1,
      max: 10
    }
  ],

  sideEditProps: [
    {
      name: 'autoPlaySpeed',
      label: 'Auto-play Speed (ms)',
      type: types.SideEditPropType.Number,
      validate: (value) => value >= 1000 || 'Minimum 1000ms (1 second)'
    },
    {
      name: 'showControls',
      label: 'Show Arrow Controls',
      type: types.SideEditPropType.Boolean
    },
    {
      name: 'showIndicators',
      label: 'Show Dot Indicators',
      type: types.SideEditPropType.Boolean
    }
  ]
};

export { JumbotronSlideshow, SlideItem };