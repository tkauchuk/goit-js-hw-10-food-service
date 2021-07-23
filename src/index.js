import './styles.css';
import menuItems from './menu.json';
import menuItemsTemplate from './templates/menu-items.hbs';
import { func } from 'assert-plus';

const refs = {
    menu: document.querySelector('.js-menu'),
    input: document.querySelector('.theme-switch__toggle'),
};

const menuMarkup = menuItemsTemplate(menuItems);
refs.menu.innerHTML = menuMarkup;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

document.body.classList.add('light-theme');
refs.input.addEventListener('change', onThemeChange);
enablePrefferedTheme();

function onThemeChange(event) {
    const switched = event.target.checked;

    if (switched) {
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('Theme', Theme.DARK);
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('Theme', Theme.LIGHT);
    }
};

function enablePrefferedTheme() {
    const savedTheme = localStorage.getItem('Theme');

    if (savedTheme) {
        document.body.classList.replace(document.body.classList.value, savedTheme);

        if (savedTheme === Theme.DARK) {
            refs.input.checked = true;
        }
    }
}

