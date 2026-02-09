import React, { useContext } from 'react'
import { AuthUserContext } from '../../context/authuser'
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';

const XLogo = () => ( /// avater for twitter x.com
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Login = () => {
  const {login, loading} = useContext(AuthUserContext);
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email address"),
      password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      const userData = {
        id: Date.now(),
        email: values.email,
        password: values.password,
        name: values.email.split("@")[0],
        username: "@" + values.email.split("@")[0],
        avatar: `https://ui-avatars.com/api/?name=${values.email.split('@')[0]}&background=1DA1F2&color=fff`,
        bio: "Hello I'm using Twitter Clone",
        followers: [],
        following: [],
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      } 
      login(userData);
      toast.success("Login Successfully");
      navigate("/");
    },
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-black text-white">
      <div className="hidden lg:flex items-center justify-center bg-black">
        <XLogo />
        <style>{`
          .lg\\:flex svg {
            width: 400px;
            height: 400px;
          }
        `}</style>
      </div>


      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start lg:hidden">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <XLogo />
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold mb-8">Happening now</h1>
                <h2 className="text-3xl font-bold mb-6 text-center">Join <span className="text-sky-500">X</span> today.</h2>
              </div>
              
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={`flex h-14 w-full rounded border ${formik.touched.email && formik.errors.email? 'border-red-500': 'border-gray-700'} bg-black px-4 py-2 text-lg placeholder:text-gray-500 focus:outline-none focus:border-sky-500 transition-colors`}
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (<p className="text-sm text-red-500">{formik.errors.email}</p>) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={`flex h-14 w-full rounded border ${formik.touched.password && formik.errors.password? 'border-red-500': 'border-gray-700'} bg-black px-4 py-2 text-lg placeholder:text-gray-500 focus:outline-none focus:border-sky-500 transition-colors`}
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? (<p className="text-sm text-red-500">{formik.errors.password}</p>) : null}
                </div>

                <Link to="/forgot-password" className="text-sm text-sky-500 hover:underline">
                  Forgot password?
                </Link>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-white hover:bg-gray-200 text-black font-bold text-lg h-12 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {formik.isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/signup" className="text-sky-500 hover:underline font-medium">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login