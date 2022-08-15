import dynamic from 'next/dynamic'
import React, {
    type HTMLProps,
    useRef,
    useEffect,
    useCallback,
} from 'react'

import Webcam from 'react-webcam'

import {
    BrowserMultiFormatReader,
    type Result,
} from '@zxing/library'

type HTMLVideoElementProps = HTMLProps<HTMLVideoElement>

export type BarcodeScannerProps = {
    onUpdate: (error: unknown, result?: Result) => void
    style?: HTMLVideoElementProps['style']
}

/**
 * Barcode scanner component that uses the zxing library to scan barcodes.
 * @param onUpdate callback that is called when a barcode is scanned
 */
const BarcodeScanner: React.FC<BarcodeScannerProps> = (
    onUpdate,
    style,
) => {
    const webcamRef = useRef<Webcam>(null)
    const handleUserMedia = (stream: MediaStream) => {
        const reader = new BrowserMultiFormatReader()
    }

    return (
        <div>
            <Webcam style={style} videoConstraints={{
                facingMode: 'environment',
            }} />
        </div>
    )
}

export default dynamic(() => Promise.resolve(BarcodeScanner), { ssr: false })