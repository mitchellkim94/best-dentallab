import { useEffect } from 'react';
import { useState } from 'react';
export default () => {
    const [isDesktop, setResponsive] = useState<boolean>();

    useEffect(() => {
        const ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                    setResponsive(entry.contentRect.width >= 520 ? true : false);
              }
        })

        ro.observe(document.querySelector('html')!);
    }, []);

    return isDesktop;
}