import React from 'react';

// Define interfaces para as props dos componentes
interface TittleFormProps {
    Tittle: string;
}

interface SubtittleFormProps {
    SubTittle: string;
}

// Componente TittleForm usando a interface TittleFormProps
const TittleForm: React.FC<TittleFormProps> = ({ Tittle }) => {
    return <h2 className="w-full py-2 bg-slate-700 text-white text-center font-semibold">{Tittle}</h2>
};

// Componente SubtittleForm usando a interface SubtittleFormProps
const SubtittleForm: React.FC<SubtittleFormProps> = ({ SubTittle }) => {
    return <h3 className="mb-3 text-xl mt-10">{SubTittle}</h3>;
};

export { TittleForm, SubtittleForm };