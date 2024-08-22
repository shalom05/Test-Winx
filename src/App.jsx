import React, { useState } from 'react';
import MultipleChoiceQuestion from './Components/Macro/MultipleChoiceQuestion/MultipleChoiceQuestion';
import WinxIntro from './Components/Macro/WinxIntro/WinxIntro';
import MultipleChoiceText from './Components/Macro/MultipleChoiceText/MultipleChoiceText';
import MultipleQuestion from './Components/Macro/MultipleQuestion/MultipleQuestion';
import SliderQuestion from './Components/Macro/SliderQuestion/SliderQuestion';
import CheckboxQuestion from './Components/Macro/CheckboxQuestion/CheckboxQuestion';

export function App() {
    const [page, setPage] = useState(0);

    // Función para cambiar a la siguiente página
    const handleStart = () => {
        setPage(1); // Cambia la página a 1 para mostrar la siguiente sección del quiz
    };

    // Renderiza el componente basado en el estado de `page`
    switch (page) {
        case 0:
            return <WinxIntro onStart={handleStart} />;
        case 1:
            return <MultipleChoiceQuestion />;
        case 2:
            return <MultipleChoiceText />;
        case 3:
            return <MultipleQuestion />;
        case 4:
            return <SliderQuestion />;
        case 5:
            return <CheckboxQuestion />;
        default:
            return <div>404 - Página no encontrada</div>;
    }
}

export default App;
