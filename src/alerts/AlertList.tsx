import React, {HTMLAttributes} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dismissAlertAction, selectAlertListByContext} from "./index";
import {Alert} from "chums-components/dist";

export interface AlertListProps extends HTMLAttributes<HTMLDivElement> {
    context?: string,
    children?: React.ReactNode,
}

const AlertList: React.FC<AlertListProps> = ({
                                                 context,
                                                 children,
                                                 ...rest
                                             }) => {
    const dispatch = useDispatch();
    const list = useSelector(selectAlertListByContext(context));
    const dismissHandler = (id: number) => dispatch(dismissAlertAction(id));

    return (
        <div {...rest}>
            {list.map((alert, index) => (<Alert key={index} {...alert} onDismiss={() => dismissHandler(alert.id)}/>))}
            {children}
        </div>
    )
}

export default AlertList;
