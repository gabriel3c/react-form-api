import { useForm } from 'react-hook-form'
import { sendPost } from '../services/posts'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function CreatePost() {

    const schema = yup.object({
        title: yup.string().required('O post precisa do título').max(20, 'O tamanho máximo do título é 20 caracteres'),
        body: yup.string().required('Cade o texto, assim vazio não dá pra enviar né').min(30, 'Tamanho mínimo de 30 caracteres')
    })

    yup.setLocale({

    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = data => {
        try {
            const postData = async (file) => {
                const resp = await sendPost(file)
                console.log(resp)
                alert('Post criado com sucesso')
                reset()

            }
            postData(data)
        } catch (error) {
            console.log(error.message)
            alert('Ocorreu um erro, tente novamente')
        }

    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Title' {...register('title')}></input>
                <p>{errors.title?.message}</p>

                <br />

                <textarea type='text' placeholder='Type here your post' {...register('body')}></textarea>
                <p>{errors.body?.message}</p>

                <button type='submit'>Criar Post</button>
            </form>
        </div>
    )
}

export default CreatePost