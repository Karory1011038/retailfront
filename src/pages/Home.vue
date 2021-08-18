<template>
    <el-row justify="center">
        <el-col :xs="24" :sm="14" :md="12" :lg="10" :xl="8">
            <el-row>
                <el-col style="max-width: 100px">
                    <el-avatar shape="circle" :size="100" fit="contain"
                               src="https://stackup.ru/wp-content/uploads/2019/02/sass-logo1.png"></el-avatar>
                </el-col>
                <el-col class="col-auto px-2">
                    <div class="h3 text-bold">Title</div>
                    <div class="body-1">jfjfjfjjfjfjffff ffffffffff ffffffffffff fffffff fwiejflkw wkjef lwk ef wlkej
                        flkw eflk aw;klf a;l f a alefkjwa lekfhj lkhsffffffal skfjlkajsfs
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
        </el-col>
    </el-row>

</template>

<script>
export default {
    name: "Home",
    setup() {

    }
}
</script>