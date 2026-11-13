import type React from 'react';
import { CreativeWritingDetail } from './CreativeWritingDetail';
import { ScriptWritingDetail } from './ScriptWritingDetail';
import { ProgramProducerDetail } from './ProgramProducerDetail';
import { SocialMediaHandlingDetail } from './SocialMediaHandlingDetail';
import { InfluencerMarketingDetail } from './InfluencerMarketingDetail';
import { BrandCollaborationDetail } from './BrandCollaborationDetail';
import { AdCampaignDetail } from './AdCampaignDetail';
import { SocialGrowthStrategyDetail } from './SocialGrowthStrategyDetail';

/** Maps a service id (see data/portfolioData.ts) to its dedicated component. */
export const PORTFOLIO_DETAIL_COMPONENTS: Record<string, React.FC> = {
  'creative-writing': CreativeWritingDetail,
  'script-writing': ScriptWritingDetail,
  'program-producer': ProgramProducerDetail,
  'social-media-handling': SocialMediaHandlingDetail,
  'influencer-marketing': InfluencerMarketingDetail,
  'brand-collaboration': BrandCollaborationDetail,
  'ad-campaign': AdCampaignDetail,
  'social-growth-strategy': SocialGrowthStrategyDetail,
};
