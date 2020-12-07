//Main js
const app = new Vue({
    el: '#app',
    data: {
        menu: [
            'Home',
            'Pages',
            'Courses',
            'Features',
            'Blog',
            'Shop'
        ],
        footerExploreFirst: [
            'Start here',
            'Blog',
            'About us'
        ],
        footerExploreSecond: [
            'Success story',
            'Courses',
            'Contact us'
        ],
        information: [
            'Membership',
            'Purchase guide',
            'Privacy policy',
            'Teams of service'
        ],
        online: [
            {
                image: 'course-02.jpg',
                price: '$40,',
                cent: '00',
                title: 'Learning to Write as a Professional Author',
                lessons: '20 Lessons',
                students: '50 Students'
            },
            {
                image: 'stock-full-hd-03.jpg',
                price: '$0,',
                cent: '00',
                title: 'Customer-centric Info-Tech Strategies',
                lessons: '24 Lessons',
                students: '769 Students'
            },
            {
                image: 'stock-full-hd-04.jpg',
                price: '$19,',
                cent: '00',
                title: 'Open Programming Courses for Everyone: Python',
                lessons: '17 Lessons',
                students: '62 Students'
            }
        ]
    },
}); 