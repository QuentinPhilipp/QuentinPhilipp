const MetaTags = ({title}) => (
    <>
        <meta name="title" content="Quentin Philipp | Portfolio website" />
        <meta name="description" content="Portfolio website to show my projects and previous experiences. " />
        <meta name="author" content="Quentin Philipp" />
        <meta name="keywords" content="Portfolio, Projects, Developer" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quentinp.me/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Portfolio website to show my projects and previous experiences. " />
        <meta property="og:image" content="https://quentinp.me/header.png" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quentinp.me/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content="Portfolio website to show my projects and previous experiences. " />
        <meta property="twitter:image" content="https://metatags.io/header.png" />
        <link rel="apple-touch-icon" href="https://quentinp.me/favicon.ico" />

    </>
);

export default MetaTags;