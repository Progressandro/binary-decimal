import { Layout } from 'antd'
import Logo from 'components/molecule/Logo'
import ConversionPanel from 'components/organism/ConversionPanel'
import type { NextPage } from 'next'
import classes from './style.module.css'
const { Header, Content } = Layout
const MainPage: NextPage = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className={classes.Header}>
        <Logo />
      </Header>
      <Content>
        <ConversionPanel />
      </Content>
    </Layout>
  )
}

export default MainPage
