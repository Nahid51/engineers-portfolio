import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-2/3 mx-auto'>
                <h2 className='font-bold text-2xl'>Get I contact work</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <input type='text' placeholder="Your name" {...register("name", { required: true })} className='border border-gray-100 focus:outline-none bg-transparent p-2 rounded-md' />
                {errors.name && <span>This field is required</span>}

                <input type='text' placeholder="Your email" {...register("email", { required: true })} className='border border-gray-100 focus:outline-none bg-transparent p-2 rounded-md' />
                {errors.email && <span>This field is required</span>}

                <textarea type='text' placeholder='Message' {...register("message", { required: true })} className='border border-gray-100 focus:outline-none bg-transparent p-2 rounded-md' />
                {errors.message && <span>This field is required</span>}

                <button type="submit" className='w-40 py-2 rounded-md cursor-pointer bg-[#9C27B0] font-semibold'>Send request</button>
            </form>
        </div>
    );
};

export default ContactForm;