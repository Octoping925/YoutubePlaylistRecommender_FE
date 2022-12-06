import '../App.css';

interface TitleProps {
    children: string;
}

function Title({children}: TitleProps) {
    return (
        <div className="title">
            <h1>{children}</h1>
        </div>
    );
}

export default Title;
