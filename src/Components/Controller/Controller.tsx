import React from 'react';
import './Controller.scss';
import {sideBar} from '../../data/sideBar';

function Controller() {
    const [controller, ] = React.useState(sideBar)

    controller.map( (d) => console.log(d.title) )
    return (
        <nav className="controller">
            <div className="controller-container">
                <OrganizationToggle
                    icon="https://visualpharm.com/assets/562/Building-595b40b75ba036ed117d56f3.svg"
                    title="Switch Organization"
                />
                <CurrentPage
                    icon="https://visualpharm.com/assets/426/Product-595b40b75ba036ed117d837f.svg"
                    title="Dashboard"
                />    
                {controller.map( (d) => <SideBarList key={d.title} header={d.title} listOptions={d} /> )}
                
            </div>
        </nav>
    );
}

interface ListProps {
    icon?: string;
    title: string;
}
interface OptionsProps {
    header: string;
    [listOptions: string]: any;
}

const OrganizationToggle = (props: ListProps) => (
    <div className="controller-organization">
        <div className="controller-organization-container">
            <img src={props.icon} alt={props.title} className="controller-organization-1"/>
        </div>
        <div className="controller-organization-title">
            {props.title}
        </div>
        <span>
            &#10549;
        </span>
    </div>
)
const CurrentPage = (props: ListProps) => (
    <div className="controller-currentPage">
        <div className="controller-currentPage-container">
            <img src={props.icon} alt={props.title} className="controller-currentPage"/>
        </div>
        <div className="controller-currentPage-title">
            {props.title}
        </div>
    </div>
)

const SideBarList = (props: OptionsProps) => {

    const keyGraber = Object.keys(props.listOptions)
    
    if(keyGraber.length === 0){
        return <pre>loading</pre>
    }

    const iterator = props.listOptions[keyGraber[2]]
    console.log()

    return(
        <div className="controller-organization-option">         
            <ul className="controller-currentPage-ul">
                <span>{props.header}</span>
                {iterator.map( (sideBar: any) => <List key={sideBar.title} icon={sideBar.icon} title={sideBar.title} /> ) }
            </ul>
        </div>
    )
}

const List = (props: ListProps) => {
    return (
        <>
        <li className="controller-currentPage-li-1">
            <div className="controller-currentPage-container-li">
                <img src={props.icon} alt={props.title} className="controller-currentPage-li"/>
            </div>
        </li>
        <li className="controller-currentPage-li-2">
            <span>{props.title}</span>
        </li>
        </>
    )
}
export default Controller;
