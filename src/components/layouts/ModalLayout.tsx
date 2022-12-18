import React, { MouseEventHandler, PropsWithChildren, useEffect } from "react";

interface ModalLayoutProps {
    isOpen: boolean;
    position?: 'center' | 'left' | 'right';
    close: () => void;
};

export default function ModalLayout(props: PropsWithChildren<ModalLayoutProps>) {
    useEffect(() => {
        // 모달이 켜지면 배경 스크롤을 막음
        document.body.style.overflow = props.isOpen ? 'hidden' : 'unset';

        return () => {
            document.body.style.overflow = 'unset'
        }
     }, [props.isOpen]);
   

    return (
        <>
            <div className={`modal_overlay ${props.isOpen ? 'visible' : 'hidden'}`}></div>
            {
                props.isOpen
                ? <div 
                    className={`modal_layout ${props.position || ''}`} 
                    onClick={props.close}
                >
                    <div className="modal_contents" onClick={(e) => e.stopPropagation()}>
                        { props.isOpen ? props.children : null }
                    </div>
                </div>
                : null
            }
        </>
    );
}