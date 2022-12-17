import { RefObject, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { pageTitle } from "../../store/page";

export default <T>(ref: RefObject<T> | null, title?: string) => {
    const titleSetter = useSetRecoilState(pageTitle);

    useEffect(() => {
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    titleSetter(title || '');
                }
            },
            {
                root: null,
                threshold: [0.4, 1]
            }
        );

        io.observe(ref?.current as Element);

        return () => {
            io.disconnect();
        }
    }, [ref]);
}