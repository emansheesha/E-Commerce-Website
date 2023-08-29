import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/actions/authActions'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { notifyError, notifySuccess } from '../../Component/Notify'
const useLoginHook = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)
    const [Press, setPress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const validateValues = () => {
        if (email === '') {
            notifyError('ادخل ايميل من فضلك');
            return;
        }
        if (password === '') {
            notifyError("من فضلك تاكد من كلمه السر")
            return;
        }
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log('submit')
        setPress(true)
        setLoading(true)
        validateValues()
        await dispatch(loginUser({ email, password }))
        setLoading(false)
        setPress(false)

    }
    const res = useSelector(state => state.auth.loginUser)
    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res) {
                if (res.data.token) {
                    console.log('if')
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    notifySuccess('تم تسجيل الدخول بنجاح', 'success');
                    setEmail('');
                    setPassword('');
                    setTimeout(() => { window.location.href = '/'; }, 1500)
                }
                if (res.data.status === 'error') {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user");
                    console.log('else')
                    notifyError('incorrect email or password')
                    return;
                }

            }
            else {
                localStorage.removeItem("token")
                localStorage.removeItem("user");
                console.log('else')
                notifyError('incorrect email or password')
                return;
            }
            setLoading(true)

        }

    }, [loading])

    return [password, email, loading, Press, onChangePassword, onChangeEmail, onSubmit]
}
export default useLoginHook;