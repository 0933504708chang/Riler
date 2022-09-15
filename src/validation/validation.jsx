class validation{
    static Regex = /^[A-Za-z ]+$/;;
    static reEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    static pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/

}

export default validation;  