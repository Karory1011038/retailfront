<template>
    <el-row justify="center">
        <el-col  :xs="24" :sm="16" :md="14" :lg="12" :xl="10">
            <slot></slot>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "PageLayout"
}
</script>
