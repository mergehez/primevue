export default {
    root: {
        color: '{form.field.float.label.color}',
        focusColor: '{form.field.float.label.focus.color}',
        activeColor: '{form.field.float.label.active.color}',
        invalidColor: '{form.field.float.label.invalid.color}',
        transitionDuration: '0.2s',
        positionX: '{form.field.padding.x}',
        positionY: '{form.field.padding.y}',
        fontWeight: '500',
        focus: {
            fontSize: '0.75rem',
            fontWeight: '400'
        }
    },
    over: {
        focus: {
            top: '-1.25rem'
        }
    },
    in: {
        input: {
            paddingTop: '1.5rem'
        },
        focus: {
            top: '{form.field.padding.y}'
        }
    },
    on: {
        input: {
            paddingTop: '1rem',
            paddingBottom: '1rem'
        },
        focus: {
            background: '{form.field.background}',
            padding: '0 0.125rem'
        }
    }
};
