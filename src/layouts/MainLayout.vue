<template>
    <el-container style="height: 100vh" :style="{'--appColor': '#363636'}">
        <sidebar-menu v-model="show_menu"></sidebar-menu>
        <el-header style="background-color: var(--appColor)">
            <el-row style="height: 100%" align="middle">
                <el-col :span="2" class="text-left">
                    <span @click="show_menu = !show_menu" class="el-icon-s-unfold btn-menu text-white"></span>
                </el-col>
                <el-col :span="20" class="text-center">
                    <h4 v-if="!loading" class="text-white">{{ retail.name }}</h4>
                </el-col>
                <el-col :span="2" class="text-right">
                    <span @click="cart_modal = !cart_modal" class="el-icon-shopping-cart-2 btn-menu text-white"></span>
                </el-col>
            </el-row>
        </el-header>
        <el-main style="background-color: #edeef0;" v-if="!loading">
            <router-view></router-view>
        </el-main>
        <auth-dialog></auth-dialog>
    </el-container>
</template>

<script>
import {ref} from "vue";
import SidebarMenu from "@/components/SidebarMenu";
import {useRetail} from "@/logic/use-retail";
import AuthDialog from "@/components/auth/AuthDialog";

export default {
    name: "MainLayout",
    components: {AuthDialog, SidebarMenu},
    setup() {
        const show_menu = ref(false)
        const {retail,loading} = useRetail()
        return {
            show_menu,
            retail,
            loading
        }
    }
}
</script>