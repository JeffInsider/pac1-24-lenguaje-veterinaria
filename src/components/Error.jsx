
const Error = ({ message }) => {
    return (
        <div className='bg-red-800 text-white font-bold rounded-md p-3 mb-3 text-center uppercase'>
            <p>{message}</p>
        </div>
    )
}

export default Error
