import { KeyboardEvent, useState } from 'react';
import * as Componet from './styles';

type Props = {
  onEnter: (taskname: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  };

  return (
    <Componet.Container>
      <div className="image">+</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Componet.Container>
  );
};
