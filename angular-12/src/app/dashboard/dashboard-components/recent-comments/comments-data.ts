export interface Comment{
    image:string,
    name:string,
    comment:string,
    date:string,
    labelClass:string,
    status:string
}

export const  comments:Comment[]=[

    {
        image:'assets/images/users/1.jpg',
        name:'James Anderson',
        comment:'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
        date:'April 14, 2016',
        labelClass:'label-primary',
        status:'Pending'
        
    },
    {
        image:'assets/images/users/4.jpg',
        name:'Michael Jorden',
        comment:'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
        date:'April 14, 2016',
        labelClass:'label-success',
        status:'Pending'
        
    },
    {
        image:'assets/images/users/5.jpg',
        name:'Johnathan Doeting',
        comment:'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
        date:'April 14, 2016',
        labelClass:'label-danger',
        status:'Pending'
        
    },
]