import './backDrop.css'

type Props = {
    show: boolean,
}

const BackDrop = ({ show }: Props) => {
    const cssClasses = ['backdrop', show ? 'backdrop-show' : 'backdrop-hide']


    return (
        <div className={cssClasses.join(' ')}></div>
    )
}

export default BackDrop