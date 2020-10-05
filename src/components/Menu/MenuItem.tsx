import React, { useContext } from 'react'
import classNames from 'classnames';
import { MenuContext } from './index'

interface MenuItemProps {
    index: number//每个item不用的索引值
    disabled?: boolean//是否可用
    className?: string
    style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, disabled, className, style, children } = props;
    const context = useContext(MenuContext)//使用共享的context
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        //点击li触发onSelect方法并传递相应index给父组件
        if (context.onSelect && !disabled) context.onSelect(index)
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem