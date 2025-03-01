const CATEGORIES = [
    {
        title: 'Telefony',
        link: '/telefony',
        subCategories: [{ title: 'Chytré telefony', link: '/chytre_telefony' }, 
                        { title: 'Tlačítkový telefon', link: '/tlacitkove_telefony' }, 
                        // { title: 'Ostatní', link: '/ostatni' },
                    ],
    },
    {
        title: 'Počítače',
        link: '/pocitace',
        subCategories: [{ title: 'Notebooky', link: '/notebooky' }, 
                        { title: 'Personální Počítače', link: '/personalni_pocitace' },
                        { title: 'Herní Počítače', link: '/herni_pocitace' },
                        // { title: 'Ostatní', link: '/ostatni' },
                    ],
    },
    {
        title: 'Velké spotřebiče',
        link: '/velke_spotrebice',
        subCategories: [{ title: 'Ledničky', link: '/lednicky' }, 
                        { title: 'Pračky', link: '/pracky' },
                        { title: 'Klimatizace', link: '/klimatizace' },
                        // { title: 'Ostatní', link: '/ostatni' },
                    ],
    },
    {
        title: 'Projektory',
        link: '/projektory',
    },
]

export default CATEGORIES;