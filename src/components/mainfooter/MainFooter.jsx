import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <p>&copy; 2024 Dev Atif Saleem</p>
        <p>
          Contact: <a href="tel:03034345397">0303-4345397</a>
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
