// npm install react-hook-form
import { useForm } from 'react-hook-form'

function ReactHookForm() {
  // 1. TODO: Destructure register, handleSubmit, and formState: { errors } from useForm()
  //state in react is a hook
  //every hook has = useHook(); (everything starts with hook): handle validations
  // =useState()
  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues:{
      name: '',
      email: 'abc@gmail.com'
    }
  });//took care of prevent default
  //register all our form inputs with RHF

  // 3. TODO: Define onSubmit(data) — alert a welcome message using data.name and data.drink
  function onSubmit(data) {
    alert(`Welcome, ${data.name}. Your favorite drink is ${data.drink}.`)
  }

  return (//register all the input fields with the hook form
    <div>
      <h2>New Customer Registration</h2>

      {/* 3. TODO: Wrap the form's onSubmit with handleSubmit(onSubmit): do event prevent default and validate all fields */}
      <form onSubmit ={handleSubmit(onSubmit)}>

        <label htmlFor="name">Name</label><br />
        {/* 2. TODO: Spread register('name', { required: '...', minLength: { value: 2, message: '...' } }) onto this input //register this field as name field */} 
        <input id="name" {...register('name', { required: 'Name cannot be empty', minLength: { value: 4, message: 'Please type a valid name' } })}/>
        {/* 5. TODO: Show errors.name.message here if errors.name exists */}
        <br /><br />
         {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

        <label htmlFor="email">Email</label><br />
        {/* 2. TODO: Spread register('email', { required: '...' }) onto this input */}
        <input id="email" type="email" {...register('email', { required: 'Email cannot be empty' })}/>
        {/* 4. formState.errors holds an entry for each field that failed validation */}
        {/* 5. TODO: Show errors.email.message here if errors.email exists */}
        <br /><br />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <label htmlFor="drink">Favourite drink</label><br />
        {/* 2. TODO: Spread register('drink', { required: '...' }) onto this select */}
        <select id="drink" {...register('drink', { required: 'Please select a favourite drink' })}>
          <option value="">— select —</option>
          <option value="Espresso">Espresso</option>
          <option value="Latte">Latte</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Cold Brew">Cold Brew</option>
        </select>
        {/* 5. TODO: Show errors.drink.message here if errors.drink exists */}
        <br /><br />
         {errors.drink && <p style={{ color: 'red' }}>{errors.drink.message}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default ReactHookForm
