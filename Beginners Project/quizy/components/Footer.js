import AppStyles from "../styles/App.module.css";

export default function Footer() {
  return (
    <footer className={AppStyles.footer}>
      <span className={AppStyles.footerSpan}>
        Created by{" "}
        <a href="//timsmith.tech" target="_blank" rel="noopener noreferrer">
          Tim Smith
        </a>
      </span>
      <span className={AppStyles.separator}> | </span>
      <span className={AppStyles.footerSpan}>
        Powered by{" "}
        <a href="//opentdb.com/api_config.php" target="_blank">
          Open Trivia DB
        </a>
      </span>
    </footer>
  );
}
