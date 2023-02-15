import './globals.css'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { useStore } from '@/src/store';
import { ShopDataType } from '@/index'
import Navbar from '@/components/home/navbar/Navbar'
import LimitedOffer from '@/components/home/limitedOffer/LimitedOffer';
import Footer from '@/components/home/footer/page';
import StoreInitializer from '@/components/utils/StoreInitializer';

// generating locale params
export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode,
  params: { lng: string }
}) {
  // fetching data from API
  const ItemsData: ShopDataType = await fetch(process.env.CLIENT_URL + '/api/getItemsData', {
  // const ItemsData: ShopDataType = await fetch('http://localhost:3000/api/getItemsData', {
    method: 'POST',
    headers: { 'Content-Type': 'applicaiton/json' },
    body: JSON.stringify({ lng: lng })
  }).then(response => response.json())
  // placing fetched data into the server side store
  useStore.setState({ items: ItemsData.items })
  return (
    <html lang={lng} dir={dir(lng)} >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main>
          <StoreInitializer shopItems={ItemsData.items} />
          {/* @ts-expect-error Server Component */}
          <LimitedOffer lng={lng} />
          {/* @ts-expect-error Server Component */}
          <Navbar lng={lng} />
          {children}
          {/* @ts-expect-error Server Component */}
          <Footer lng={lng} />
        </main>
      </body>
    </html>
  )
}
