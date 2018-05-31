import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', 
        title: 'Personal', 
        icon: 'mdi mdi-dots-horizontal', 
        class: 'nav-small-cap', 
        extralink: true, 
        submenu: []
    },
    { 
        path: '/starter', 
        title: 'Starter Page', 
        icon: 'mdi mdi-gauge', 
        class: '', 
        extralink: false,
        submenu: []
    },
    {
        path: '', 
        title: 'UI Components', 
        icon: 'mdi mdi-dots-horizontal', 
        class: 'nav-small-cap', 
        extralink: true, 
        submenu: []
    },
    {
        path: '', 
        title: 'Component', 
        icon: 'mdi mdi-bullseye', 
        class: 'has-arrow', 
        extralink: false,
        submenu: [
            { 
                path: '/component/accordion', 
                title: 'Accordion', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/alert', 
                title: 'Alert', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/carousel', 
                title: 'Carousel', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/dropdown', 
                title: 'Dropdown', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/modal', 
                title: 'Modal', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/pagination', 
                title: 'Pagination', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/poptool', 
                title: 'Popover & Tooltip', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/progressbar', 
                title: 'Progressbar', 
                icon: 'mdi mdi-adjust', 
                class: '', 
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/rating', 
                title: 'Ratings', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/tabs', 
                title: 'Tabs', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/timepicker', 
                title: 'Timepicker', 
                icon: 'mdi mdi-adjust', 
                class: '',  
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/buttons', 
                title: 'Button', 
                icon: 'mdi mdi-adjust', 
                class: '', 
                extralink: false, 
                submenu: [] 
            },
            { 
                path: '/component/cards', 
                title: 'Card', 
                icon: 'mdi mdi-adjust',
                class: '',  
                extralink: false, 
                submenu: [] 
            }
        ]
    }    
];

