import styles from './Toggle.module.scss'

interface Props {
  id: string
  label: string
  value: boolean
  onChange: (value: boolean) => void
}

export default function Toggle({ id, label, value, onChange }: Props) {
  const handleClick = () => {
    onChange(!value)
  }
  return (
    <div className={styles.toggle}>
      <label
        id={id}
        className={styles.label}
      >
        {label}
      </label>
      <div
        className={styles.container}
        onClick={handleClick}
      >
        <span
          className={styles.slider}
          role="checkbox"
          aria-checked={value}
          tabIndex={0}
          aria-labelledby={id}
        ></span>
      </div>
    </div>
  )
}
