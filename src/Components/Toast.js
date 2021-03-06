import * as ToastPrimitive from '@radix-ui/react-toast';
import { styled } from '@stitches/react';
import { Info } from 'react-feather';

export const Toast2 = ({ Button }) => {
    const ToastViewport = styled(ToastPrimitive.Viewport, {
        position: 'fixed',
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: 390,
        maxWidth: '100vw',
        margin: 0,
        listStyle: 'none',
        zIndex: 2147483647,
    })

    const ToastTitle = styled(ToastPrimitive.Title, {
        fontWeight: 500,
        marginBottom: '2px',
        fontSize: '14px'
    })

    const ToastProvider = styled(ToastPrimitive.Provider, {
    })

    const Toast = styled(ToastPrimitive.Root, {
        fontFamily: 'Inter',
        border: '2px solid rgba(172, 180, 188, 0.5)',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '15px',
        marginRight: '15px',
        boxShadow: 'rgba(21, 50, 83, 0.1) 0px 1px 2px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    })

    const ToastDescription = styled(ToastPrimitive.Description, {
        color: '#676666',
        fontSize: '13px'
    })

    const ToastClose = styled(ToastPrimitive.Close, {
        border: 'none',
        // backgroundColor: '#f4f4f4',
        backgroundColor: '#333533',
        color: '#fff',
        borderRadius: '5px',
        height: 'max-content',
        padding: '7px',
        cursor: 'pointer',
        fontSize: '13px'
    })

    const ToastDetails = styled('div', {
        display: 'flex',
        alignItems: 'center'
    })

    const ToastText = styled('div',{
        marginLeft: '20px'
    })

    return(
        <ToastProvider>
            <Toast>
                <ToastDetails>
                    <Info />
                    <ToastText>
                        <ToastTitle>Button Clicked</ToastTitle>
                        <ToastDescription>This is a short subtitle</ToastDescription>
                    </ToastText>
                </ToastDetails>
                
                
                {/* <ToastAction>fdfd</ToastAction> */}
                <ToastClose>Dismiss</ToastClose>
            </Toast>

            <ToastViewport />
        </ToastProvider>
    )
}