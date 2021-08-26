<template>
        <el-descriptions direction="vertical" :column="2">
            <el-descriptions-item v-for="(item,index) in counts" :key="index" class-name="text-bold h1">
                <template #label>
                    {{ item.label }}
                    <el-tooltip :content="item.tool"><span class="el-icon-warning-outline"></span></el-tooltip>
                </template>
                {{ item.count }}{{ item.unit }}
            </el-descriptions-item>
        </el-descriptions>
</template>

<script>
export default {
    name: "TotalsBlock",
    props: {
        counts: {
            type: Array,
        }
    },
}
</script>