// Platform API client - routes chat through the secure backend
// This file connects your site to the Property Thailand AI agents

const PLATFORM_API_URL = 'https://properties-thailand-platform.vercel.app/api/chat';

/**
 * Send a message to the Property Thailand AI agent
 * @param {string} message - The user's message
 * @param {string} developmentSlug - Property ID: 'origin-bangtao' or 'copacabana-jomtien'
 * @param {Array} conversationHistory - Previous messages in the conversation
 * @param {Object} options - Additional options (affiliateCode, agentType)
 * @returns {Promise<string>} - The AI agent's response
 */
export async function callPlatformChat(message, developmentSlug, conversationHistory = [], options = {}) {
  try {
    const response = await fetch(PLATFORM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        developmentSlug,
        conversationHistory: conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        agentType: options.agentType || 'sales',
        affiliateCode: options.affiliateCode,
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Platform API error:', error);
    throw error;
  }
}

/**
 * Get affiliate code from URL parameters
 * Checks for ?ref= or ?affiliate= in the current URL
 * @returns {string|undefined} - The affiliate code if present
 */
export function getAffiliateCode() {
  if (typeof window === 'undefined') return undefined;
  const params = new URLSearchParams(window.location.search);
  return params.get('ref') || params.get('affiliate') || undefined;
}
