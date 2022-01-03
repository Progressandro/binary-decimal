import { Typography } from 'antd'
import type { NextPage } from 'next'
import classes from './style.module.css'
const Logo: NextPage = () => {
  return (
    <Typography.Title className={classes.LogoText}>Bin2Dec</Typography.Title>
  )
}

export default Logo
