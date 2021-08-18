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
                <el-col :span="20" class="el-menu--title">
                    username
                </el-col>
                <el-col :span="4" class="text-center">
                    <span @click="$emit('update:modelValue',false)" class="el-icon-close el-menu--close"></span>
                </el-col>
            </el-row>
            <a :href="item.route" class="el-menu-item no-decoration display-block text-white" @click="item.click"
               v-for="(item,index) in menuItems" :key="index" :index="'1-' + index" v-show="!item.hide">
                <span :class="item.icon"></span> {{ item.name }}
            </a>
            <el-menu-item-group title="Администрирование">
                <a href="#" class="el-menu-item no-decoration display-block text-white" @click="item.click"
                   v-for="(item,index) in menuAdminItems" :key="index" :index="'1-' + (index + menuItems.length)"
                   v-show="!item.hide">
                    <span :class="item.icon"></span> {{ item.name }}
                </a>
            </el-menu-item-group>
        </el-menu>
    </el-drawer>
    <auth-dialog v-model="auth_modal"></auth-dialog>
</template>

<script>
import AuthDialog from "@/components/auth/AuthDialog";
import {ref} from "vue";

export default {
    name: "SidebarMenu",
    components: {AuthDialog},
    props: {
        modelValue: Boolean
    },
    emits: ['update:modelValue'],
    setup() {
        const auth_modal = ref(false)
        const menuItems = [
            {
                name: 'Главная',
                icon: 'el-icon-house',
                hide: false,
                route: '/'
            },
            {
                name: 'Каталог',
                icon: 'el-icon-goods',
                hide: false,
                route: '/catalog'
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
                hide: false,
                click: () => {
                    auth_modal.value = true
                },
                route: '#'
            },
            {
                name: 'Выйти',
                icon: 'el-icon-switch-button',
                hide: false,
                route: '#'
            },
        ]
        const menuAdminItems = [
            {
                name: 'Заказы сайта',
                icon: 'el-icon-receiving',
                hide: false
            },
            {
                name: 'Клиенты сайта',
                icon: 'el-icon-user',
                hide: false
            },
            {
                name: 'Настройки сайта',
                icon: 'el-icon-setting',
                hide: false
            },
        ]

        return {menuItems, menuAdminItems, auth_modal}
    }
}
</script>