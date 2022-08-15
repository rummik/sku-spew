import {
   useState, 
   useEffect 
} from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Barcode from 'react-jsbarcode'
import BarcodeScanner from '../components/barcode-scanner'
import { type Result as ScanResult } from '@zxing/library'
import { useLocalStorage } from 'usehooks-ts'

type StoredBarcode = {
  value: string
  format: string
}

export default function Home() {
  const [barcodes, setBarcodes] = useLocalStorage<StoredBarcode[]>('barcodes', [])
  const [barcode, setBarcode] = useState<string>('')

  const addBarcode = (value: string, format: string = 'code128') => {
    setBarcodes([...barcodes, { value, format }])
  }

  // handle barcode scanning
  const handleScan = (error: unknown, result?: ScanResult) => {
  }

  return (
    <div>
      <Head><title>Checkout SKU-er</title></Head>

      <BarcodeScanner onUpdate={handleScan} />

      {barcodes.map(({value, format}, index) => (
        <Barcode key={index} value={value} options={{ format }} />
      ))}
    </div>
  )
}

