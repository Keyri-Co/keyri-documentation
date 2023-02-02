import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/');
    }, 2000);
  });

  return (
    <div className={styles.body}>
      <div className={styles.h1}>We've moved our documentation.</div>
      <div className={styles.p}>You'll be redirected to the new location in a few seconds.</div>
    </div>
  );
}
