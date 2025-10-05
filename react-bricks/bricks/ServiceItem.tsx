import { types, Text, RichText, useAdminContext } from 'react-bricks/frontend'

interface ServiceItemProps {
  icon: string
}

const ServiceItem: types.Brick<ServiceItemProps> = ({ icon }) => {
  const { isAdmin } = useAdminContext()

  return (
    <div className="col-md-6 col-lg-4">
      <div className="service-card">
        <div className="service-icon">
          <i className={icon}></i>
        </div>
        <Text
          propName="title"
          placeholder="Service title..."
          renderBlock={({ children }) => <h3>{children}</h3>}
        />
        <Text
          propName="description"
          placeholder="Description..."
          renderBlock={({ children }) => <p>{children}</p>}
        />
      </div>
    </div>
  )
}

ServiceItem.schema = {
  name: 'service-item',
  label: 'Service Item',
  getDefaultProps: () => ({
    icon: 'fas fa-shipping-fast',
    title: 'Express Delivery',
    description: 'Time-critical shipments delivered with guaranteed speed and accuracy. Same-day and next-day options available.',
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon Class',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default ServiceItem