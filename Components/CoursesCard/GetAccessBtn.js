export default function GetAccessBtn({ styles, setOpenState }) {
  return (
    <>
        <div className={styles.get_access_button}>
        <button type="button" className={styles.access_button} onClick={()=> setOpenState(true)}>
            <div className={styles.button_ring}>
                <svg width={55} height={55} className={styles.ring_icon} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={27.5} cy={27.5} r={26.5} stroke="#fc086e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 20 8 1 10 8"></circle><defs><radialGradient cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(27.5 27.5) rotate(107.904) scale(34.1541)"><stop offset="0.0870822" stopColor="#844FFC"></stop><stop offset="0.69191" stopColor="#E1467C"></stop></radialGradient></defs></svg>
            </div>
            <div className={styles.button_background}>
                <svg width={30} height={30} className={styles.icon_courses} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H12V21Z" fill="white" fillOpacity={0.3}/><path d="M21 21H12V3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21Z" fill="white" fillOpacity={0.3}/><path d="M4 12H10" stroke="white" strokeOpacity={0.7} strokeWidth={1.2} strokeMiterlimit={10} /><path d="M4 8H10" stroke="white" strokeOpacity={0.7} strokeWidth={1.2} strokeMiterlimit={10} /><path d="M4 16H10" stroke="white" strokeOpacity={0.7} strokeWidth={1.2} strokeMiterlimit={10} /><path d="M14 12H20" stroke="white" strokeOpacity={0.7} strokeWidth={1.2} strokeMiterlimit={10} /><path d="M14 8H20" stroke="white" strokeOpacity={0.7} strokeWidth={1.2} strokeMiterlimit={10} /></svg>
            </div>
            <div className={styles.button_texts}>
                <p className={styles.p_1}>Get Access Pro Bundle</p>
                <p className={styles.p_2}>$25 Per Month</p>
            </div>
        </button>
        </div>
    </>
  );
}
