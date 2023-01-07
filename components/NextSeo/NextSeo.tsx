import { SITE_NAME } from "../../@constants";
import { NextSeoProps, NextSeo as NextSeoComp } from "next-seo";
import Head from "next/head";

export default function NextSeo({ title, ...props }: NextSeoProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <NextSeoComp title={title} {...props} />
    </>
  );
}
