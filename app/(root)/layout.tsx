import StreamVideoProvider from '@/providers/StreamClientProvider'
import { StreamVideo } from '@stream-io/video-react-sdk'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
    
  )
}

export default RootLayout