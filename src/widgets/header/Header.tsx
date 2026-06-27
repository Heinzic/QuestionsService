import styles from './Header.module.css';
import { Button } from '../../shared/ui/button';

// пока в проекте роутинга нет пусть будет здесь
const NAV_LINKS = [
  {
    label: 'База вопросов',
    href: '#'
  },
  {
    label: 'Тренажёр',
    href: '#'
  },
  {
    label: 'Материалы',
    href: '#'
  },
  {
    label: 'Навыки (hh)',
    href: '#'
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <img 
                src="/logo.svg" 
                alt="logo" 
                className={styles.logo}
            />
            <p className={styles.logoText}>Yeahub</p>
        </div>
        <div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                    <li key={link.label} className={styles.navItem}>
                    <a href={link.href} className={styles.navLink}>
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
        <div className={styles.authBlock}>
            <a href='#' className={styles.loginLink}>
                Войти
            </a>
            <Button className={styles.registerButton}>Регистрация</Button>
        </div>
    </header>
  );
};

export default Header;