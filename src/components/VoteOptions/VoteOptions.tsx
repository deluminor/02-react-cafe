import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  const handleGoodVote = () => {
    onVote("good");
  };

  const handleNeutralVote = () => {
    onVote("neutral");
  };

  const handleBadVote = () => {
    onVote("bad");
  };

  return (
    <div className={css.container}>
      <button
        type="button"
        className={`${css.button} ${css.good}`}
        onClick={handleGoodVote}
      >
        Good
      </button>
      <button
        type="button"
        className={`${css.button} ${css.neutral}`}
        onClick={handleNeutralVote}
      >
        Neutral
      </button>
      <button
        type="button"
        className={`${css.button} ${css.bad}`}
        onClick={handleBadVote}
      >
        Bad
      </button>
      {canReset && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
