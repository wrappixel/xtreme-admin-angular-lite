export interface Feed {
    class: string,
    icon: string,
    task: string,
    time: string
}

export const Feeds: Feed[] = [

    {
        class: 'bg-info',
        icon: 'far fa-bell',
        task: 'You have 4 pending tasks.',
        time: 'Just Now'
    },
    {
        class: 'bg-success',
        icon: 'ti-server',
        task: 'Server #1 overloaded.',
        time: '2 Hours ago'
    },
    {
        class: 'bg-warning',
        icon: 'ti-shopping-cart',
        task: 'New order received.',
        time: '31 May'
    },
    {
        class: 'bg-danger',
        icon: 'ti-user',
        task: 'New user registered.',
        time: '30 May'
    },
    {
        class: 'bg-primary',
        icon: 'far fa-user',
        task: 'You have new password.',
        time: '21 May'
    },

] 