import styles from './page.module.scss'

export default function DividerLine(props: { id?: string, marginProps?: number }) {
  const { id, marginProps } = props
  return (
    <div id={id} style={{margin: `${marginProps}rem`}} className={styles.dividerLine}></div>
  )
}
