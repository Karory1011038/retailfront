<template>
    <el-container style="height: 100vh">
        <el-drawer v-model="show_menu"
                   direction="ltr"
                   :show-close="false"
        >
            <template v-slot:title>
                <h1>Menu</h1>
            </template>
        </el-drawer>
        <el-header style="background-color: lightgrey">
            <span class="el-icon-s-unfold"></span>
        </el-header>
        <el-main>
            <h1>Test</h1>
        </el-main>
    </el-container>
</template>

<script>
import {ref} from "vue";

export default {
    name: "MainLayout",
    setup() {
        const show_menu = ref(false)

        return {
            show_menu
        }
    }
}
</script>