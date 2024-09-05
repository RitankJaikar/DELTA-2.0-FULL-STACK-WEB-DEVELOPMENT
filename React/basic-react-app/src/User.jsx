export default function User({userName, textColor}) {
    return (
        <div className="user">
            <p style={{color: textColor}}>Hello, {userName}</p>
        </div>
    );
}