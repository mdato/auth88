//import login from './login'
import Login from './Login';
export default function IndexPage() {
  return (
    <div className='centrar'>
      <h1>NextAuth.js with GitHub</h1>
      <p>
        How to use{" "}
        <a href="https://next-auth.js.org" target='_blank'>NextAuth.js</a> for authentication.
      </p>
      <Login />
    </div>
  )
}
