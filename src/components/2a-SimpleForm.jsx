import { useState } from 'react'

function SimpleForm() {
  // 1. Uncontrolled example — React cannot see this value, avoid this pattern
  // <input type="text" defaultValue="Espresso" />

  // 2. TODO: Add a controlled state variable for drink (start with empty string)

  // 3. TODO: Add a controlled state variable for milk (start with 'whole')

  // 4. TODO: Add a controlled state variable for notes (start with empty string)

  return (
    <div>
      <h2>Barista Preference Survey</h2>

      {/* 2. TODO: Add value and onChange props to make this a controlled input */}
      <label htmlFor="drink">Favourite drink</label>
      <br />
      <input id="drink" type="text" />
      <br /><br />

      {/* 3. TODO: Add value and onChange props to make this a controlled select */}
      <label htmlFor="milk">Preferred milk</label>
      <br />
      <select id="milk">
        <option value="whole">Whole</option>
        <option value="oat">Oat</option>
        <option value="almond">Almond</option>
        <option value="soy">Soy</option>
      </select>
      <br /><br />

      {/* 4. TODO: Add value and onChange props to make this a controlled textarea */}
      <label htmlFor="notes">Any notes for your barista?</label>
      <br />
      <textarea id="notes" rows={3} />
      <br /><br />

      {/* 5. TODO: Display the live values of drink, milk, and notes below */}
      <div style={{ background: '#f5f0e8', padding: '0.75rem' }}>
        <strong>Your order preview:</strong>
        <p>Drink: </p>
        <p>Milk: </p>
        <p>Notes: </p>
      </div>
    </div>
  )
}

export default SimpleForm
