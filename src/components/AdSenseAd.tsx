import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

interface AdSenseAdProps {
  slot?: string;
}

/**
 * Renders an AdSense unit only when a publisher ID and slot ID are configured.
 * Never place this component inside an active quiz question or answer option.
 */
export const AdSenseAd: React.FC<AdSenseAdProps> = ({ slot }) => {
  const adRef = useRef<HTMLModElement>(null);
  const client = import.meta.env.VITE_ADSENSE_CLIENT_ID?.trim();

  useEffect(() => {
    if (!client || !slot?.trim() || !adRef.current) return;

    const scriptSelector = 'script[data-thai-drive-adsense="true"]';
    if (!document.querySelector(scriptSelector)) {
      const script = document.createElement('script');
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.dataset.thaiDriveAdsense = 'true';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
      document.head.appendChild(script);
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      // Avoid breaking study or exam flows if an ad request cannot be initialized.
      if (import.meta.env.DEV) {
        console.warn('AdSense unit could not be initialized.', error);
      }
    }
  }, [client, slot]);

  if (!client || !slot?.trim()) return null;

  return (
    <aside className="w-full overflow-hidden rounded-xl bg-white/70 px-2 py-3 text-center" aria-label="Advertisement">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-slate-500">Advertisement</p>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot.trim()}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
};
