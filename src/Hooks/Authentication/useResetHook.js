import { useDispatch, useSelector } from "react-redux";
import { notifyError, notifySuccess } from "../../Component/Notify";
import { useEffect, useState } from "react";
import { resetPassword } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
const useResetHook = () => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(true)
    const [press, setPress] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeCode = (e) => {
        setCode(e.target.value)
    }
    const validateValues = () => {
        if (code === '') {
            notifyError('ادخل كود من فضلك');
            return;
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setPress(true)
        validateValues();
        await dispatch(resetPassword({ resetCode:code }))
        setLoading(false)
        setPress(false)
    }
    const res = useSelector(state => state.auth.resetPassword)
    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res.data)
                if (res.data.status === "Success") {
                    notifySuccess('تم تأكيد الكود بنجاح ')
                    setCode('')
                    setTimeout(() => { navigate('/newpassword') }, 1500)
                }
                if (res.data.status === `fail`) {
                    notifyError('من فضلك ادخل كود صحيح ')
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
    return [code, loading, press, onChangeCode, onSubmit]
}

export default useResetHook
