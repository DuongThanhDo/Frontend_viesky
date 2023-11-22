import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    children,
    confirm = false,
    green = false,
    white = false,
    sell = false,
    cancel = false,
    save = false,
    seeAll = false,
    width = '',
    act,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={`${width} text-center px-6 py-[10px] shadow-button text-[18px] font-semibold rounded-md active:scale-95 transition-all
            ${
                confirm
                    ? 'bg-#1C71FF text-white'
                    : green
                    ? 'bg-green-500 text-white'
                    : white
                    ? 'bg-white'
                    : cancel
                    ? 'bg-red-500 text-white'
                    : save
                    ? 'bg-yellow-400 text-white'
                    : seeAll
                    ? 'bg-none text-black'
                    : sell && !act
                    ? 'bg-#3F679CCC text-white flex items-center justify-center'
                    : sell && act
                    ? 'bg-#3F679C text-white flex items-center justify-center'
                    : ''
            }`}
            {...props}
        >
            {children}
        </Comp>
    );
}

export default Button;
