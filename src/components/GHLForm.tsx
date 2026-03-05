'use client';

import { useEffect, useRef } from 'react';

interface GHLFormProps {
  formId?: string;
  ghlDomain?: string;
  height?: number;
  className?: string;
}

/**
 * GoHighLevel Form Embed
 * Renders a GHL form via iframe with auto-resize support.
 * Configure via env vars or pass props directly.
 */
export default function GHLForm({
  formId = process.env.NEXT_PUBLIC_GHL_FORM_ID || '',
  ghlDomain = process.env.NEXT_PUBLIC_GHL_DOMAIN || 'api.leadconnectorhq.com',
  height = 650,
  className = '',
}: GHLFormProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== `https://${ghlDomain}`) return;
      if (event.data?.type === 'resize' && event.data?.height && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [ghlDomain]);

  if (!formId) {
    return (
      <div className={className} style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
        <p>Contact form coming soon. Set NEXT_PUBLIC_GHL_FORM_ID to enable.</p>
      </div>
    );
  }

  return (
    <div className={`ghl-form-wrapper ${className}`}>
      <iframe
        ref={iframeRef}
        src={`https://${ghlDomain}/widget/form/${formId}`}
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '8px' }}
        loading="lazy"
        scrolling="no"
        title="Contact Form"
        allow="geolocation"
      />
    </div>
  );
}
