<template>
    <page-layout>
        <el-row>
            <el-col style="max-width: 100px">
                <el-avatar shape="circle" :size="100" fit="contain"
                           src="https://im0-tub-ru.yandex.net/i?id=482aa8b61223c265d7d9fc9267f9cde2-l&ref=rim&n=13&w=1080&h=1080"></el-avatar>
            </el-col>
            <el-col class="col-auto px-2">
                <div class="h3 text-bold">{{ $store.state.customer.loading_current }}</div>
                <div class="body-1">
                    {{ customer }}
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="4">
                <el-avatar shape="circle" :size="50" fit="cover"
                           src="https://telegra.ph/file/4902945a5752e8e221fc8.jpg"></el-avatar>
            </el-col>
            <el-col :span="4">
                <el-avatar shape="circle" :size="50" fit="cover"
                           src="https://pbs.twimg.com/media/EKkMN0xXkAAaiT6.jpg"></el-avatar>
            </el-col>
            <el-col :span="4">
                <el-avatar shape="circle" :size="50" fit="cover"
                           src="https://logo-logos.com/wp-content/uploads/2016/11/YouTube_icon_logo.png"></el-avatar>
            </el-col>
            <el-col :span="4">
                <el-avatar shape="circle" :size="50" fit="cover"
                           src="https://sobitik.ru/wp-content/uploads/2020/01/instagram-logo_39577000.jpg"></el-avatar>
            </el-col>
            <el-col :span="4">
                <el-avatar shape="circle" :size="50" fit="cover"
                           src="https://sobitik.ru/wp-content/uploads/2020/01/instagram-logo_39577000.jpg"></el-avatar>
            </el-col>
            <el-col :span="4">
                <el-avatar shape="circle" :size="50" fit="cover"
                           src="https://sobitik.ru/wp-content/uploads/2020/01/instagram-logo_39577000.jpg"></el-avatar>
            </el-col>
        </el-row>
        <div class="h2 py-4">Хиты продаж</div>
        <el-empty description="Пока нет данных"></el-empty>
    </page-layout>
</template>

<script>
import {useCustomer} from "@/logic/use-customer";
import PageLayout from "@/layouts/PageLayout";

export default {
    name: "Home",
    components: {PageLayout},
    setup() {
        const {customer} = useCustomer()
        return {customer}
    }
}
</script>