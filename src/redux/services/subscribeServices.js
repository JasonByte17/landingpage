import axios from "axios";
import Swal from "sweetalert2";

const urlEmail = "https://formspree.io/f/xgedgyzd"

export const sendSubscribe = async (data) => {

    try {
        
        const formData = new FormData();
    
        Object.keys(data).forEach(key => formData.append(key, data[key]))
    
        const config = {
            method: 'post',
            url: urlEmail,
            headers: {
                "Content-Type": "application/json"
            },
            data: formData
        }
    
        const response = await axios(config);
    
        if (response.status == 201 || response.status == 200) {
            
            Swal.fire({
                icon:'success',
                title: 'Gracias',
                text: 'Hemos recibido su solicitud y nos comunicaremos con usted lo más pronto posible',
                showConfirmButton: true
            })

        }else{
            throw new Error('Algo ha salido mal, intente de nuevo más tarde')
        }

        return response.data;


    } catch (error) {
        console.log(error);
        Swal.fire({
            icon:'error',
            title: 'Lo sentimos',
            text: error.message,
            showConfirmButton: true
        })
        return error;
    }


}