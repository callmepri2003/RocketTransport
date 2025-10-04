import { types, Text } from 'react-bricks/frontend'

const Hero: types.Brick = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Text propName="title" placeholder="Title..." renderBlock={({ children }) => <h1>{children}</h1>} />
            <Text propName="subtitle" placeholder="Subtitle..." renderBlock={({ children }) => <p>{children}</p>} />
            <div className="mt-4">
              <Text propName="primaryButton" placeholder="Button text..." renderBlock={({ children }) => <button className="btn btn-primary-custom me-3">{children}</button>} />
              <Text propName="secondaryButton" placeholder="Button text..." renderBlock={({ children }) => <button className="btn btn-outline-custom">{children}</button>} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.schema = {
  name: 'hero',
  label: 'Hero',
  getDefaultProps: () => ({
    title: 'Swift. Reliable. Professional.',
    subtitle: 'Your trusted logistics partner since 2001.',
    primaryButton: 'Get a Quote',
    secondaryButton: 'Track Shipment',
  }),
}

export default Hero