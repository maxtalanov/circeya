import "./Typography.scss";

const Typography = ({ children, variant}) => {

    // Сорректировать на на конструкцию switch case
    if (variant === "h1") {
       return <h1 className={`typography__${variant}`}>{children}</h1>
    }
    if (variant === "h2") {
        return <h2 className={`typography__${variant}`}>{children}</h2>
    }

}

export default Typography