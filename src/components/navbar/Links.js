export const links = [
    {
        id:1,
        name:"Home",
        link:"/home",
        submenu: false,
    },
    {
        id:2,
        name:"Grades",
        link:"/kinder",
        submenu: true,
        sublinks:[
            {head:"Kinder",link:"/kinder"},
            {head:"Teenager",link:"/teenager"},
            {head:"Adult",link:"/adult"},
        ],
    },
    {
        id:3,
        name:"Program",
        link:"/program",
        submenu: false,
        sublinks:[
            {head:"Speedy",link:"#"},
            {head:"Explorer",link:"#"},
            {head:"Flyer",link:"#"},
            {head:"Space Ranger",link:"#"},
        ],
    },
    {
        id:4,
        name:"Testimoni",
        link:"#",
    },
    {
        id:5,
        name:"Karya Siswa",
        link:"#",
    },
]