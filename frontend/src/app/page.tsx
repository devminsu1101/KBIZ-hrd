
import Button from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <p>Home page</p>
      <Button
        text="setting"
        url="/settings"
        color="gray"
      />
    </div>
  );
}
