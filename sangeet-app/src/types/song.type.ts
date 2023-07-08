export interface SongType {
  id: string;
  title: string;
  duration: number;
  playCount: number;
  pathLossy?: string;
  pathLossless?: string;
  hash?: string;
  rawHash?: string;
}
