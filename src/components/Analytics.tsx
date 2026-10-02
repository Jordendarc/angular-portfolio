'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics'
import { app } from '@/lib/firebase'

// Logs a screen_view on every route change, like AngularFire's ScreenTrackingService did
export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false
    isSupported().then((supported) => {
      if (!supported || cancelled) return
      logEvent(getAnalytics(app), 'screen_view', {
        firebase_screen: pathname,
        firebase_screen_class: pathname,
      })
    })
    return () => {
      cancelled = true
    }
  }, [pathname])

  return null
}
