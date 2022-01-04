import { Typography } from 'antd'
import type { NextPage } from 'next'
import classes from './style.module.css'
const Logo: NextPage = () => {
  return (
    <>
      <Typography.Title className={classes.LogoTitle}>Bin2Dec |</Typography.Title>
      <Typography.Title level={3} className={classes.LogoSubtitle}>
        A simple Binary {'<->'} Decimal converter
      </Typography.Title>
    </>
  )
}

export default Logo
