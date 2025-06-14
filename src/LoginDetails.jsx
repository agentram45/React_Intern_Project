import styles from './LoginDetails.module.css';

const LoginDetails = () => {
    return (
        <>
          <div className= {styles.fullpage3}>
            <div className= {styles.mainpage3}>
                <div className= {styles.content3}>
                    <div className= {styles.heading3}>
                        <p>Account Settings</p>
                    </div>
                    <div className= {styles.details}>
                        <div className= {styles.pics}></div>
                        <div className= {styles.acctdetails}>
                            <h1>Marry Doe</h1>
                            <p>Marry@Gmail.Com</p>
                        </div>
                    </div>
                    <div className= {styles.matter}>
                        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default LoginDetails;