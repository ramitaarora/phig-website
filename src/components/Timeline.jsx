export default function Timeline({ date, firstImage, secondImage, header, description, mainImage }) {
    return (
        <div className="timeline-item">
            <div className="timeline-left">
                <h3>{date}</h3>
                <img src={firstImage} />
                <img src={secondImage} />
            </div>
            <div className="timeline-right">
                <h4>{header}</h4>
                <p>{description}</p>
                <img src={mainImage} />
            </div>
        </div>
    )
}