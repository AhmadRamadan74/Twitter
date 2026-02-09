import React, { useContext } from "react";
import { AuthUserContext } from "../../context/authuser";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];
// For DOB
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

export default function Signup() {
  const { signup, loading } = useContext(AuthUserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      month: "",
      day: "",
      year: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      month: Yup.string().required("Month is required"),
      day: Yup.string().required("Day is required"),
      year: Yup.string().required("Year is required"),
    }),
    onSubmit: (values) => {
      const dateOfBirth = `${values.year}-${values.month}-${values.day}`;
      const userData = {
        id: Date.now(),
        email: values.email,
        password: values.password,
        name: values.email.split("@")[0],
        username: "@" + values.email.split("@")[0],
        avatar: `https://ui-avatars.com/api/?name=${values.email.split("@")[0]}&background=1DA1F2&color=fff`,
        bio: "Hello I'm using Twitter Clone",
        dateOfBirth: dateOfBirth,
        followers: [],
        following: [],
        joinedDate: new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
      };
      signup(userData);
      toast.success("Account created successfully!");
      navigate("/login");
    },
  });

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
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold mb-4">Create your account</h1>
              </div>

              {/* Form  */}
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={`flex h-14 w-full rounded border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-gray-700"
                    } bg-black px-4 py-2 text-lg placeholder:text-gray-500 focus:outline-none focus:border-sky-500 transition-colors`}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={`flex h-14 w-full rounded border ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : "border-gray-700"
                    } bg-black px-4 py-2 text-lg placeholder:text-gray-500 focus:outline-none focus:border-sky-500 transition-colors`}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-sm text-red-500">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-400">
                    Date of birth
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {/* Month */}
                    <div className="col-span-2">
                      <select
                        id="month"
                        className={`w-full h-14 rounded border ${
                          formik.touched.month && formik.errors.month
                            ? "border-red-500"
                            : "border-gray-700"
                        } bg-black px-4 py-2 text-base text-gray-300 focus:outline-none focus:border-sky-500 transition-colors appearance-none cursor-pointer`}
                        {...formik.getFieldProps("month")}
                      >
                        <option value="" className="text-gray-500">
                          Month
                        </option>
                        {months.map((month) => (
                          <option
                            key={month.value}
                            value={month.value}
                            className="text-white"
                          >
                            {month.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Day */}
                    <div>
                      <select
                        id="day"
                        className={`w-full h-14 rounded border ${
                          formik.touched.day && formik.errors.day
                            ? "border-red-500"
                            : "border-gray-700"
                        } bg-black px-4 py-2 text-base text-gray-300 focus:outline-none focus:border-sky-500 transition-colors appearance-none cursor-pointer`}
                        {...formik.getFieldProps("day")}
                      >
                        <option value="" className="text-gray-500">
                          Day
                        </option>
                        {days.map((day) => (
                          <option
                            key={day}
                            value={day.toString().padStart(2, "0")}
                            className="text-white"
                          >
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Year */}
                  <div>
                    <select
                      id="year"
                      className={`w-full h-14 rounded border ${
                        formik.touched.year && formik.errors.year
                          ? "border-red-500"
                          : "border-gray-700"
                      } bg-black px-4 py-2 text-base text-gray-300 focus:outline-none focus:border-sky-500 transition-colors appearance-none cursor-pointer`}
                      {...formik.getFieldProps("year")}
                    >
                      <option value="" className="text-gray-500">
                        Year
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year} className="text-white">
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Error Messages for DOB */}
                  {(formik.touched.month && formik.errors.month) ||
                  (formik.touched.day && formik.errors.day) ||
                  (formik.touched.year && formik.errors.year) ? (
                    <p className="text-sm text-red-500">
                      Please select your complete date of birth
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full bg-white hover:bg-gray-200 text-black font-bold text-lg h-12 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {formik.isSubmitting ? "Creating account..." : "Sign up"}
                </button>
              </form>

              <div className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sky-500 hover:underline font-medium"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
