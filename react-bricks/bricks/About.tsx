import { types, Text, RichText, Repeater } from 'react-bricks/frontend'

interface AboutFeatureProps {
  feature: string
}

const AboutFeature: types.Brick<AboutFeatureProps> = ({ feature }) => {
  return (
    <div className="mb-1">
      <i className="fas fa-check-circle text-success me-2"></i>
      <span>{feature}</span>
    </div>
  )
}

AboutFeature.schema = {
  name: 'about-feature',
  label: 'About Feature',
  getDefaultProps: () => ({
    feature: 'Licensed & Insured',
  }),
  sideEditProps: [
    {
      name: 'feature',
      label: 'Feature Text',
      type: types.SideEditPropType.Text,
    }
  ],
}

const About: types.Brick = () => {
  return (
    <section id="about" className="py-5 my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Text
              propName="title"
              placeholder="Title..."
              renderBlock={({ children }) => <h2 className="section-title">{children}</h2>}
            />
            <Text
              propName="subtitle"
              placeholder="Subtitle..."
              renderBlock={({ children }) => <p className="lead">{children}</p>}
            />
            <RichText
              propName="description"
              placeholder="Description..."
              renderBlock={({ children }) => <>{children}</>}
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />
            <div className="mt-4">
              <Repeater propName="features" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <i className="fas fa-truck" style={{ fontSize: '15rem', color: 'var(--secondary-blue)', opacity: 0.1 }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.schema = {
  name: 'about',
  label: 'About',
  getDefaultProps: () => ({
    title: 'About Rocket Transport',
    subtitle: 'Building trust through exceptional service since 2001.',
    description: 'For over two decades, Rocket Transport has been at the forefront of the logistics industry, delivering unparalleled service to businesses and individuals across the nation. Our commitment to excellence, reliability, and customer satisfaction has made us a trusted name in transportation.\n\nWith a modern fleet, advanced tracking technology, and a team of dedicated professionals, we ensure your cargo reaches its destination safely and on time, every time.',
  }),
  repeaterItems: [
    {
      name: 'features',
      items: [
        { type: 'about-feature' }
      ],
      min: 1,
      max: 10,
    }
  ],
}

export { About, AboutFeature }