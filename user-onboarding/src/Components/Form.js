import React from 'react'


const Form = (props) => {

    const { change, submit, errors } = props;

    const {fullname,email,password,kickout,community,social} = props.values;

    const onChange = (e) => {
        const {name, value, checked, type} = e.target;
        const valuesToUse = type === 'checkbox' ? checked : value;
        change(name,valuesToUse);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div className='form-group-input'>
            <p>{errors.fullname}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label>Full Name:&nbsp;
                    <input
                        type='text'
                        placeholder='Enter your first name and last name...'
                        value={fullname}
                        onChange={onChange}
                        name='fullname'
                     />   
                </label><br></br>

                <label>Email:&nbsp;
                    <input
                        placeholder='Enter your original email...'
                        value={email}
                        onChange={onChange}
                        name='email'
                        type='email'
                    />
                </label><br></br>

                <label>Password:&nbsp;
                    <input
                        placeholder='Pick a safe password....'
                        value={password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label><br></br> 
            <div className='terms-of-service'>
                <label>You will need to give up all of your social media
                    <input
                        type='checkbox'
                        name='social'
                        checked={social}
                        onChange={onChange}
                    />
                </label><br></br>
                <label>If you don't follow the rules, you will get kick out
                    <input
                        type='checkbox'
                        name='kickout'
                        checked={kickout}
                        onChange={onChange}
                    />
                </label><br></br>
                <label>Do you wish to be a part of the community
                    <input
                        type='checkbox'
                        name='community'
                        checked={community}
                        onChange={onChange}
                    />
                </label><br></br>
            </div>    
            <div className='submit-button'>
                <input type="submit" value="Create a new account!"/>
            </div>
        </form>
    </div>
    )
}

export default Form;
