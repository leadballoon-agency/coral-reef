# Property Thailand - Affiliate Agent Embed Guide

This guide shows you how to add the Property Thailand AI Sales Agent to your website. The agent handles enquiries, qualifies leads, and automatically tracks them back to your affiliate account.

**Test Site:** This guide was created and tested on the Copacabana Coral Reef Jomtien site.

---

## What You'll Get

- A floating chat button in the bottom-right corner of your site
- AI-powered sales agent that knows everything about the property
- Automatic lead capture and qualification
- Multi-language support (English, Thai, German, French, Spanish)
- Affiliate tracking via URL parameters (`?ref=your-code`)

---

## Prerequisites

- A React-based website (Vite, Next.js, Create React App, etc.)
- Your affiliate referral code (e.g., `premier-estates`)
- Node.js installed

---

## Step 1: Install Dependencies

Your project needs these packages. Most React projects already have them:

```bash
npm install framer-motion lucide-react
```

---

## Step 2: Create the Platform API Client

Create a new folder and file: `src/lib/platformApi.js`

```javascript
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
```

---

## Step 3: Add the Embeddable Agent Component

Create the file: `src/components/EmbeddableAgent.jsx`

This is a full-featured chat widget component. Copy it from the Property Thailand component library (file included in this repository at `src/components/EmbeddableAgent.jsx`).

**Key features of the component:**
- Floating button that opens a chat window
- Language selection on first open
- Real-time chat with AI agent
- Quick action buttons for common questions
- Automatic affiliate code capture from URL
- Responsive design (works on mobile and desktop)

---

## Step 4: Import and Add the Agent to Your App

In your main App.jsx (or App.tsx), add these two changes:

### 4a. Add the import at the top:

```jsx
import { EmbeddableAgent } from "./components/EmbeddableAgent";
```

### 4b. Add the component inside your return statement:

```jsx
function App() {
  return (
    <div>
      {/* Your existing site content */}

      {/* AI Sales Agent - Floating Chat Widget */}
      <EmbeddableAgent
        developmentSlug="copacabana-jomtien"
        agentType="sales"
        accentColor="#0ea5e9"
        buttonLabel="Chat with AI Agent"
      />
    </div>
  );
}
```

---

## Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `developmentSlug` | string | required | Property identifier: `origin-bangtao` or `copacabana-jomtien` |
| `agentType` | string | `'sales'` | Agent type: `'sales'` or `'investment'` |
| `accentColor` | string | `'#14b8a6'` | Brand color for the chat bubble (hex code) |
| `buttonLabel` | string | `'Chat with us'` | Text shown on the floating button |

---

## Step 5: Test Locally

Run your development server:

```bash
npm run dev
```

You should see a chat button in the bottom-right corner. Click it to test the agent!

---

## Step 6: Test Affiliate Tracking

To verify leads are tracked to your affiliate account:

1. **Add your referral code to the URL:**
   ```
   http://localhost:5173/?ref=your-affiliate-code
   ```

2. **Open the chat** - you should see "Referred by: your-affiliate-code" displayed

3. **Send a test message** to the agent

4. **Check the admin dashboard** at https://pt-admin.vercel.app to see your lead

---

## How Affiliate Tracking Works

```
┌─────────────────────────────────────────────────────────────────┐
│  User visits: yoursite.com/?ref=premier-estates                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  EmbeddableAgent captures affiliate code from URL               │
│  getAffiliateCode() reads ?ref= or ?affiliate= parameter        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  User opens chat and talks to AI agent                          │
│  Agent answers questions, qualifies the lead                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Lead sent to Platform API with affiliate code attached         │
│  POST https://properties-thailand-platform.vercel.app/api/chat  │
│  Body includes: { affiliateCode: "premier-estates", ... }       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  Lead appears in admin dashboard                                │
│  Tagged to Premier Estates affiliate                            │
│  Commission tracked automatically                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tracking Links for Affiliates

Share these links with your audience to ensure leads are tracked to you:

**Using `ref` parameter (recommended):**
```
https://yoursite.com/?ref=YOUR_AFFILIATE_CODE
```

**Using `affiliate` parameter (alternative):**
```
https://yoursite.com/?affiliate=YOUR_AFFILIATE_CODE
```

Both work identically - use whichever you prefer.

---

## Files Added/Modified

Here's a summary of all changes made to enable the AI agent:

```
your-project/
├── src/
│   ├── lib/
│   │   └── platformApi.js      # NEW - API client
│   ├── components/
│   │   └── EmbeddableAgent.jsx # NEW - Chat widget
│   └── App.jsx                 # MODIFIED - Added import + component
└── AFFILIATE_EMBED_GUIDE.md    # NEW - This documentation
```

---

## Troubleshooting

### Chat button doesn't appear
- Check browser console for errors
- Ensure framer-motion and lucide-react are installed
- Verify the import path is correct

### API calls failing
- Check that the platform API is accessible
- Verify CORS isn't blocking requests
- Check browser console Network tab for error details

### Affiliate code not captured
- Ensure URL includes `?ref=` or `?affiliate=` parameter
- Check that getAffiliateCode() is being called (look for console log)
- The code is captured on component mount, so it needs to be in the URL when the page loads

---

## Support

For technical support or questions about the affiliate program:
- **WhatsApp:** +44 7775 978555
- **Email:** support@propertythailand.com
- **Admin Dashboard:** https://pt-admin.vercel.app

---

*Document Version: 1.0 | Last Updated: January 2025*
*Created during integration testing on Copacabana Coral Reef Jomtien site*
