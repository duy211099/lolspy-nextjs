import '../styles/index.css'
import React, { ReactElement, ReactNode } from 'react'
import App, { AppProps } from 'next/app'
import NProgressHandler from 'components/NProgressHandler'
import Head from 'next/head'
import { AuthContextProvider } from 'context/auth'
import { Toaster } from 'components/Toast'
import { GlobalContextProvider, useGlobalContext } from 'context/global'
import { Layout } from 'components/Layout'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyAppBody({ Component, pageProps }: AppPropsWithLayout) {
  const { languages, versions, selectedLanguage, setSelectedVersion } =
    useGlobalContext()

  if (!languages || !versions || !setSelectedVersion || !selectedLanguage)
    return null

  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <NProgressHandler />
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </>
  )
}

class MyApp extends App {
  render() {
    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>NextJS boilerplate | Dwarves Foundation</title>
          <meta
            property="og:title"
            content="NextJS boilerplate | Dwarves Foundation"
          />
          <meta name="twitter:site" content="@dwarvesf" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="description"
            content="Opinionated React template for building web applications at scale."
          />
          <meta
            property="og:description"
            content="Opinionated React template for building web applications at scale."
          />
          <meta property="og:image" content="/thumbnail.jpeg" />
          <meta name="twitter:image" content="/thumbnail.jpeg" />
        </Head>

        <AuthContextProvider>
          <GlobalContextProvider>
            <MyAppBody {...this.props} />
          </GlobalContextProvider>
        </AuthContextProvider>
      </>
    )
  }
}

export default MyApp
