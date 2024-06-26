import { useEffect } from "react"

export default function PaymentPage() {
    const divStyle = {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "1200px",
        paddingTop: "100%"
    }

    const frameStyle = {
        position: "absolute",
        border: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <div style={divStyle}>
                <iframe title='Donation form powered by Zeffy' style={frameStyle} src='https://www.zeffy.com/en-US/embed/donation-form/cfa8c571-734f-443a-a3b8-5b0a30ba0618' allowpaymentrequest allowtransparency="true"></iframe>
            </div>
        </div>
    )
}