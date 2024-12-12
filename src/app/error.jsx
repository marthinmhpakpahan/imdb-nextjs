'use client'

import React from 'react'
import { useEffect } from 'react'

export default function rror({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div className="text-center mt-10">
        <h1>Something went wrong. Please try again later.</h1>
        <button className="hover:text-amber-600" onClick={() => reset()}>Try Again</button>
    </div>
  )
}
