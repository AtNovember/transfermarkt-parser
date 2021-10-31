import { BASE_HOST } from '../settings';

export const list = (clubId: number, seasonId: string) =>
    `${BASE_HOST}/xxx/kader/verein/${clubId}/saison_id/${seasonId}/plus/1`;
