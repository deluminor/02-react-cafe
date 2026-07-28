export interface Votes {
  readonly good: number;
  readonly neutral: number;
  readonly bad: number;
}

export type VoteType = "good" | "neutral" | "bad";
