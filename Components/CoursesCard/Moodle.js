import styles from '../../styles/Moodle.module.css';
export default function Moodle({ openstate, setOpenState }) {
    return (
        <>
            {openstate && <div className={styles.moodle_overlay}>
                    <div className={styles.moodle_wrap}>
                        <div className={styles.moodle_close_button}><div className={styles.close_btn_item} onClick={()=> setOpenState(false)}><svg className={styles.btn_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M2 2L14 14"/><path d="M2 14L14 2"/></svg></div></div>
                        
                        <div className={styles.moodle_title}>
                            <h3 className={styles.title}>$9</h3>
                            <h4 className={styles.title}>Per Month</h4>
                            <h4 className={styles.title}>Proceed to CheckOut</h4>
                        </div>
                        <form className={styles.card_input}>
                            <div className={styles.input_group}>
                                <input type='number' autoComplete='off' maxLength={19} name='card_number' placeholder='Card Number' className={styles.card_number} />
                                <input type='month' name='card_number' className={styles.card_number} />
                                <input type='number' name='card_number' className={styles.card_number} placeholder="CVC Number" />
                            </div>
                        </form>
                        <button type="button" className={styles.moodle_button} aria-label="jsshop-signin-button" name="signin">Subscribe Now</button>
                        <p className={styles.term_policy}>You will be immediately charged $19 for a one month access. Your plan will automatically renew unless cancelled before the renewal date. You are also agreeing to our Terms of Service and our Privacy Policy.</p>
                    </div>
                </div>}
        </>
    );
};