import warningIcon from '../images/warning-icon.svg'
import successIcon from '../images/success-icon.svg'
import dangerIcon from '../images/danger-icon.svg'

export const modalTypes = [
    {
        title: 'Cuidado',
        btn_title: 'Warning',
        icon: warningIcon,
        btn_className: 'btn warning',
        text: 'No podrás volver atrás',
        btn_class: 'btn secondary',
        btn_class_delete: 'btn primary',
        btn_text: 'Borrar',
        btn_text_cancel: 'Cancelar',
    },
    {
        title: '¡Vamos!',
        btn_title: 'Success',
        icon: successIcon,
        btn_className: 'btn success',
        text: 'Todo ha salido bien',
        btn_class: 'btn primary',
        btn_text_cancel: 'Cerrar pestaña',
    },
    {
        title: 'Upss',
        btn_title: 'Error',
        icon: dangerIcon,
        btn_className: 'btn danger',
        text: 'Algo ha pasado',
        btn_class: 'btn primary',
    },
]