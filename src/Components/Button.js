import { styled } from "@stitches/react";
import { Archive } from "react-feather";

export const Button = styled('button', {
    outline: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    fontFamily: 'Inter',
    fontSize: '14px',
    borderRadius: '12px',
    padding: '12px',
    color: 'white',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 200ms',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
        transform: 'scale(1.1)'
    },
    '&:active' : {
        transform: 'scale(0.9)'
    },

    '& svg': {
        marginRight: '10px',
    },


    variants: {
        color: {
            grey: {
                backgroundColor: '#2b2d42'
            },
            red: {
                backgroundColor: 'red',
            },

            yellow: {
                backgroundColor: '#ffcb69',
                color: 'black'
            },

            blue: {
                backgroundColor: '#3a86ff'
            },

            black: {
                backgroundColor: '#333533'
            },
            green: {
                backgroundColor: '#06d6a0',
                color: 'black'
            },
        },
        size: {
            sm: {
                fontSize: '16px'
            },
            md: {
                fontSize: '22px'
            },
            lg: {
                fontSize: '26px'
            }
        },

        
    },
    defaultVariants: {
        color: 'black',
        size: 'sm'
    }
})

// () => 