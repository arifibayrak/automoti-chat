import type { UIMessage } from 'ai';
import type { RecommendationResult } from './types';

export type AutomotiUIMessage = UIMessage<
  never,
  {
    recommendations: RecommendationResult;
    suggestions: string[];
  }
>;
