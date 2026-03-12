// npm install react-hook-form
import { useForm } from 'react-hook-form'

function ReactHookForm() {
  // 1. TODO: Destructure register, handleSubmit, and formState: { errors } from useForm()

  // 3. TODO: Define onSubmit(data) — alert a welcome message using data.name and data.drink
  function onSubmit(data) {

  }

  return (
    <div>
      <h2>New Customer Registration</h2>

      {/* 3. TODO: Wrap the form's onSubmit with handleSubmit(onSubmit) */}
      <form>

        <label htmlFor="name">Name</label><br />
        {/* 2. TODO: Spread register('name', { required: '...', minLength: { value: 2, message: '...' } }) onto this input */}
        <input id="name" />
        {/* 5. TODO: Show errors.name.message here if errors.name exists */}
        <br /><br />

        <label htmlFor="email">Email</label><br />
        {/* 2. TODO: Spread register('email', { required: '...' }) onto this input */}
        <input id="email" type="email" />
        {/* 4. formState.errors holds an entry for each field that failed validation */}
        {/* 5. TODO: Show errors.email.message here if errors.email exists */}
        <br /><br />

        <label htmlFor="drink">Favourite drink</label><br />
        {/* 2. TODO: Spread register('drink', { required: '...' }) onto this select */}
        <select id="drink">
          <option value="">— select —</option>
          <option value="Espresso">Espresso</option>
          <option value="Latte">Latte</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Cold Brew">Cold Brew</option>
        </select>
        {/* 5. TODO: Show errors.drink.message here if errors.drink exists */}
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default ReactHookForm
