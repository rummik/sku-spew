import {
   useState, 
   useEffect 
} from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Barcode, { ReactBarcodeProps } from 'react-jsbarcode'
import { useLocalStorage } from 'usehooks-ts'

export default function Home() {
  const [barcodes, setBarcodes] = useLocalStorage<ReactBarcodeProps>('barcodes', '[]')

  const addBarcode = (value: number, format: string = 'code128') => {
    setBarcodes([...barcodes, { value, format: format }])
  }

  console.log(barcodes);

  return (
    <div>
      <Head>foo</Head>
    </div>
  )
}

