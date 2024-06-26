import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ConfirmationPageVolunteer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div id="confirmation">
            <h2>🎉 All set! 🎉</h2>
            <p>We’ll contact you via email or phone soon.</p>
            <Link to="/volunteer">Back</Link>
        </div>
    )
}