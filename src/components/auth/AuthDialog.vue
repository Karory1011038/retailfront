<template>
    <el-dialog
        title="Авторизация"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue',$event)"
        center
        custom-class="max-width-450">
        <div class="mb-2">Выберите способ авторизации</div>
      <el-button type="primary" style="background-color: #4d7198;" class="full-width text-white mb-2">Вконтакте</el-button>
      <el-button type="warning" style="background-color: #ed812b;" class="full-width text-white m-0">Одноклассники</el-button>
    </el-dialog>
</template>

<script>
export default {
    name: "AuthDialog",
    props: {
        modelValue: Boolean
    },
    setup() {

    }
}
</script>