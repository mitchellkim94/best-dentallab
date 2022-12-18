import { useState } from "react"

type UseModalResult = [
    boolean, () => void, () => void
];

export default (): UseModalResult => {
    const [isOpen, setModal] = useState(false);

    return [
        // Modal State
        isOpen,
        // Modal Open
        () => setModal(true),
        // Modal Close
        () => setModal(false)
    ]   
}