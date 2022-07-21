import * as yup from "yup";

export const subscribeSchema = yup.object({
    email: yup.string().max(50, 'Solo puede digitar un máximo de 50 caracteres').email('Debe digitar un Email válido').required('El campo Email es obligatorio')
})