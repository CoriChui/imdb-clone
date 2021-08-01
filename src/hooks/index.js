import { useEffect, useRef } from 'react'

export const useClickOutside = (handler) => {
  const node = useRef()

  useEffect(() => {
    const hookHandler = (event) => {
      if (node && !node.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', hookHandler)

    return () => {
      document.removeEventListener('mousedown', hookHandler)
    }
  }, [])

  return node
}