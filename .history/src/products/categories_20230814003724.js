const CATEGORIES = [
    {
        title: 'Главная',
        link: '/',
        // subCategories: [{title: 'Rifles'}, {title: 'Pistols'},],
    },
    {
        title: 'Оружие',
        link: '/weapons',
        subCategories: [{title: 'Нарезное оружие', link: '/rifles'}, {title: 'Пневматическое оружие',link: '/pneumatic'},{title: 'Гладкоствольное оружие',link: '/shotguns'},{title: 'Травматическое оружие',link: '/traumatic'},],
    },
    {
        title: 'Средства защиты',
        link: '/protection',
        subCategories: [{title: 'Перцовые балончики', link: '/pepper-spray'}, {title: 'Электрошокеры', link:'/stun-gun'},{title: 'Остальное', link: '/rest'},],
    },
    {
        title: 'Ножи',
        link: '/knifes',
        // subCategories: [{title: 'Rifles'}, {title: 'Pistols'},],
    },
    {
        title: 'Боеприпасы',
        subCategories: [{title: 'Для нарезного оружия'}, {title: 'Для гладкоствольного оружия'}, {title: 'Для пневматического оружия'},{title: 'Для травматического оружия'},],
    },
    {
        title: 'Одежда и обувь',
        link: '/clothes',
    },
    {
        title: 'Аксессуары для оружия',
        subCategories: [{title: 'Сошки'}, {title: 'Уход за оружием'}, {title:'Чехлы'}, {title:'Инструменты'}, {title:'Капканы'}, {title:'Чучела животных'}, {title:'Наушники и очки'}, {title:'Оптика'}, {title:'Остальное'}],
    },
]

export default CATEGORIES;