import './backDrop.css'

type Props = {
    show: string,
}

const BackDrop = ({ show }: Props) => {
    const cssClasses = ['backdrop', show === 'entering' ?
    'backdrop-show' : show === 'exiting' ?
        'backdrop-hide' : null]
    return (
        <div className={cssClasses.join(' ')}></div>
    )
}

export default BackDrop