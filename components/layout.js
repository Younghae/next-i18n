import Head from "next/head";
import Link from "next/link";
import classes from "../styles/layout.module.css";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  let router = useRouter();

  return (
    <div>
      <Head>
        <title>i18n Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={classes.header}>
        <nav className={classes.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>

      <main className={classes.content}>{children}</main>

      <footer className={classes.footer}>
        <p>Select Language as bellow</p>

        <ol>
          {router.locales.map((locale) => (
            <li key={locale}>
                {/* {console.log(router.asPath) }
                { console.log(locale)}  */}
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ol>
      </footer>
    </div>
  );
}