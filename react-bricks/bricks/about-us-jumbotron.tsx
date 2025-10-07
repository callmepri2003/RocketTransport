import React from 'react';
import { types, Text, Repeater } from 'react-bricks/frontend';

interface AboutJumbotronProps {
  scrollSpeed: number;
  overlayOpacity: number;
  overlayColor: string;
  minHeight: number;
}

const AboutJumbotron: types.Brick<AboutJumbotronProps> = ({
  scrollSpeed = 60,
  overlayOpacity = 0.75,
  overlayColor = '#1e40af',
  minHeight = 700
}) => {
  return (
    <div className="about-jumbotron-wrapper" style={{ minHeight: `${minHeight}px` }}>
      {/* Animated Background Gallery */}
      <div className="gallery-background">
        <div className="gallery-track">
          <Repeater propName="galleryImages" />
          <Repeater propName="galleryImages" />
        </div>
        <div
          className="color-overlay"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity
          }}
        />
      </div>

      {/* Content Section */}
      <div className="content-container">
        <div className="content-card">
          <Text
            propName="title"
            placeholder="ABOUT US"
            renderBlock={({ children }) => (
              <h1 className="section-title">{children}</h1>
            )}
          />

          <Text
            propName="description"
            placeholder="Enter your company description..."
            renderBlock={({ children }) => (
              <p className="section-description">{children}</p>
            )}
          />
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          <Repeater propName="stats" />
        </div>
      </div>

      <style>{`
        .about-jumbotron-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Gallery Background */
        .gallery-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-track {
          display: flex;
          flex-wrap: wrap;
          width: 200%;
          height: 100%;
          animation: scroll-right ${scrollSpeed}s linear infinite;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .color-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Content Container */
        .content-container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          padding: 4rem 0;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 3rem 2.5rem;
          margin-bottom: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          color: white;
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          margin: 0 0 1.5rem 0;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .section-description {
          color: white;
          font-size: 1.125rem;
          line-height: 1.8;
          text-align: center;
          margin: 0;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .content-card {
            padding: 2rem 1.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

// Gallery Image Item
interface GalleryImageItemProps {
  image: types.IImageSource;
}

const GalleryImageItem: types.Brick<GalleryImageItemProps> = ({ image }) => {
  return (
    <div className="gallery-image-item">
      {image && (
        <img
          src={image.src}
          alt={image.alt || ''}
          className="gallery-img"
        />
      )}
      <style>{`
        .gallery-image-item {
          flex: 0 0 25%;
          height: 50%;
          padding: 2px;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .gallery-image-item {
            flex: 0 0 50%;
          }
        }
      `}</style>
    </div>
  );
};

GalleryImageItem.schema = {
  name: 'gallery-image-item',
  label: 'Gallery Image',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      placeholderSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=133&fit=crop',
      srcSet: '',
      alt: 'Transport truck'
    }
  }),
  sideEditProps: [
    {
      name: 'image',
      label: 'Image',
      type: types.SideEditPropType.Image
    }
  ]
};

// Stat Card Item
interface StatCardProps {
  icon: string;
  iconColor: string;
}

const StatCard: types.Brick<StatCardProps> = ({
  icon = 'fa fa-truck',
  iconColor = '#60a5fa'
}) => {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ color: iconColor }}>
        <i className={icon}></i>
      </div>
      <Text
        propName="value"
        placeholder="250000"
        renderBlock={({ children }) => (
          <div className="stat-value">{children}</div>
        )}
      />
      <Text
        propName="label"
        placeholder="TONS OF FREIGHT EVERY YEAR"
        renderBlock={({ children }) => (
          <div className="stat-label">{children}</div>
        )}
      />
      <style>{`
        .stat-card {
          // background: rgba(255, 255, 255, 0.15);
          // backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          // border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
        }

        .stat-value {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

StatCard.schema = {
  name: 'stat-card',
  label: 'Stat Card',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    icon: 'fa fa-truck',
    iconColor: '#60a5fa',
    value: '250000',
    label: 'TONS OF FREIGHT EVERY YEAR'
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon Class',
      type: types.SideEditPropType.Text
    },
    {
      name: 'iconColor',
      label: 'Icon Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          { value: '#60a5fa', label: 'Blue' },
          { value: '#34d399', label: 'Green' },
          { value: '#fbbf24', label: 'Yellow' },
          { value: '#f87171', label: 'Red' },
          { value: '#a78bfa', label: 'Purple' },
          { value: '#ffffff', label: 'White' }
        ]
      }
    }
  ]
};

AboutJumbotron.schema = {
  name: 'about-jumbotron',
  label: 'About Us Jumbotron',
  category: 'hero sections',
  tags: ['about', 'hero', 'jumbotron', 'gallery', 'stats'],

  getDefaultProps: () => ({
    scrollSpeed: 60,
    overlayOpacity: 0.75,
    overlayColor: '#1e40af',
    minHeight: 700,
    title: 'ABOUT US',
    description: 'Rocket Transport is an independent freight company specialising in all types of pallet goods services. With over 24 years of industry experience, we pride ourselves on our ability to deliver on-time, reliable services and maintain strong customer relationships. As an established player in the transport industry, we guarantee that you\'ll be satisfied with our service.',
    galleryImages: [
      {
        image: {
          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 1'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 2'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 3'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 4'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 5'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 6'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 7'
        }
      },
      {
        image: {
          src: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop',
          placeholderSrc: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=200&h=133&fit=crop',
          srcSet: '',
          alt: 'Truck 8'
        }
      }
    ],
    stats: [
      {
        icon: 'fa fa-map-marked-alt',
        iconColor: '#fff',
        value: 'NaN',
        label: 'Deliveries'
      },
      {
        icon: 'fa fa-star',
        value: '24',
        iconColor: '#fff',
        label: 'YEARS OF SERVICE'
      },
      {
        icon: 'fa fa-truck',
        value: '250000',
        iconColor: '#fff',
        label: 'TONS OF FREIGHT EVERY YEAR'
      }
    ]
  }),

  repeaterItems: [
    {
      name: 'galleryImages',
      itemType: 'gallery-image-item',
      itemLabel: 'Gallery Image',
      min: 4,
      max: 20
    },
    {
      name: 'stats',
      itemType: 'stat-card',
      itemLabel: 'Stat',
      min: 0,
      max: 6
    }
  ],

  sideEditProps: [
    {
      groupName: 'Layout',
      props: [
        {
          name: 'minHeight',
          label: 'Min Height (px)',
          type: types.SideEditPropType.Number
        }
      ]
    },
    {
      groupName: 'Animation',
      props: [
        {
          name: 'scrollSpeed',
          label: 'Scroll Speed (seconds)',
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 20,
            max: 120,
            step: 5
          }
        }
      ]
    },
    {
      groupName: 'Overlay',
      props: [
        {
          name: 'overlayColor',
          label: 'Overlay Color',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              { value: '#1e40af', label: 'Blue' },
              { value: '#1f2937', label: 'Dark Gray' },
              { value: '#991b1b', label: 'Dark Red' },
              { value: '#064e3b', label: 'Dark Green' },
              { value: '#581c87', label: 'Purple' }
            ]
          }
        },
        {
          name: 'overlayOpacity',
          label: 'Overlay Opacity',
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 0.3,
            max: 0.9,
            step: 0.05
          }
        }
      ]
    }
  ]
};

export { AboutJumbotron, GalleryImageItem, StatCard };