import "./Madal.scss";

const Modal = ({children, active, setActive}) => {

    const onClickBtnExit = () => {
        console.log('click')
      setActive(false);
    }

    return (
        <section
            className={active ? 'modal modal__active' : 'modal'}
        >
            <button className="modal__btn-exit" onClick={() => setActive(false)} />

            <div
                className={active ? 'modal__content modal__content-active' : 'modal__content'}
            >
                {children}
            </div>
        </section>
    )
}

export default Modal;