<template>
    <el-container style="height: 100vh" :style="{'--appColor': '#363636'}">
        <sidebar-menu v-model="show_menu"></sidebar-menu>
        <el-header style="background-color: var(--appColor)">
            <el-row style="height: 100%" align="middle">
                <el-col :span="2" class="text-left">
                    <span @click="show_menu = !show_menu" class="el-icon-s-unfold btn-menu text-white"></span>
                </el-col>
                <el-col :span="20" class="text-center">
                    <h4 class="text-white">name</h4>
                </el-col>
                <el-col :span="2" class="text-right">
                    <span @click="cart_modal = !cart_modal" class="el-icon-shopping-cart-2 btn-menu text-white"></span>
                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <router-view></router-view>
            <el-dialog
                title="Корзина"
                v-model="cart_modal"><cart></cart></el-dialog>
        </el-main>
    </el-container>
</template>

<script>
import {ref} from "vue";
import SidebarMenu from "@/components/SidebarMenu";
import Cart from "@/pages/Cart";

export default {
    name: "MainLayout",
    components: {Cart, SidebarMenu},
    setup() {
        const show_menu = ref(false)
        const cart_modal = ref(false)

        return {
            show_menu,
            cart_modal
        }
    }
}
</script>