const listThemes = [
    {
        type: 'Topic',
        themes: [
            {
                name: 'Zing Music Awards',
                image: './assets/img/modalThemes/modalTheme1/theme1.jpg'
            },
            {
                name: 'Eiffel Tower',
                image: './assets/img/modalThemes/modalTheme1/theme2.jpg'
            },
        ]
    },
    {
        type: 'Color Theme',
        themes: [
            {
                name: 'Dark',
                image: './assets/img/modalThemes/modalTheme3/theme1.jpg'
            },
            {
                name: 'Purple',
                image: './assets/img/modalThemes/modalTheme3/theme2.jpg'
            },
            {
                name: 'Dark Blue',
                image: './assets/img/modalThemes/modalTheme3/theme3.jpg'
            },
            {
                name: 'Sea Blue',
                image: './assets/img/modalThemes/modalTheme3/theme4.jpg'
            },
            {
                name: 'Green',
                image: './assets/img/modalThemes/modalTheme3/theme5.jpg'
            },
            {
                name: 'Brown',
                image: './assets/img/modalThemes/modalTheme3/theme6.jpg'
            },
            {
                name: 'Pink',
                image: './assets/img/modalThemes/modalTheme3/theme7.jpg'
            },
            {
                name: 'Red',
                image: './assets/img/modalThemes/modalTheme3/theme8.jpg'
            },
        ]
    },
    {
        type: 'Light Theme',
        themes: [
            {
                name: 'Bright',
                image: './assets/img/modalThemes/modalTheme4/theme1.jpg'
            },
            {
                name: 'Grey',
                image: './assets/img/modalThemes/modalTheme4/theme2.jpg'
            },
            {
                name: 'Light Blue',
                image: './assets/img/modalThemes/modalTheme4/theme3.jpg'
            },
            {
                name: 'Pink Lotus',
                image: './assets/img/modalThemes/modalTheme4/theme4.jpg'
            },
        ]
    },
]


const THEME_LIST_STORAGE_KEY = 'VIK_THEME_LIST';

localStorage.setItem(THEME_LIST_STORAGE_KEY, JSON.stringify(listThemes))