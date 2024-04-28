import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import App from '../App'

const IndexPage: React.FC = () => {
  return <App></App>
}

export default IndexPage

export const Head: HeadFC = () => <title>ARTSS</title>
