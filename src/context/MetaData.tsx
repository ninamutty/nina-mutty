import React from "react"
import { Helmet } from "react-helmet"

class MetaData extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="en" />
          <title lang="en">Ninamutty.com - Nina Mutty's Wesite</title>
          <meta
            name="description"
            content="Personal website for Senior Software Engineer; Nina Mutty"
          />
          <link rel="canonical" href="http://ninamutty.com/" />
        </Helmet>
      </div>
    )
  }
}

export default MetaData
