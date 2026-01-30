'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function TokenExchangePage() {
  const [shortToken, setShortToken] = useState('')
  const [longToken, setLongToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleExchange = async () => {
    if (!shortToken.trim()) {
      setError('Please enter your short-lived access token')
      return
    }

    setLoading(true)
    setError('')
    setLongToken('')

    try {
      const response = await fetch('/api/instagram/exchange-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shortLivedToken: shortToken }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to exchange token')
      }

      setLongToken(data.access_token)
      console.log('[v0] Token exchange successful')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('[v0] Exchange error:', err)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(longToken)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(247, 151, 188)' }}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#D81B60' }}>
            Instagram Token Exchange
          </h1>
          <p className="text-gray-600 mb-8">
            Exchange your short-lived Instagram access token for a long-lived one (60 days)
          </p>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-blue-900 mb-3">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
              <li>Paste your short-lived token below</li>
              <li>Click "Exchange Token"</li>
              <li>Copy the long-lived token</li>
              <li>Update your <code className="bg-blue-100 px-2 py-1 rounded">INSTAGRAM_ACCESS_TOKEN</code> environment variable in Vercel</li>
            </ol>
          </div>

          {/* Short Token Input */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" style={{ color: '#D81B60' }}>
              Short-lived Access Token
            </label>
            <textarea
              value={shortToken}
              onChange={(e) => setShortToken(e.target.value)}
              placeholder="Paste your short-lived token here..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-400 resize-none"
              rows={4}
            />
          </div>

          {/* Exchange Button */}
          <button
            onClick={handleExchange}
            disabled={loading || !shortToken.trim()}
            className="w-full px-6 py-3 text-white font-bold rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#D81B60' }}
          >
            {loading ? 'Exchanging...' : 'Exchange Token'}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-semibold">Error:</p>
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Success - Long Token Display */}
          {longToken && (
            <div className="mt-6 p-6 bg-green-50 border-2 border-green-300 rounded-lg">
              <p className="text-green-700 font-bold mb-3">✓ Token Exchange Successful!</p>
              <p className="text-sm text-green-600 mb-4">
                Your new long-lived token will expire in approximately 60 days.
              </p>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" style={{ color: '#D81B60' }}>
                  Long-lived Access Token (60 days)
                </label>
                <div className="flex gap-2">
                  <textarea
                    value={longToken}
                    readOnly
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 resize-none"
                    rows={4}
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-3 rounded-lg transition-all flex items-center gap-2"
                    style={{ backgroundColor: '#4DB6AC', color: 'white' }}
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Now update your <code className="bg-gray-100 px-2 py-1 rounded">INSTAGRAM_ACCESS_TOKEN</code> environment variable in your Vercel project with this new token.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
