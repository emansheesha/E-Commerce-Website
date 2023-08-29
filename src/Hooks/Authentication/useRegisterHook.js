import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser } from '../../redux/actions/authActions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { notifyError, notifySuccess } from '../../Component/Notify'
const useRegisterHook = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [number, setNumber] = useState('')
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    const validateValues = () => {
        if (name === '') {
            notifyError('ادخل اسم من فضلك', 'error');
            return;
        }
        if (number.length <= 10) {
            notifyError("من فضلك ادخل رقم هاتف صحيح", "error")
            return;
        }
        if (password != confirmPassword) {
            notifyError("من فضلك تاكد من كلمه السر", "error")
            return;
        }


    }
    const onSubmit = async (e) => {
        e.preventDefault()
        validateValues();
        console.log(name, password);
        setLoading(true)
        await dispatch(addNewUser({ name, email, password, passwordConfirm: confirmPassword, phone: number }))
        setLoading(false)
    }
    const res = useSelector(state => state.auth.user);
    useEffect(() => {
        if (!loading) {
            if (res) {
                console.log(res);
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    notifySuccess('تم الاضافه بنجاح', 'success');
                    setName('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')
                    setNumber('')
                    setTimeout(()=>navigate('/login'), 1500)
                    
                }
                else {
                    notifyError('please enter valid data');
                    return;
                }
            }
        }
    }, [loading])
    return [name, email, password, confirmPassword, number, loading, onChangeName,
        onChangeEmail, onChangePassword, onChangeConfirmPassword, onChangeNumber, onSubmit];
}

export default useRegisterHook
