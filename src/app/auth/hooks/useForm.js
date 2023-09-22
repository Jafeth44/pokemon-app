import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const setInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const setResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        setInputChange,
        setResetForm,
    }
}