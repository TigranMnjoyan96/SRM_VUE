<template>
<ul class="sidenav app-sidenav" :class="{open : isOpen}">
    <router-link v-for="item in links" :key="item.link" tag="li" :to="item.link" exact active-class="active">
        <a href="#" class="waves-effect waves-orange pointer">{{item.title}}</a>
    </router-link>
</ul>
</template>

<script>
export default {
    name: 'Sidebar',
    props: ['isOpen'],
    data() {
        return {
            isVisible: true,
            links: [{
                    link: '/',
                    title: 'Счет'
                },
                {
                    link: '/history',
                    title: 'История'
                },
                {
                    link: '/planning',
                    title: 'Планирование'
                },
                {
                    link: '/record',
                    title: 'Новая запись'
                },
                {
                    link: '/categories',
                    title: 'Категории'
                }
            ]
        }
    },
    // computed: {
    //  si() {
    //   console.log(this.isOpen);
    //  }
    // }
    created() {
     this.isOpen
    }
}
</script>
