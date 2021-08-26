<template>
    <el-card>
        <el-row class="pb-1">
            <el-col style="max-width: 50px; max-height: 50px" class="text-center" :span="4">
                <el-avatar :size="50" :src="customer.avatar">
                </el-avatar>
            </el-col>
            <el-col style="max-width: 62%" class="col-auto px-3">
                <el-row class="full-height" align="middle">
                    <el-col>
                        <div class="h2 text-nowrap text-ellipsis text-bold">
                            {{ customer.user.first_name }} {{ customer.user.last_name }}
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col class="col-auto text-right">
                <el-dropdown>
                    <span class="el-icon-s-operation h2 pointer"></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item
                                :class="action.class"
                                v-for="(action,index) in actions"
                                :key="index"
                                @click="action.click"
                                :icon="action.icon"
                                class="text-16px"
                            >
                                {{ action.name }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-row>
            <el-col style="max-width: 50px">
            </el-col>
            <el-col class="col-auto px-3">
                <div>
                    <el-descriptions :column="1" size="mini">
                        <el-descriptions-item label-class-name="body-1 text-secondary"
                                              class-name="text-bold text-dark"
                                              label="Номер:">
                            {{ customer.number }}
                        </el-descriptions-item>
                        <el-descriptions-item label-class-name="body-1 text-secondary"
                                              :class-name="'text-bold ' + (customer.balance >= 0 ? 'text-success' : 'text-danger')"
                                              label="Баланс:">
                            {{ customer.balance }} ₽
                        </el-descriptions-item>
                        <el-descriptions-item label-class-name="body-1 text-secondary"
                                              class-name="text-bold text-dark" label="Доп. доступ:">
                            {{ customer.permissions ? 'Есть' : 'Нет' }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>

export default {
    name: "CustomerCard",
    props: {
        customer: {
            type: Object,
        }
    },
    setup() {
        const actions = [
            {
                name: 'Пополнить баланс',
                icon: 'el-icon-circle-plus',
                click:() => {}
            },
            {
                name: 'Списать с баланса',
                icon: 'el-icon-remove',
                click:() => {}
            },
            {
                name: 'Добавить запрос на оплату',
                icon: 'el-icon-s-finance',
                click:() => {}
            },
            {
                name: 'Открыть альбомы',
                icon: 'el-icon-picture',
                click:() => {}
            },
            {
                name: 'История баланса',
                icon: 'el-icon-time',
                click:() => {}
            },
            {
                name: 'Платежи',
                icon: 'el-icon-money',
                click:() => {}
            },
            {
                name: 'Удалить',
                icon: 'el-icon-delete-solid',
                class: 'text-danger',
                click:() => {}
            },
        ]
        return {actions}
    }
}
</script>

