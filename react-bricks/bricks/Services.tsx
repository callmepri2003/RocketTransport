import { types, Text, Repeater } from 'react-bricks/frontend'

const ServiceCard: types.Brick = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="service-card">
        <Text propName="icon" placeholder="Icon class..." renderBlock={({ children }) => (
          <div className="service-icon"><i className={children as string}></i></div>
        )} />
        <Text propName="title" placeholder="Service title..." renderBlock={({ children }) => <h3>{children}</h3>} />
        <Text propName="description" placeholder="Description..." renderBlock={({ children }) => <p>{children}</p>} />
      </div>
    </div>
  )
}

ServiceCard.schema = {
  name: 'service-card',
  label: 'Service Card',
  getDefaultProps: () => ({
    icon: 'fas fa-shipping-fast',
    title: 'Express Delivery',
    description: 'Time-critical shipments delivered with guaranteed speed and accuracy.',
  }),
}

const Services: types.Brick = () => {
  return (
    <section id="services" className="py-5 my-5">
      <div className="container">
        <div className="text-center mb-5">
          <Text propName="title" placeholder="Title..." renderBlock={({ children }) => <h2 className="section-title">{children}</h2>} />
          <Text propName="subtitle" placeholder="Subtitle..." renderBlock={({ children }) => <p className="section-subtitle">{children}</p>} />
        </div>
        <div className="row g-4">
          <Repeater propName="services" />
        </div>
      </div>
    </section>
  )
}

Services.schema = {
  name: 'services',
  label: 'Services',
  getDefaultProps: () => ({
    title: 'Our Services',
    subtitle: 'Comprehensive logistics solutions tailored to your needs',
  }),
  repeaterItems: [
    {
      name: 'services',
      items: [
        { type: 'service-item' }
      ]
    }
  ],
}

export { Services, ServiceCard }