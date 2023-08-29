import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { newPassword } from '../../redux/actions/authActions'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { notifyError, notifySuccess } from '../../Component/Notify'
const useNewPasswordHook = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [Press, setPress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const validateValues = () => {
        if (password === '') {
            notifyError("من فضلك تاكد من كلمه السر")
            return;
        }
        if (password !== confirmPassword) {
            notifyError("من فضلك  ادخل كلمه سر متطابقه")
            return;
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('submit')
        setPress(true)
        setLoading(true)
        validateValues()
        await dispatch(newPassword({ email: JSON.parse(localStorage.getItem('email')), newPassword: password }))
        setLoading(false)
        setPress(false)

    }
    const res = useSelector(state => state.auth.newPassword)
    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res) {
                if (res.data.status === 'Success') {
                    notifySuccess('تم تغيير كلمه السر بنجاح');
                    setPassword('');
                    setTimeout(() => { navigate('/login'); }, 1500)
                }
                if (res.data.status === 'error') {
                    notifyError('اطلب كود جديد')
                    return;
                }

            }
            else {
                notifyError('اطلب كود جديد')
                return;
            }
            setLoading(true)

        }

    }, [loading])

    return [password, confirmPassword, loading, Press, onChangePassword, onChangeConfirmPassword, onSubmit]
}
export default useNewPasswordHook;