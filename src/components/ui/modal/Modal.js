import "./Madal.scss";

const Modal = ({children, active, setActive}) => {
    return (
        <section
            className={active ? 'modal modal__active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <button className="modal__btn-exit" />
            <div
                className={active ? 'modal__content modal__content-active' : 'modal__content'}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </section>
    )
}

export default Modal;