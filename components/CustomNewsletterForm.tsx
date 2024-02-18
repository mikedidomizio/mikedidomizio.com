'use client'
import React, { useRef, useState } from 'react'

export interface NewsletterFormProps {
  title?: string
  apiUrl?: string
}

export const CustomNewsletterForm = ({
  title = 'Subscribe to the newsletter',
  apiUrl = '/api/newsletter/email-octopus',
}: NewsletterFormProps) => {
  const firstNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (firstNameRef.current && emailRef.current) {
      const res = await fetch(apiUrl, {
        body: JSON.stringify({
          firstName: firstNameRef.current.value,
          email: emailRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        setError(true)
        setMessage('Your e-mail address is invalid or you are already subscribed!')
        return
      }

      emailRef.current.value = ''
      setError(false)
      setSubscribed(true)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      {subscribed ? (
        <div className="text-center">
          Awesome, please check your email to confirm your sign up 🎉
        </div>
      ) : (
        <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
          <div className="mb-2 flex flex-col gap-x-2 sm:flex-row md:mb-0">
            <div className="mb-2 md:mb-0">
              <label htmlFor="firstName-input">
                <span className="sr-only">First Name (optional)</span>
                <input
                  autoComplete="name"
                  className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                  id="firstName-input"
                  name="firstName"
                  placeholder="Enter your first name (optional)"
                  ref={firstNameRef}
                  type="text"
                  disabled={subscribed}
                />
              </label>
            </div>
            <div>
              <label htmlFor="email-input">
                <span className="sr-only">Email address</span>
                <input
                  autoComplete="email"
                  className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                  id="email-input"
                  name="email"
                  placeholder="Enter your email"
                  ref={emailRef}
                  required
                  type="email"
                  disabled={subscribed}
                />
              </label>
            </div>
          </div>
          <div className="flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
            <button
              className={`w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white sm:py-0 ${
                subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400'
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? 'Thank you!' : 'Sign up'}
            </button>
          </div>
        </form>
      )}
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}
