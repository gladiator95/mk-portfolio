// Step 1: Import React
import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>MK Portfolio</title>
      </Helmet>
      <h1>Welcome to MK Porfolio!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

// Step 3: Export your component
export default IndexPage;
