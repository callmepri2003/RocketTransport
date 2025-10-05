import { types, Text, Repeater } from 'react-bricks/frontend'

const StatItem: types.Brick = () => {
  return (
    <div className="col-md-3 col-6">
      <div className="stat-item">
        <Text
          propName="number"
          placeholder="24+"
          renderBlock={({ children }) => <span className="stat-number">{children}</span>}
        />
        <Text
          propName="label"
          placeholder="Years Experience"
          renderBlock={({ children }) => <span className="stat-label">{children}</span>}
        />
      </div>
    </div>
  )
}

StatItem.schema = {
  name: 'stat-item',
  label: 'Stat Item',
  getDefaultProps: () => ({
    number: '24+',
    label: 'Years Experience',
  }),
}

const Stats: types.Brick = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          <Repeater propName="stats" />
        </div>
      </div>
    </section>
  )
}

Stats.schema = {
  name: 'stats',
  label: 'Stats',
  repeaterItems: [
    {
      name: 'stats',
      items: [
        { type: 'stat-item' }
      ],
      min: 1,
      max: 8,
    }
  ],
}

export { Stats, StatItem }