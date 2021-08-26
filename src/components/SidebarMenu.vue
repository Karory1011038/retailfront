<template>
    <el-drawer
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue',$event)"
        direction="ltr"
        :show-close="false"
        :with-header="false"
        :size="300"
    >
        <el-menu
            background-color="var(--appColor)"
            text-color="rgba(255,255,255,.6)"
            active-text-color="#fff"
            style="height: 100%;"
            class="el-menu--hide-border">
            <el-row align="middle">
                <el-col style="min-height: 57px" :span="20" class="el-menu--title">
                    <div class="text-center" v-if="loading"><span class="el-icon-loading"></span></div>
                    <span v-else-if="customer">{{ customer.user.first_name }} {{ customer.user.last_name }}</span>
                </el-col>
                <el-col :span="4" class="text-center">
                    <span @click="closeMenu()" class="el-icon-close el-menu--close"></span>
                </el-col>
            </el-row>
            <router-link tag="a" :to="item.route" class="el-menu-item no-decoration display-block text-white" @click.prevent="item.click"
               v-for="(item,index) in menuItems" :key="index" :index="'1-' + index" v-show="!item.hide">
                <span :class="item.icon"></span> {{ item.name }}
            </router-link>
            <el-menu-item-group title="Администрирование">
                <router-link tag="a" :to="item.route" class="el-menu-item no-decoration display-block text-white" @click.prevent="item.click"
                   v-for="(item,index) in menuAdminItems" :key="index" :index="'1-' + (index + menuItems.length)"
                   v-show="!item.hide">
                    <span :class="item.icon"></span> {{ item.name }}
                </router-link>
            </el-menu-item-group>
        </el-menu>
    </el-drawer>
</template>

<script>
import EventBus from "@/event-bus";
import {useCustomer} from "@/logic/use-customer";
import {useStore} from "vuex";


export default {
    name: "SidebarMenu",
    props: {
        modelValue: Boolean
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const store = useStore()
        const menuItems = [
            {
                name: 'Главная',
                icon: 'el-icon-house',
                hide: false,
                route: {name:'home'}
            },
            {
                name: 'Каталог',
                icon: 'el-icon-goods',
                hide: false,
                route: {name: 'catalog'}
            },
            {
                name: 'Избранное',
                icon: 'el-icon-star-off',
                hide: false,
                route: '/favorites'
            },
            {
                name: 'Мои заказы',
                icon: 'el-icon-document',
                hide: false,
                route: '/orders/:id'
            },
            {
                name: 'Корзина',
                icon: 'el-icon-shopping-cart-2',
                hide: false,
                route: '/cart'
            },
            {
                name: 'Войти',
                icon: 'el-icon-key',
                hide: store.state.auth.is_auth,
                click: () => {
                    EventBus.$emit("show-auth-dialog")
                    closeMenu()
                },
                route: {}
            },
            {
                name: 'Выйти',
                icon: 'el-icon-switch-button',
                hide: !store.state.auth.is_auth,
                click: () => {
                    store.dispatch('auth/LOGOUT')
                    .then(() => {
                        window.location.reload()
                    })
                },
                route: {}
            },
        ]
        const menuAdminItems = [
            {
                name: 'Заказы сайта',
                icon: 'el-icon-receiving',
                hide: false,
                route: '#'
            },
            {
                name: 'Клиенты сайта',
                icon: 'el-icon-user',
                hide: false,
                route: {name:'customers'}
            },
            {
                name: 'Настройки сайта',
                icon: 'el-icon-setting',
                hide: false,
                route: {name:'settings'}
            },
        ]

        const closeMenu = () => {
            emit('update:modelValue', false)
        }
        const {customer, loading} = useCustomer()

        return {
            // Menu
            menuItems,
            menuAdminItems,
            closeMenu,
            // Customer
            customer,
            loading
        }
    }
}
</script>