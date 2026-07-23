import AuthLayout from '../components/auth/AuthLayout'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </main>
  )
}

export default Login
