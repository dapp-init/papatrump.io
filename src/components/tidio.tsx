"use client";
import Head from "next/head";
import React, { useEffect } from "react";

export default function TidioChat() {
  useEffect(() => {
    const tidioScript = document.createElement("script");
    tidioScript.src = "http://code.tidio.co/vjpmaip5ikiteodeyd4wdqwicjxnzo4q.js";
    tidioScript.async = true;
    document.body.appendChild(tidioScript);

    return () => {
      document.body.removeChild(tidioScript);
    };
  }, []);

  return (
    <Head>
      <script
        src="http://code.tidio.co/vjpmaip5ikiteodeyd4wdqwicjxnzo4q.js"
        async
      ></script>
    </Head>
  );
}
