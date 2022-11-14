import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <div>
      <Head>
        <title>Xepelin Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <img
            src="/xepelin_logo.png"
            className={styles.logo}
            alt="xepelin_logo"
          />
          {user && (
            <>
              <h3>{user.email}</h3>
              <Link href="/api/auth/logout">Logout</Link>
            </>
          )}
        </div>
      </div>

      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to Xepelin Web!</h1>
        <div className={styles.excelContainer}>
          <h2>Tasas de operaciones</h2>
          <div className={styles.rightCol}>
            <iframe src="https://docs.google.com/spreadsheets/d/1BeZoxnVxzrsRseYLU5hio8PBWJ8ejFjN6aPUcKqBEzM/edit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
