import { useDispatch, useSelector } from "react-redux";
import { notifyError, notifySuccess } from "../../Component/Notify";
import { useEffect, useState } from "react";
import { forgetResetPassword } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
const useForgetHook = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true)
    const [press, setPress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const validateValues = () => {
        if (email === '') {
            notifyError('ادخل ايميل من فضلك');
            return;
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setPress(true)
        validateValues();
        await dispatch(forgetResetPassword({ email }))
        setLoading(false)
        setPress(false)
    }
    const res = useSelector(state => state.auth.forgetPassword)
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res.data)
                if (res.data.status === "Success") {
                    localStorage.setItem('email', JSON.stringify(email))
                    notifySuccess('تم ارسال الكود بنجاح ')
                    setEmail('')
                    setTimeout(() => { navigate('/resertpassword') }, 1500)
                }
                if (res.data.message === `There is no user with this email address ${email}`) {
                    notifyError('من فضلك ادخل ايميل صحيح ')
                    return;
                }
                else {
                    notifyError('لا نستطيع تنفيذ طلبك الآن')
                    return;
                }

            }
            else {
                notifyError('لا نستطيع تنفيذ طلبك الآن')
                return;
            }
        }
    }, [loading])
    return [email, loading, press, onChangeEmail, onSubmit]
}

export default useForgetHook
