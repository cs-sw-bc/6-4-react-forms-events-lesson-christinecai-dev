import { useState } from 'react'
import PassingVsCalling from './components/1.1-PassingVsCalling'
import PassingHandlersAsProps from './components/1.2-PassingHandlersAsProps'
import EventPropagation from './components/1.3-EventPropagation'
import PreventingDefault from './components/1.4-PreventingDefault'
import SimpleForm from './components/2a-SimpleForm'
import AdvancedForm from './components/2b-AdvancedForm'
import ReactHookForm from './components/2c-ReactHookForm'

const tabs = [
  { label: '1.1 Passing vs Calling',     component: <PassingVsCalling /> },
  { label: '1.2 Handlers as Props',       component: <PassingHandlersAsProps /> },
  { label: '1.3 Propagation',             component: <EventPropagation /> },
  { label: '1.4 Prevent Default',         component: <PreventingDefault /> },
  { label: '2a Simple Form',              component: <SimpleForm /> },
  { label: '2b Advanced Form',            component: <AdvancedForm /> },
  { label: '2c React Hook Form',          component: <ReactHookForm /> },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '40px auto', padding: '0 20px' }}>
      <h1>☕ Lesson 4 — Events & Forms</h1>

      {/* Tab buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            style={{
              padding: '8px 14px',
              cursor: 'pointer',
              borderRadius: '6px',
              border: '1px solid #ccc',
              background: activeTab === i ? '#333' : '#fff',
              color: activeTab === i ? '#fff' : '#333',
              fontWeight: activeTab === i ? 'bold' : 'normal',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active component */}
      {tabs[activeTab].component}
    </div>
  )
}