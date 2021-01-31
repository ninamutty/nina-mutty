import React, { useEffect, useState } from "react"
import MetaData from "../context/MetaData"

const NotFoundContent = () => {
  const [time, setTime] = useState(10)

  useEffect(() => {
    // if (time <= 0) {
    //     window.location.href = '/'
    // }

    const interval = setInterval(() => {
      setTime(time - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [time])

  return (
    <>
      <MetaData />
      <div className="App justify-items-center text-center justify-center">
        <h1 className="mt-36 sm:mt-36 md:mt-72 lg:mt-72 text-2xl md:text-4xl lg:text-6xl text-coolGray-900 dark:text-white">
          Page Not Found!
        </h1>
        <div className="mt-8 text-6xl md:text-8xl lg:text-9xl text-coolGray-900 dark:text-white">
          :(
        </div>
        <h4 className="mt-14 text-sm md:text-md lg:text-md text-coolGray-900 dark:text-white">
          Returning to{" "}
          <a href="/" className="text-cran-800 font-semibold">
            home
          </a>{" "}
          in {time} seconds..
        </h4>
      </div>
    </>
  )
}

export default NotFoundContent
