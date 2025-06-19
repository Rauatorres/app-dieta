type LoginErrorMsgProps = {
    msg: string
}

export default (props: LoginErrorMsgProps)=>
    <div className="loginErrorMsg">{props.msg}</div>