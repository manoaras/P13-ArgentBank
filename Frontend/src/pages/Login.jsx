import { Form } from '../components/Form'

export function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign in</h1>
        <Form />
      </section>
    </main>
  )
}