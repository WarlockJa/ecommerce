import favicon from '../../public/images/favicon.ico'

export default function Head() {
  return (
    <>
      <title>E-Commerce</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    </>
  )
}
