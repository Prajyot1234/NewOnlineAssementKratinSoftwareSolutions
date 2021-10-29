import Head from "next/head"
import { DataLayer } from "../config/DataLayer";
import  reducer , { initialState } from "../config/Reducer";
import { SessionProvider } from "next-auth/react"

export default function App({ 
  Component,
  pageProps: { session, ...pageProps },
 }) {
  return (
    <SessionProvider session={session} >
        <DataLayer initialState={initialState} reducer={reducer} >
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
          </Head>
            <Component {...pageProps} />
        </DataLayer>
    </SessionProvider>
  )
}
