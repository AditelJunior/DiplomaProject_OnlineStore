const CATEGORIES = [
    {
        title: 'Оружие',
        link: '/weapons',
        subCategories: [{ title: 'Нарезное оружие', link: '/rifles' }, 
                        { title: 'Пневматическое оружие', link: '/pneumatic' }, 
                        { title: 'Гладкоствольное оружие', link: '/shotguns' }, 
                        { title: 'Травматическое оружие', link: '/traumatic' },],
    },
    {
        title: 'Средства защиты',
        link: '/protection',
        subCategories: [{ title: 'Перцовые балончики', link: '/pepper_sprays' }, 
                        { title: 'Электрошокеры', link: '/stun_guns' }, 
                        { title: 'Остальное', link: '/rest_protection' },],
    },
    {
        title: 'Ножи',
        link: '/knives',
    },
    {
        title: 'Боеприпасы',
        link: '/ammunition',
        subCategories: [{ title: 'Для нарезного оружия',link: '/for_rifles' }, 
                        { title: 'Для гладкоствольного оружия',link: '/for_shotguns' }, 
                        { title: 'Для пневматического оружия',link: '/for_pneumatic' }, 
                        { title: 'Для травматического оружия',link: '/for_traumatic' },],
    },
    {
        title: 'Одежда и обувь',
        link: '/clothes',
    },
    {
        title: 'Аксессуары',
        link: '/accessories',
        subCategories: [{ title: 'Сошки',link: '/bipods' }, 
                        { title: 'Уход за оружием',link: '/gun_care' }, 
                        { title: 'Чехлы' ,link: '/cases'}, 
                        { title: 'Ремни' ,link: '/belts'}, 
                        { title: 'Инструменты',link: '/special_tools' }, 
                        { title: 'Капканы',link: '/traps' }, 
                        { title: 'Чучела животных',link: '/stuffed_animals' }, 
                        { title: 'Наушники и очки',link: '/headphones_glasses' }, 
                        { title: 'Оптика',link: '/sights' }, 
                        { title: 'Остальное',link: '/rest_accessories' }],
    },
]

export default CATEGORIES;