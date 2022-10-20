import { Dispatch, SetStateAction } from 'react';

export interface ISectionProps {
    setSection: Dispatch<SetStateAction<string>>;
}

export interface Section extends React.FC<ISectionProps> {}
