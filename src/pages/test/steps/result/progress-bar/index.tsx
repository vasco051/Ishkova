import styles from "./styles.module.scss";

interface IProgressBarProps {
  percent: number
}

export const ProgressBar = ({percent}: IProgressBarProps) => {
  const progressBarStyles = {
    gridTemplate: `1fr / ${percent}% 1fr`
  }

  return (
    <div className={styles.progressBar} style={progressBarStyles}>
      <div className={styles.progress}>{percent}%</div>
      <div className={styles.emptiness}>
        {!percent && <span>{percent}%</span>}
      </div>
    </div>
  )
}