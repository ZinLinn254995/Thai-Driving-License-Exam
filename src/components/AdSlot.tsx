import React from 'react';

/**
 * Provider-neutral placement reserved for the future first-party ad platform.
 *
 * This intentionally renders nothing until the platform's public delivery API
 * and publisher integration are implemented. Do not treat a client-side flag
 * as proof of Premium status; ad suppression must use a verified entitlement.
 */
export interface AdSlotProps {
  placement: 'home' | 'study' | 'result';
}

export const AdSlot: React.FC<AdSlotProps> = () => null;
