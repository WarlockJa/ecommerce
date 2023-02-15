export default function MyButton(props: any) {

    const myButtonStyle = {
        // all: 'unset',
        cursor: 'pointer',
        outline: 'transparent',
        background: 'transparent',
        borderColor: 'transparent',
    }

    if(props.href) return <a style={myButtonStyle} {...props} />
    return (
        <button style={myButtonStyle} type='button' {...props} />
    )
}
