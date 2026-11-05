'use client';

import Script from 'next/script';

interface GHLFormProps {
  formId?: string;
  formName?: string;
  height?: number;
  className?: string;
}

/**
 * GoHighLevel Form Embed (inline layout)
 * Uses GHL's form_embed.js, which auto-resizes the iframe and passes the
 * parent page's URL params (utm_*, gclid, fbclid) through to the form.
 * Form ID can be overridden with NEXT_PUBLIC_GHL_FORM_ID.
 */
export default function GHLForm({
  formId = process.env.NEXT_PUBLIC_GHL_FORM_ID || 'ycnLuDQA4jpW51aii4Vk',
  formName = 'XYSculptMD Contact Form',
  height = 1279,
  className = '',
}: GHLFormProps) {
  const iframeId = `inline-${formId}`;

  return (
    <div className={`ghl-form-wrapper ${className}`}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        id={iframeId}
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '8px' }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title={formName}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
