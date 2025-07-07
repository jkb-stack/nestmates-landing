'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestPage() {
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function testConnection() {
      try {
        console.log('Testing Supabase connection...')
        const { data, error } = await supabase.from('profiles').select('count')
        
        if (error) {
          console.error('Supabase error:', error)
          setError(`Database error: ${error.message}`)
        } else {
          console.log('Connection successful!', data)
          setConnected(true)
        }
      } catch (err) {
        console.error('Connection failed:', err)
        setError(`Connection failed: ${err}`)
      }
      setLoading(false)
    }
    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Database Connection Test
        </h1>
        
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Testing connection...</p>
          </div>
        ) : (
          <div className="text-center">
            {connected ? (
              <div>
                <div className="text-6xl mb-4">✅</div>
                <p className="text-xl font-semibold text-green-600 mb-2">
                  Database Connected!
                </p>
                <p className="text-gray-600">
                  Your app can successfully talk to Supabase! 🎉
                </p>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    <strong>What this means:</strong><br/>
                    • Your environment variables are set up correctly<br/>
                    • Supabase connection is working<br/>
                    • Database tables are accessible<br/>
                    • Ready to build the real app!
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-6xl mb-4">❌</div>
                <p className="text-xl font-semibold text-red-600 mb-2">
                  Connection Failed
                </p>
                <p className="text-gray-600 mb-4">
                  There's an issue with the database connection.
                </p>
                {error && (
                  <div className="mt-4 p-4 bg-red-50 rounded-lg text-left">
                    <p className="text-sm text-red-700">
                      <strong>Error details:</strong><br/>
                      {error}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  )
}
