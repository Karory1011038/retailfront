import {ElMessageBox, ElNotification} from "element-plus";

export default (msg, err) => {
    ElNotification({
        title: 'Ошибка',
        message: msg,
        type: 'error',
        position: 'bottom-right',
        duration: 0,
        customClass: 'notification',
        onClick: () => {
            ElMessageBox.alert(err.response.data, 'Статус ' + String(err.response.status), {
                confirmButtonText: 'OK',
                customClass: 'max-width-100'
            })
        }
    })
}