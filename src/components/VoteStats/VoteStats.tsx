import type { Votes } from "../../types/votes";
import css from "./VoteStats.module.css";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.heading}>Live stats</h2>
        <p className={css.subtitle}>Updated with every vote</p>
      </div>

      <div className={css.grid}>
        <p className={`${css.stat} ${css.good}`}>
          Good: <strong>{votes.good}</strong>
        </p>
        <p className={`${css.stat} ${css.neutral}`}>
          Neutral: <strong>{votes.neutral}</strong>
        </p>
        <p className={`${css.stat} ${css.bad}`}>
          Bad: <strong>{votes.bad}</strong>
        </p>
        <p className={`${css.stat} ${css.total}`}>
          Total: <strong>{totalVotes}</strong>
        </p>
      </div>

      <div className={css.positive}>
        <div className={css.positiveMeta}>
          <p className={css.stat}>
            Positive: <strong>{positiveRate}%</strong>
          </p>
          <span className={css.positiveHint}>share of good votes</span>
        </div>
        <meter
          className={css.progress}
          min={0}
          max={100}
          value={positiveRate}
          aria-label="Positive feedback rate"
        >
          {positiveRate}%
        </meter>
      </div>
    </div>
  );
}
