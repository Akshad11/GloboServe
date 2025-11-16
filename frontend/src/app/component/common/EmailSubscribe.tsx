"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

export default function EmailSubscribe() {
    const [showError, setShowError] = useState(false);

    return (
        <div className="w-full flex justify-end relative">

            <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log("Subscribed:", values.email);
                    resetForm();
                }}
            >
                {({ errors, touched }) => {

                    // Auto-hide error
                    useEffect(() => {
                        if (errors.email && touched.email) {
                            setShowError(true);

                            const timer = setTimeout(() => {
                                setShowError(false);
                            }, 3000);

                            return () => clearTimeout(timer);
                        }
                    }, [errors.email, touched.email]);

                    return (
                        <Form className="relative">

                            <div className="bg-white rounded-lg shadow-md flex items-center gap-2 px-3 py-2">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="
                    w-[200px]
                    bg-transparent outline-none 
                    text-gray-800 placeholder-gray-400
                  "
                                />

                                <button
                                    type="submit"
                                    className="
                    bg-[#4B2615] text-white 
                    px-4 py-2 rounded-xl shadow 
                    hover:bg-[#3c1f12] transition
                    text-sm
                  "
                                >
                                    Subscribe
                                </button>
                            </div>

                            {/* ERROR MESSAGE */}
                            {showError && (
                                <div
                                    className="
                    absolute left-0 w-full text-center mt-1
                    text-red-300 text-sm fade-out
                  "
                                >
                                    {errors.email}
                                </div>
                            )}

                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
