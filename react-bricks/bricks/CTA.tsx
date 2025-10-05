import { types, Text, Repeater } from 'react-bricks/frontend'

interface CTAItemProps {
  icon: string
  title: string
  content: string
}

const CTAItem: types.Brick<CTAItemProps> = ({ icon, title, content }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="text-center">
        <i className={`${icon} fa-3x mb-3`}></i>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  )
}

CTAItem.schema = {
  name: 'cta-item',
  label: 'CTA Item',
  getDefaultProps: () => ({
    icon: 'fas fa-phone',
    title: 'Call Us',
    content: '1-800-ROCKET-1',
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon Class',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'title',
      label: 'Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'content',
      label: 'Content',
      type: types.SideEditPropType.Text,
    }
  ],
}

const CTA: types.Brick = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <Text
          propName="title"
          placeholder="Title..."
          renderBlock={({ children }) => <h2>{children}</h2>}
        />
        <Text
          propName="subtitle"
          placeholder="Subtitle..."
          renderBlock={({ children }) => <p className="lead mb-4">{children}</p>}
        />
        <div className="row justify-content-center mt-5">
          <Repeater propName="ctaItems" />
        </div>
        <Text
          propName="buttonText"
          placeholder="Button text..."
          renderBlock={({ children }) => <button className="btn btn-primary-custom mt-3">{children}</button>}
        />
      </div>
    </section>
  )
}

CTA.schema = {
  name: 'cta',
  label: 'CTA',
  getDefaultProps: () => ({
    title: 'Ready to Get Started?',
    subtitle: 'Experience the Rocket Transport difference. Contact us today for a free quote.',
    buttonText: 'Request a Quote',
  }),
  repeaterItems: [
    {
      name: 'ctaItems',
      items: [{ type: 'cta-item' }],
      min: 1,
      max: 6,
    }
  ],
}

export { CTA, CTAItem }